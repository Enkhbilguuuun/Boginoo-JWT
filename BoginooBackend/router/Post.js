import express from "express";
import {
  getAllPosts,
  createPosts,
  searchPost,
  uptadePost,
  deletePost,
} from "../controller/post.js";

const router2 = express.Router();

router2.route("/").get(getAllPosts).post(createPosts);
router2.route("/:id").get(searchPost).put(uptadePost).delete(deletePost);

export default router2;
