import { Request, Response, NextFunction } from "express";
import { CreateTransactionInput } from "../schemas/transactionSchemas";
import * as transactionsService from "../services/transactionsService";
export const createTransaction = async (req, res, next) => {
    try {
        const transaction = await transactionsService.createTransaction(req.body);
        res.status(201).json(transaction);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=transactionsController.js.map