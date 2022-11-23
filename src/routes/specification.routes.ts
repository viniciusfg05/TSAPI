import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/implementation/categoriesRepository";
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategory/createCategoryUseCase";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

const specificationRepository = new CategoriesRepository();

specificationRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

specificationRoutes.get("/", (req, res) => {
  const all = specificationRepository.list();

  return res.status(201).json(all);
});

export { specificationRoutes };
