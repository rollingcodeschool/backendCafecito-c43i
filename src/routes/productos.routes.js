import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import { check } from "express-validator";

const router = Router();

router
  .route("/producto")
  .get(listarProductos)
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre de producto es un dato obligatorio"),
    ],
    crearProducto
  );
router
  .route("/producto/:id")
  .put(editarProducto)
  .delete(borrarProducto)
  .get(obtenerProducto);
// tarea agregar el modelo, ruta y controlador para agregar y listar usuarios
export default router;
