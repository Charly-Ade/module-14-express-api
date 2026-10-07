import { Account } from "../types";
import { CreateAccountInput } from "../schemas/accountSchemas";
import { NotFoundError } from "../middleware/errors";

const accounts: Account[] = [];

export const getAccounts = (): Account[] => {
  return accounts;
};

export const getAccountById = (id: string): Account => {
  const account = accounts.find((item) => item.id === id);

  if (!account) {
    throw new NotFoundError("Account not found");
  }

  return account;
};

export const createAccount = (data: CreateAccountInput): Account => {
  const account: Account = {
    id: crypto.randomUUID(),
    name: data.name,
    email: data.email,
    accountType: data.accountType,
    balance: data.initialDeposit,
  };

  accounts.push(account);

  return account;
};