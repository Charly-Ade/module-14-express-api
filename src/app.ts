import express, {Request, Response} from "express";
import accountsRouter from "./routes/account";
import transactionsRouter from "./routes/transactions";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.end("Hello world")
});

app.use("/accounts", accountsRouter);
app.use("/transactions", transactionsRouter);

app.use(errorHandler);

export default app;