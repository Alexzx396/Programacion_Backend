import jwt from "jsonwebtoken";
import config from "../utils/config.js";
import logger from "../utils/logger.js";

const PRIVATE_KEY = config.jwt.PRIVATE_KEY;

export function generateToken(username) {
  const token = jwt.sign({ data: username }, PRIVATE_KEY, { expiresIn: "2h" });
  return token;
}

export function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  logger.info("req.headers", req.headers);
  logger.info("authHeader", authHeader);

  if (!authHeader) {
    return res.status(401).json({
      error: "Authorization required",
      message: "Authorization token missing",
    });
  }

  const token = authHeader.split(' ')[1];

    
  jwt.verify(token, PRIVATE_KEY, (err, decoded)=>{
    if(err){
      return res.status(403).json({error: "Invalid token", message: "Access level not allowed"})
    }
    req.user = decoded.data
    
   
    next();
  })

}

/* 
export function generateToken(user) {
  const token = jwt.sign({ data: user }, PRIVATE_KEY, { expiresIn: "2h" });
  return token;
}
export function auth(req, res, next) {
  const authHeader =
    req.headers["authorization"] || req.headers["Authorization"] || "";
  if (!authHeader) {
    return res.status(401).json({
      error: "Authorization required",
      message: "Authorization token missing",
    });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      error: "Authorization required",
      message: "Invalid token format",
    });
  }
  try {
    req.user = jwt.verify(token, PRIVATE_KEY);
  } catch (error) {
    return res
      .status(403)
      .json({ error: "Invalid token", message: "Access level not allowed" });
  }
  next();
}
 */