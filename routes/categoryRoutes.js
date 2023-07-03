import express from 'express'
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categortController.js';

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
const  router = express.Router()

// requireSignIn,isAdmin,
router.post('/create-category',createCategoryController )

//requireSignIn, isAdmin,
router.put('/update-category/:id',updateCategoryController)

router.get('/get-category',categoryController);

router.get('/single-category/:slug', singleCategoryController)

//requireSignIn,isAdmin,
router.delete('/delete-category/:id',deleteCategoryController)


export default router