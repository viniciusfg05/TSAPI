import { SpecificationRepository } from "../../repositories/implementation/specificationRepository";
import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationUseCase } from "./createSpecificationUseCase";

const specificationRepository = new SpecificationRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
