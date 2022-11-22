import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/categoriesRepository'
import { SpecificationReposity } from '../modules/cars/repositories/specificationRepository'
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/createCategoryUseCase'

const specificationRoutes = Router()

const specificationRepository = new CategoriesRepository()

specificationRoutes.post("/", (req, res) => {
    const { name, description } = req.body

    const createSpecificationRepository = new CreateCategoryUseCase(specificationRepository)

    createSpecificationRepository.execute({ name, description })

    return res.status(201).send()
})

specificationRoutes.get("/", (req, res) => {
    const all = specificationRepository.list()

    return res.status(201).json(all)
})

export { specificationRoutes }