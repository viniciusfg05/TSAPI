import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './listCategoriesUseCase'

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

    handle(req: Request, res: Response) {
        const all = this.listCategoriesUseCase.execute()

        return res.status(201).json(all)
    }
}

export { ListCategoriesController }