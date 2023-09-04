import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        unique:true,
        minLength:2,
        maxLength:50
    },
    precio:{
        type:Number,
        required:true,
        min:1,
        max:10000
    },
    imagen:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    }
})

// vamos a generar un modelo
const Producto = mongoose.model('producto', productoSchema );

export default Producto;