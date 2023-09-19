import jwt  from "jsonwebtoken";
import 'dotenv/config';

const generarJWT = (uid, nombreUsuario)=>{
    return new Promise( (resolve, reject)=>{
        //agregar los datos al payload
        const payload = {uid, nombreUsuario};
        //aqui firmamos el token
        jwt.sign(payload,process.env.SECRET_JWT,{
            expiresIn: '3h'
        },(err, token)=>{
            if(err){
                console.log(err);
                reject('No se pudo generar el token')
            }
            //si esta todo correcto
            resolve(token);
        })
    })
}

export default generarJWT