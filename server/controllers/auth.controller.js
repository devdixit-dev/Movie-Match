import bcrypt from 'bcryptjs';
import jwt, { decode } from 'jsonwebtoken';

import User from '../models/user.model.js';
import transporter from '../config/nodemailer.js';
import { DecodeJWT } from '../util/decodeJwt.js';

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
    const otp = Math.floor(100000 + Math.random() * 900000);

    const newUser = await User.create({
      username, email, password: hashPassword, verificationOtp: otp
    });

    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 1d
    });

    // sending welcome and verification email
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: 'Welcome to Movie Match',
      text: `Welcome to movie match website. Your account has been created with email id: ${email}. Your verification OTP is ${otp}`
    }
    await transporter.sendMail(mailOptions);

    return res.status(200)
    .json({
      success: true,
      message: 'User registered successfully. check your email for verification'
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

export const VerifyEmail = async (req, res) => {
  try {
    const token = req.cookies.token;
    const { otp } = req.body;

    if(!otp) {
      return res.status(401).json({
        success: false,
        message: 'OTP field is required',
      });
    }

    const decoded = DecodeJWT(token);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired token',
      });
    }

    const findUser = await User.findById(decoded.id);

    if(!findUser) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email address. please try again.',
      });
    }

    const checkOtp = findUser.verificationOtp === otp

    if(!checkOtp) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired OTP, try again after some time',
      });
    }

    findUser.isVerified = true;
    findUser.verificationOtp = null;
    await findUser.save();

    res.status(200).json({
      success: true,
      message: 'User verified successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error during email verification: ${error.message}`,
    });
  }
};
