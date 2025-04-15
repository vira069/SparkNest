import axios from 'axios';

const getTriviaQuestions = async (req, res) => {
  try {
    const { category, amount = 10 } = req.query;

    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    const categoryMapping = {
      javascript: 15,
      java: 18,
      general: 9,
      // You can extend this list: c, c++, ai, ml, etc.
    };

    const openTriviaCategory = categoryMapping[category.toLowerCase()];
    if (!openTriviaCategory) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const response = await axios.get(`https://opentdb.com/api.php`, {
      params: {
        amount,
        category: openTriviaCategory,
        type: "multiple",
      },
    });

    if (response.data.results.length === 0) {
      return res.status(404).json({ message: "No questions found" });
    }

    const questions = response.data.results.map((question) => ({
      question: question.question,
      options: [...question.incorrect_answers, question.correct_answer],
      answer: question.correct_answer,
    }));

    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export default getTriviaQuestions;