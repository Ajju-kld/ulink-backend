import { Request, Response, NextFunction } from "express";
import { Customerror } from "../types/error";


const errorHandler = (
  err: Customerror,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error(`[Error] ${statusCode} - ${message}`);
  console.error(err.stack);

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

export default errorHandler;
