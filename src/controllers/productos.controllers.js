import { validationResult } from "express-validator";
import Producto from "../models/producto.js";

export const listarProductos = async (req, res) => {
  try {
    // ir a la bd y pedir los productos
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar productos",
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    // ir a la bd y pedir los productos
    // aqui los datos deberian estar validados
    const errors = validationResult(req);
    //errors.isEmpty() true: si esta todo ok, false: si hay errores
    if(!errors.isEmpty()){
      return res.status(400).json({
        errores: errors.array()
      })
    }
    console.log(req.body);
    const productoNuevo = new Producto(req.body);
    //guardar el productoNuevo en la base de datos
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "El producto fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El producto no pudo ser creado",
    });
  }
};
export const editarProducto = async (req, res) => {
  try {
    // ir a la bd y pedir los productos
    // aqui los datos deberian estar validados
    //extraer el parametro id de la ruta
   // Verificar si el producto existe antes de intentar editarlo
   const productoExistente = await Producto.findById(req.params.id);
   if (!productoExistente) {
    return res.status(404).json({ mensaje: "El producto que intentas editar no existe" });
  }

    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El producto fue modificado correctamente",
    });
  } catch (error) {
    // console.log(error);
    // res.status(400).json({
    //   mensaje: "No se puede editar el producto",
    // });
    console.error("Error al editar el producto:", error.message);
    res.status(500).json({ mensaje: "Ocurrió un error al editar el producto" });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El producto fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "No se pudo eliminar el producto",
    });
  }
};
export const obtenerProducto = async (req, res) => {
  try {
    const productoBuscado = await Producto.findById(req.params.id);
    // pueden agregar un if para trabajar el caso de tener un NULL
    if (!productoBuscado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.status(200).json(productoBuscado);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "No se pudo obtener el producto",
    });
  }
};

export const borrarProducto2 = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);

    if (!producto) {
      return res.status(404).json({
        mensaje: "El producto no existe",
      });
    }

    await Producto.findByIdAndDelete(req.params.id);
    
    res.status(200).json({
      mensaje: "El producto fue eliminado correctamente",
    });
  } catch (error) {
    // console.error(error);

    // if (error instanceof mongoose.CastError) {
    //   return res.status(400).json({
    //     mensaje: "ID de producto inválido",
    //   });
    // }
     // Manejo de errores específicos
     console.error("Error al eliminar el producto:", error.message);
     res.status(500).json({ mensaje: "Ocurrió un error al eliminar el producto" });
  }
};