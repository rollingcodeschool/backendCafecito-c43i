import { Router } from "express";
import { login } from "../controllers/usuario.controllers.js";

const router = Router();

router.route('/usuario').get(login);

export default router;