import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers.js";

const router = Router();

router.route('/producto').get(listarProductos).post(crearProducto);
// router.route('/producto/:id').put()
// tarea agregar el modelo, ruta y controlador para agregar y listar usuarios
export default router;