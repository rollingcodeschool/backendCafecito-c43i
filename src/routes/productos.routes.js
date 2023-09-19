import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import { check } from "express-validator";
import validacionesProducto from "../helpers/validacionProducto.js";

const router = Router();

router
  .route("/producto")
  .get(listarProductos)
  .post(validacionesProducto, crearProducto);
router
  .route("/producto/:id")
  .put(validacionesProducto, editarProducto)
  .delete(borrarProducto)
  .get(obtenerProducto);
// tarea agregar el modelo, ruta y controlador para agregar y listar usuarios
export default router;
