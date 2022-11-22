import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/categoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/createCategoryUseCase'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res)
})

categoriesRoutes.get("/", (req, res) => {
    return listCategoriesController.handle(req, res)

})

export { categoriesRoutes }