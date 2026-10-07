import { Request, Response, NextFunction } from "express";
import { NotFoundError, ValidationError } from "./errors";
export const errorHandler = (error, req, res, next) => {
    if (error instanceof NotFoundError) {
        res.status(error.statusCode).json({
            message: error.message,
        });
        return;
    }
    if (error instanceof ValidationError) {
        res.status(error.statusCode).json({
            message: error.message,
            details: error.details,
        });
        return;
    }
    console.error(error);
    res.status(500).json({
        message: "Internal server error",
    });
};
//# sourceMappingURL=errorHandler.js.map