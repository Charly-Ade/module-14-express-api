import { Request, Response, NextFunction } from "express";
import * as accountsService from "../services/accountsService";
import { CreateAccountInput } from "../schemas/accountSchemas";

export const getAccounts = (
  _req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    const accounts = accountsService.getAccounts();
    res.json(accounts);
  } catch (error) {
    next(error);
  }
};

export const getAccountById = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    const account = accountsService.getAccountById(String(req.params.id));
    res.json(account);
  } catch (error) {
    next(error);
  }
};

export const createAccount = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    const account = accountsService.createAccount(
      req.body as CreateAccountInput,
    );
    res.status(201).json(account);
  } catch (error) {
    next(error);
  }
};