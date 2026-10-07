import { Request, Response, NextFunction } from "express";
import * as accountsService from "../services/accountsService";
import { CreateAccountInput } from "../schemas/accountSchemas";
export const getAccounts = (req, res, next) => {
    try {
        const accounts = accountsService.getAccounts();
        res.json(accounts);
    }
    catch (error) {
        next(error);
    }
};
export const getAccountById = (req, res, next) => {
    try {
        const account = accountsService.getAccountById(req.params.id);
        res.json(account);
    }
    catch (error) {
        next(error);
    }
};
export const createAccount = (req, res, next) => {
    try {
        const account = accountsService.createAccount(req.body);
        res.status(201).json(account);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=accountController.js.map