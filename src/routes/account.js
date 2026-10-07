import { Router } from "express";
import { createAccount } from "../controllers/accountsController";
import { validateBody } from "../middleware/validateRequest";
import { createAccountSchema } from "../schemas/accountSchemas";
const router = Router();
router.post("/", validateBody(createAccountSchema), createAccount);
export default router;
//# sourceMappingURL=account.js.map