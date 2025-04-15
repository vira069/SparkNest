import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function TestYourSkills() {
  const [category, setCategory] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = [
    "JavaScript",
    "Java",
    "General Knowledge",
    "C",
    "C++",
    "Cloud",
    "Backend",
    "AI",
    "Machine Learning",
  ];

  const fetchQuestions = async (selectedCategory) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/questions?category=${selectedCategory}`);
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
    fetchQuestions(selectedCategory);
  };

  return (
    <div className="relative pt-16">
      <Navbar />
      <div className="w-full flex flex-col gap-6 justify-center items-center mt-8">
        <div className="tabs p-section-tabs w-full max-w-2xl">
          <div className="tabs__header p-section-tabs__header flex justify-around gap-4">
            {categories.map((cat) => (
              <div
                key={cat}
                className="tabs__tab p-section-tabs__header-tab px-4 py-2 rounded-md shadow-md text-center cursor-pointer hover:bg-blue-200"
                onClick={() => handleCategoryClick(cat.toLowerCase())}
              >
                <span>{cat}</span>
              </div>
            ))}
          </div>

          <div className="tabs__tab-content mt-6 p-4 h-[600px] w-[675px] rounded-md shadow-md bg-slate-600 text-center">
            {loading ? (
              <p>Loading questions...</p>
            ) : (
              <div>
                <h2 className="text-lg font-bold mb-4">Questions for {category}</h2>
                {questions.length > 0 ? (
                  questions.map((question, index) => (
                    <div key={index} className="mb-4">
                      <p>{question.question}</p>
                      <ul>
                        {question.options.map((option, idx) => (
                          <li key={idx}>{option}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <p>No questions found for this category.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestYourSkills;
