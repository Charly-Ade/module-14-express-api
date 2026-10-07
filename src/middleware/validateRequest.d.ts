import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
export declare const validateBody: (schema: ZodSchema) => (req: Request, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=validateRequest.d.ts.map