import { z } from "zod";
export declare const createTransactionSchema: z.ZodObject<{
    accountId: z.ZodString;
    type: z.ZodEnum<{
        deposit: "deposit";
        withdrawal: "withdrawal";
    }>;
    amount: z.ZodNumber;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateTransactionInput = z.infer<typeof createTransactionSchema>;
//# sourceMappingURL=transactionsSchemas.d.ts.map