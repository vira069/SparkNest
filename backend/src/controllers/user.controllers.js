import User from "../models/user.model"

// Register User 
const registerUser = async () =>{
    const {fullname, username, email, password } = res.body
    console.log("Email",email);

    if([fullname, username, email, password].some( (field) =>
        field?.trim()===" ")){
        throw new ApiError(400, "All fields are required")
    }
    const UserExists = await User.find
}