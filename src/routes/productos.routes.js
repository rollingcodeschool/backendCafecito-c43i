import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.route('/producto').get(listarProductos).post(crearProducto);
router.route('/producto/:id').put(editarProducto).delete(borrarProducto).get(obtenerProducto);
// tarea agregar el modelo, ruta y controlador para agregar y listar usuarios
export default router;