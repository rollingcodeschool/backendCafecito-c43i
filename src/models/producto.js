import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required:true,
        minLength: 2,
        maxLength:50,
        unique:true
    },
    precio:{
        type:Number,
        requided:true,
        min: 50,
        max: 10000
    },
    imagen:{
        type:String,
        required:true,
        validate: {
            validator: (valor)=>{
               return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(valor)
            } ,
            message: dato => `${dato.value} no es una URL de imagen valida` 
        }
    },
    categoria:{
        type:String,
        required:true,
        enum: ['Infusiones', 'Batidos','Dulce', 'Salado']
    },
    descripcion_breve:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    descripcion_amplia:{
        type:String,
        required:true,
        minLength:50,
        maxLength:1000
    },
})

//crear el modelo de producto
const Producto = mongoose.model('producto', productoSchema);

export default Producto;