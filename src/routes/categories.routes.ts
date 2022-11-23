import { Router } from "express";
import multer from "multer"
// import multer from 'multer';

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

// eslint-disable-next-line prettier/prettier
import upload = multer({
  dest: "./tmp"
});

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  const { file } = req
  console.log(file)
  return res.send()
});

export { categoriesRoutes };
