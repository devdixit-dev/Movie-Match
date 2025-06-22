export const Log = (req, res, next) => {
  console.log(`${req.ip}:${req.method} - ${req.url}`);
  next();
}