import { z } from "zod";
export declare const createAccountSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    accountType: z.ZodEnum<{
        savings: "savings";
        current: "current";
    }>;
    initialDeposit: z.ZodNumber;
}, z.core.$strip>;
export type CreateAccountInput = z.infer<typeof createAccountSchema>;
//# sourceMappingURL=accountSchemas.d.ts.map