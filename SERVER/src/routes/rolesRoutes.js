import { Router } from "express";
import {getRoles, getRole, createRole, countRoles, deleteRol, updateRoleById, GetProduct, getUser, GetProducts, agregarProducto, deleteProduct, updateProductById, getPublicProducts, createPublicProduct, deletePublicProduct} from '../controllers/rolesControllers';


const router = Router()


router.get('/roles', getRoles)

router.post('/roles', createRole)

router.get('/roles/count', countRoles)

router.get('/roles/:idRol', getRole)

router.delete('/roles/:idRol', deleteRol)

router.put('/roles/:idRol', updateRoleById)

//productos metodos

// router.get('/products', getProducts)
router.get('/products', GetProducts)
router.post('/products', agregarProducto)
router.get('/products/:idProducto', GetProduct)
router.delete('/products/:idProducto', deleteProduct)
router.put('/products/:idProducto', updateProductById)
//usuarios metodos

router.get('/usuarios', getUser)

//publicar un producto
router.get('/', getPublicProducts)
router.post('/publicProducts', createPublicProduct)
router.delete('/publicProducts/:idProducto', deletePublicProduct)

export default router;