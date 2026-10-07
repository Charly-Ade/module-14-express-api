import "dotenv/config";
import { z } from "zod";
const envSchema = z.object({
    PORT: z.coerce.number().int().positive(),
    JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
});
export const env = envSchema.parse(process.env);
//# sourceMappingURL=env.js.map