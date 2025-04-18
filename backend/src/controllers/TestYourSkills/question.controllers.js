import { jsQuestions } from "../../data/JavaScriptQuestions/jsQuestions.js";
import { javaQuestions } from "../../data/JavaQuestions/javaQuestions.js"; // if exists
// import other categories as needed

const getQuestionsByCategory = (req, res) => {
  const category = req.query.category;
  console.log("Requested category:", category); // Debug log

  let questions = [];

  switch (category) {
    case "JavaScript":
      questions = jsQuestions.JavaScript;
      break;
    case "Java":
      questions = javaQuestions.Java;
      break;
    // Add more cases here for other categories
    default:
      console.log("Unknown category:", category);
  }

  if (questions.length === 0) {
    return res.status(404).json({ message: "No questions found for this category." });
  }

  return res.status(200).json(questions);
};

export { getQuestionsByCategory };
