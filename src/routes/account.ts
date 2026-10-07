import { Router } from "express";
import {
  createAccount,
  getAccountById,
  getAccounts,
} from "../controllers/accountController";
import { validateBody } from "../middleware/validateRequest";
import { createAccountSchema } from "../schemas/accountSchemas";

const router = Router();

router.get("/", getAccounts);

router.get("/:id", getAccountById);

router.post(
  "/",
  // validateBody(createAccountSchema),
  createAccount,
);

export default router;