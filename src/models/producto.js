import mongoose, {Schema} from "mongoose";
// en Mongoose, el "modelo" representa una colección de documentos en la base de datos, mientras que el "esquema" describe la estructura de los datos que se almacenan en esos documentos. Mongoose añade una capa de abstracción sobre MongoDB, permitiendo a los desarrolladores definir esquemas para estructurar los datos de manera más rigurosa y utilizar modelos para interactuar con la base de datos de forma más sencilla y consistente.

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
        required: true,
        validate: {
            validator: function(valor) {
                // Validar URL de imagen
                return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(valor);
            },
            // message: props => `${props.value} no es una URL de imagen válida!`
            message: valor => `${valor} no es una URL de imagen válida!`
        }
    },
    categoria:{
        type: String,
        required: true,
        enum: ['Infusiones','Batidos', 'Dulce', 'Salado']
    },
    descripcion:{
        type: String,
        required: true
    }
})

// vamos a generar un modelo
const Producto = mongoose.model('producto', productoSchema );

export default Producto;