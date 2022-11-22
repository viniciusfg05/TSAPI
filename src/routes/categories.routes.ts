import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/categoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/createCategoryUseCase'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res)
})

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list()

    return res.status(201).json(all)
})

export { categoriesRoutes }