import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, listarProductos } from "../controllers/productos.controllers.js";

const router = Router();

router.route('/producto').get(listarProductos).post(crearProducto);
router.route('/producto/:id').put(editarProducto).delete(borrarProducto);
// tarea agregar el modelo, ruta y controlador para agregar y listar usuarios
export default router;