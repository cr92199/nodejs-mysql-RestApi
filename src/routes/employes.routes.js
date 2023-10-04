import { Router } from "express";

//importo los controllers
import {
  getEnploye,
  getEmployOne,
  postEmolye,
  putEmploye,
  patchEmploye,
  deleteEmploye,
} from "../controllers/employes.controler.js";

//creo el ROUTER
const router = Router();

//ruta get employee
router.get("/employe", getEnploye);

//ruta get employee One
router.get("/employe/:id", getEmployOne);

//ruta post employee
router.post("/employe", postEmolye);

//ruta put employee
router.put("/employe/:id", putEmploye);

//ruta put employee
router.patch("/employe/:id", patchEmploye);

//ruta delete employee
router.delete("/employe/:id", deleteEmploye);

export default router;
