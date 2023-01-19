import express from "express";
import {
  getAlllinks,
  createlink,
  deletelink,
  findlink
} from "../controller/link.js";


const router3 = express.Router();

router3.route("/").get(getAlllinks).post(createlink);
router3.route("/:id").delete(deletelink);
router3.route("/:params").get(findlink)

export default router3;