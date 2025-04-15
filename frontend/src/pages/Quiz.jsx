import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 min

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
      .then(res => res.json())
      .then(data => {
        const formatted = data.results.map(q => ({
          question: decodeURIComponent(q.question),
          correct_answer: decodeURIComponent(q.correct_answer),
          options: shuffleArray([
            ...q.incorrect_answers.map(ans => decodeURIComponent(ans)),
            decodeURIComponent(q.correct_answer)
          ])
        }));
        setQuestions(formatted);
      });
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !submitted) {
      handleSubmit();
    }
  }, [timeLeft, submitted]);

  const shuffleArray = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  const handleSelect = (index, option) => {
    setAnswers({ ...answers, [index]: option });
  };

  const handleSubmit = () => {
    let count = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct_answer) count++;
    });
    setScore(count);
    setSubmitted(true);
  };

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="relative pt-16">
      <Navbar />
      
      <h2>Quiz (API Loaded)</h2>
      <div>⏳ Time Left: {formatTime(timeLeft)}</div>
      {!submitted ? (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          {questions.map((q, index) => (
            <div key={index} style={{ margin: '20px 0' }}>
              <p dangerouslySetInnerHTML={{ __html: `Q${index + 1}. ${q.question}` }} />
              {q.options.map((opt, i) => (
                <label key={i} style={{ display: 'block' }}>
                  <input
                    type="radio"
                    name={`q-${index}`}
                    value={opt}
                    checked={answers[index] === opt}
                    onChange={() => handleSelect(index, opt)}
                    required
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h3>Your Score: {score} / {questions.length}</h3>
      )}
    </div>
  );
};

export default Quiz;
