import express from "express";
import {
  getAlllinks,
  createlink,
  deletelink,
  findlink,
} from "../controller/link.js";
import { verifyJWT, checkAdmin } from "../middleware/middleware.js";

const router3 = express.Router();

router3.route("/").post(verifyJWT).get(getAlllinks).post(createlink);
router3.delete("/:id", checkAdmin, deletelink);
router3.route("/:params").get(findlink);

export default router3;
