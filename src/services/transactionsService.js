import { Transaction } from "../types";
import { CreateTransactionInput } from "../schemas/transactionSchemas";
import { NotFoundError } from "../middleware/errors";
import * as accountsService from "./accountsService";
const transactions = [];
export const getTransactions = () => {
    return transactions;
};
export const getTransactionsByAccountId = (accountId) => {
    accountsService.getAccountById(accountId);
    return transactions.filter((transaction) => transaction.accountId === accountId);
};
export const createTransaction = (data) => {
    const account = accountsService.getAccountById(data.accountId);
    if (data.type === "withdrawal" && account.balance < data.amount) {
        throw new Error("Insufficient account balance");
    }
    if (data.type === "deposit") {
        account.balance += data.amount;
    }
    else {
        account.balance -= data.amount;
    }
    const transaction = {
        id: crypto.randomUUID(),
        accountId: data.accountId,
        type: data.type,
        amount: data.amount,
        description: data.description,
        createdAt: new Date().toISOString(),
    };
    transactions.push(transaction);
    return transaction;
};
//# sourceMappingURL=transactionsService.js.map