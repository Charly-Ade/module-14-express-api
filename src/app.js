import express from "express";
import accountsRouter from "./routes/accounts";
import transactionsRouter from "./routes/transactions";
import { errorHandler } from "./middleware/errorHandler";
const app = express();
app.use(express.json());
app.use("/accounts", accountsRouter);
app.use("/transactions", transactionsRouter);
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map