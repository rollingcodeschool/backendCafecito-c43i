import Producto from "../models/producto.js"

export const listarProductos = async (req, res) =>{
    try{
        // ir a la bd y pedir los productos
       const productos = await Producto.find();
       res.status(200).json(productos);

    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar productos"
        })
    }
}

export const crearProducto = async (req, res) =>{
    try{
        // ir a la bd y pedir los productos
        // aqui los datos deberian estar validados
        console.log(req.body)
        const productoNuevo = new Producto(req.body);
        //guardar el productoNuevo en la base de datos
        await productoNuevo.save();
        res.status(201).json({
            mensaje: "El producto fue creado correctamente"
        })   
    }catch(error){
        console.log(error);
        res.status(400).json({
            mensaje: "El producto no pudo ser creado"
        })
    }
}

