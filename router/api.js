import {Router} from "express";
import validate from "../middlewares/validata.js";
import { getSchema } from "./api.schema.js";


import * as controller from "../controller/productController.js"

const router = Router()

router.get("/", validate(getSchema), controller.getAll)
router.get("/product", validate(getSchema), controller.get)


export default router