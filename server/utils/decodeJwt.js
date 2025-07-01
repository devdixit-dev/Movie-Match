import jwt from 'jsonwebtoken';

export const DecodeJWT = (token) => {
  try {
    if (!token) return null;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    return decoded; // Return the full decoded object
  } catch (e) {
    console.error(`Error decoding JWT token: ${e.message}`);
    return null;
  }
};
