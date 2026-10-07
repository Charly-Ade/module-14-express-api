import { Transaction } from "../types";
import { CreateTransactionInput } from "../schemas/transactionSchemas";
export declare const getTransactions: () => Transaction[];
export declare const getTransactionsByAccountId: (accountId: string) => Transaction[];
export declare const createTransaction: (data: CreateTransactionInput) => Transaction;
//# sourceMappingURL=transactionsService.d.ts.map