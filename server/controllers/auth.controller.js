import Service from "../models/service.model.js";

export const getRoute = async(req, res) => {
  res.send('Auth - GET Route')
}

export const RegisterRoute = async(req, res) => {
  try{
    const {username, email, password} = req.body;
  }
  catch(error){
    return res.status(404)
    .json({
      success: false,
      message: `Internal Server Error: ${error}`
    });
  }
}