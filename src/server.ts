import express from "express";
import healthRouter from "./routes/health.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use(healthRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});