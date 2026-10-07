import { Router } from "express";
import { createTransaction } from "../controllers/transactionsController";
import { validateBody } from "../middleware/validateRequest";
import { createTransactionSchema } from "../schemas/transactionSchemas";
const router = Router();
router.post("/", validateBody(createTransactionSchema), createTransaction);
export default router;
//# sourceMappingURL=transactions.js.map