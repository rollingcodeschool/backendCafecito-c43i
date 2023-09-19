import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionesProducto = [
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
    check("imagen")
      .notEmpty()
      .withMessage("La imagen es un valor obligatorio")
      .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
      .withMessage("Debe ingresar una url de imagen valida"),
    check("categoria")
      .notEmpty()
      .withMessage("La categoria es obligatoria")
      .isIn(["bebida fria", "bebida caliente", "dulce", "salado"])
      .withMessage("Debe ingresar una categoria valida"),
    //   al final de los check llamamos al archivo de resultado de validaciones
    (req, res, next)=>{resultadoValidacion(req, res, next)}
  ]

  export default validacionesProducto;