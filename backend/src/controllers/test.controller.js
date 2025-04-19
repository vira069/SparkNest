import Performance from '../models/performance.model.js';
import jwt from 'jsonwebtoken';

export const storeTestPerformance = async (req, res) => {
  const { category, score } = req.body;

  try {
    // Verify token and get user ID
    const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const performance = new Performance({
      user: decoded.id,
      category,
      score
    });

    await performance.save();
    res.status(201).json({ message: 'Test performance saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
