import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

// Registration
export const register = async (req, res) => {
    const { username, email, password } = req.body;
    console.log("Register request body:", req.body); 
  
    try {
      const userExists = await User.findOne({ email });
      if (userExists) return res.status(400).json({ message: 'User already exists' });
  
      const newUser = new User({ username, email, password });
      await newUser.save();
  
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.status(201).json({ message: 'User registered successfully', token,  user: { username: newUser.username, email: newUser.email } });
    } catch (error) {
      console.error("Registration Error:", error); 
      res.status(500).json({ message: 'Server error' });
    }
  };
  

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token, user: { username: user.username, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
