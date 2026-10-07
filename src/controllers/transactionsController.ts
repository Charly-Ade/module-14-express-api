import { Request, Response, NextFunction } from "express";
import { CreateTransactionInput } from "../schemas/transactionsSchemas";
import * as transactionsService from "../services/transactionsService";

export const createTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const transaction = await transactionsService.createTransaction(
      req.body as CreateTransactionInput,
    );

    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
};