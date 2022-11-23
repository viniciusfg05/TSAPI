import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./createSpecificationUseCase";

class CreateSpecificationController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) { }

  handle(req: Request, res: Response) {
    const { name, description } = req.body;

    this.createSpecificationUseCase.execute({ name, description });

    return res.status(201).send();
  }
}

export { CreateSpecificationController };
