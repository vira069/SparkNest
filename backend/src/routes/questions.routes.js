import express from "express";
const router = express.Router();
import { getQuestionsByCategory } from "../controllers/TestYourSkills/question.controllers.js";

router.get("/questions", getQuestionsByCategory); // GET /api/questions?category=javascript

export default router;