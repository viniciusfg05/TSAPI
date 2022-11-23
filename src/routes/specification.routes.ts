import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/implementation/categoriesRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

export { specificationRoutes };
