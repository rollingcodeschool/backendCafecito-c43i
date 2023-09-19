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
        .withMessage("El nombre del producto es un dato obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage(
          "El nombre del producto debe tener entre 2 y 50 caracteres"
        ),
      check("precio")
        .notEmpty()
        .withMessage("El precio es un valor obligatorio")
        .isNumeric()
        .withMessage("El precio debe ser un número")
        .custom((value) => {
          if (value >= 1 && value <= 10000) {
            return true;
          } else {
            throw new Error("El precio debe estar entre 1 y 10000");
          }
        }),
        check('imagen')
        .notEmpty()
        .withMessage("La imagen es un valor obligatorio")
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("Debe ingresar una url de imagen valida")
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
