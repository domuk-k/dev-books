import { NextFunction, Request, Response } from 'express';

class Middleware {
  public static notFound(req: Request, res: Response, next: NextFunction) {
    res.status(404);
    next(new Error(`🔍 - Not Found - ${req.originalUrl}`));
  }
  public static errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
  }
}

export default Middleware;
