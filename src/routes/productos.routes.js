import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers.js";

const router = Router();

router.route('/producto').get(listarProductos).post(crearProducto)

export default router;