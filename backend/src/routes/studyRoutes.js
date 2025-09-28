import express from "express";
import { getContent } from "../controllers/studyController.js";

const router = express.Router();

router.get("/", getContent);

export default router;
