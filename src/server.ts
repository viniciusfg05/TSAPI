import express from "express";
import { categoriesRoutes } from "./routes/categories.router";

const app = express();

app.use(express.json());

// app.use(categoriesRoutes);

app.use('/categories', categoriesRoutes)

app.listen(8080, () => console.log("Server is running"));
