import express from "express";
import { getTriviaQuestions } from "../controllers/TestYourSkills/quiz.controllers";
const router = express.Router();

router.get("/", getTriviaQuestions); // GET /api/questions?category=javascript

export default router;