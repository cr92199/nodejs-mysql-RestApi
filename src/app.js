import express from "express";
import employesRoutes from "./routes/employes.routes.js";
import { PORT } from "./config/config.js";

// usar express
const app = express();

// interpretar jsonn
app.use(express.json());

//ROUTER employesRoutes
app.use("/api", employesRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint NOT FOUND",
  });
});

app.listen(PORT, () => {
  console.log(`Port listening on port http://localhost:${PORT}`);
});
