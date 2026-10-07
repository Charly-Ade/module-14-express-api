export type AccountType = "savings" | "current";
export type TransactionType = "deposit" | "withdrawal";
export interface Account {
    id: string;
    name: string;
    email: string;
    accountType: AccountType;
    balance: number;
}
export interface Transaction {
    id: string;
    accountId: string;
    type: TransactionType;
    amount: number;
    description?: string;
    createdAt: string;
}
//# sourceMappingURL=index.d.ts.map