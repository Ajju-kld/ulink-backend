import express from "express";
import requestLogger from "./middleware/requestLogger";
import errorHandler from "./middleware/error.middleware";
import { connectDB, disconnectDB } from "./database/connection";
import authRouter from "./routes/auth.routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(requestLogger);
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use('/auth',authRouter);
app.use(errorHandler);

async function startServer() {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

startServer();

//handling the disconnect event of the database
process.on("SIGINT", async () => {
  // SIGINT is the signal generated when you press ctrl+c
  await disconnectDB();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  // SIGTERM is the signal generated when you kill the process
  await disconnectDB();
  process.exit(0);
});
