import { Router } from "express";
import {
  getAllPosts,
  createPost,
  likePost,
  deletePost,
} from "../controllers/posts.controller.js";

const router = Router();

router.get("/", getAllPosts);             // GET /posts
router.post("/", createPost);             // POST /posts
router.put("/like/:id", likePost);        // PUT /posts/like/:id
router.delete("/:id", deletePost);        // DELETE /posts/:id

export default router;
