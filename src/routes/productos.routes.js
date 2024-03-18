import { Router } from "express";
import {
  borrarProducto,
  borrarProducto2,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import { check } from "express-validator";
import validacionesProducto from "../helpers/validacionProducto.js";

const router = Router();

router
  .route("/productos")
  .get(listarProductos)
  .post(
    [validacionesProducto],
    crearProducto
  );
router
  .route("/productos/:id")
  .put( [validacionesProducto],editarProducto)
  .delete(borrarProducto2)
  .get(obtenerProducto);
// tarea agregar el modelo, ruta y controlador para agregar y listar usuarios
export default router;
