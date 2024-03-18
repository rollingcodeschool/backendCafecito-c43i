import { Router } from "express";
import { borrarProducto, borrarProducto2, crearProducto, editarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.route('/productos').get(listarProductos).post(crearProducto);
router.route('/productos/:id').put(editarProducto).delete(borrarProducto2).get(obtenerProducto);
// tarea agregar el modelo, ruta y controlador para agregar y listar usuarios
export default router;