import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'

export const getRoute = async(req, res) => {
  res.send('Auth - GET Route')
}

export const RegisterRoute = async(req, res) => {
  try{
    const {username, email, password} = req.body;

    if(!username || !email || !password){
      return res.status(400)
      .json({ success: false, message: 'All field are required' });
    }

    const user = await User.findOne({ email });

    if(user){
      return res.status(409)
      .json({ success: false, message: 'User already exist' });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = User.create({
      username, email, password: hashPassword
    });
    await newUser.save();

    return res.status(200)
    .json({
      success: true,
      message: 'User registered successfully'
    })
  }
  catch(error){
    return res.status(500)
    .json({
      success: false,
      message: `Server error during registration: ${error}`
    });
  }
}