import { Router } from "express";
import { crearUsuario, listarUsuarios, login } from "../controllers/usuario.controllers.js";

const router = Router();

router.route('/').post(login).get(listarUsuarios);
router.route('/nuevo').post(crearUsuario);


export default router;