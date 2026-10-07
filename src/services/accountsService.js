import { Account } from "../types";
import { CreateAccountInput } from "../schemas/accountSchemas";
import { NotFoundError } from "../middleware/errors";
const accounts = [];
export const getAccounts = () => {
    return accounts;
};
export const getAccountById = (id) => {
    const account = accounts.find((item) => item.id === id);
    if (!account) {
        throw new NotFoundError("Account not found");
    }
    return account;
};
export const createAccount = (data) => {
    const account = {
        id: crypto.randomUUID(),
        name: data.name,
        email: data.email,
        accountType: data.accountType,
        balance: data.initialDeposit,
    };
    accounts.push(account);
    return account;
};
//# sourceMappingURL=accountsService.js.map