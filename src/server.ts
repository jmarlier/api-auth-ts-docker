import express from "express";
import healthRouter from "./routes/health.routes";
import usersRouter from "./routes/users.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use(healthRouter);
app.use(usersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});