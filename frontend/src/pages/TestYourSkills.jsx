import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const categories = [
  "JavaScript", "Java", "C", "C++",
  "Cloud", "Backend", "AI", "Machine Learning"
];

function TestYourSkills() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  // Timer countdown
  useEffect(() => {
    if (quizStarted && !submitted && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && quizStarted && !submitted) {
      handleSubmit();
    }
  }, [timeLeft, quizStarted, submitted]);

  // Fetch questions when quiz starts
  const startQuiz = () => {
    fetch(`http://localhost:5000/api/questions?category=${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setQuizStarted(true);
      });
  };

  const handleOptionChange = (qIndex, option) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="relative pt-16 min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-black">
      <Navbar />
      <div className="flex flex-col items-center mt-10 px-6 text-white">
        {!quizStarted ? (
          <>
            <h1 className="text-3xl font-bold mb-6">Select a Category to Begin</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {categories.map((cat) => (
                <div
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer p-4 rounded-xl shadow-lg text-center text-lg font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white scale-105"
                      : "bg-white text-black hover:bg-blue-300"
                  }`}
                >
                  {cat}
                </div>
              ))}
            </div>
            {selectedCategory && (
              <button
                onClick={startQuiz}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md shadow-md"
              >
                Start Test
              </button>
            )}
          </>
        ) : (
          <div className="w-full max-w-3xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">{selectedCategory} Quiz</h2>
              <div className="bg-black text-white px-4 py-1 rounded-full font-mono">
                Time Left: {formatTime(timeLeft)}
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="space-y-6"
            >
              {questions.map((q, i) => (
                <div
                  key={i}
                  className="bg-white text-black p-4 rounded-lg shadow-md"
                >
                  <h4 className="mb-2 font-semibold">
                    Q{i + 1}. {q.question}
                  </h4>
                  {q.options.map((opt, j) => (
                    <label key={j} className="block ml-4 cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${i}`}
                        value={opt}
                        checked={answers[i] === opt}
                        onChange={() => handleOptionChange(i, opt)}
                        className="mr-2"
                        required
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              ))}
              {!submitted ? (
                <button
                  type="submit"
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Submit Test
                </button>
              ) : (
                <h3 className="text-white text-xl font-bold mt-4">
                  Your Score: {score} / {questions.length}
                </h3>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestYourSkills;
