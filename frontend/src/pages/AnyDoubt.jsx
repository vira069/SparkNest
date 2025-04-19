import React, { useState } from "react";
import theTeacher from "../assets/Images/the_teacher.png"; // Replace with your actual image path
import Footer from "../components/Footer";

const AnyDoubt = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "You", text: input }]);
    const userMessage = input;
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "SparkNest", text: `You said: ${userMessage}` },
      ]);
    }, 500);
  };

  return (
    <>
    <div className="relative min-h-screen bg-gray-100">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-b from-blue-200 to-white" />
        </div>

        <div className="pt-10 relative z-10">
          <div className="flex flex-row items-center gap-60 p-10">
            
            {/* Left Section - Hello World and animation */}
            <div>
              <h1 className="text-6xl font-bold text-blue-800">QuestionEverything</h1>
              <p className="font-bold text-4xl">Learn something.</p>
              

              {/* Double bouncy circles */}
              <div className="my-5 ml-20 mt-10">
                <div className="relative mx-auto h-24 w-24 animate-bounce">
                  <div className="mx-auto h-40 w-40 rounded-full bg-blue-500 flex items-center justify-center">
                    <h1 className="text-white text-xl">hii</h1>
                  </div>
                  <span className="absolute flex h-6 w-6 animate-spin">
                    <span className="h-5 w-5 rounded-full bg-blue-400"></span>
                  </span>
                </div>
              </div>

              <img
                src={theTeacher}
                alt="The teacher"
                className="w-96 h-auto rounded-lg object-left mt-0"
              />
            </div>

            {/* Right Section - Chat Box */}
            <div className="w-full max-w-md p-4 border rounded-xl shadow-lg bg-blue-300">
              <h2 className="text-xl font-bold mb-4">Any doubt, Buddy...?</h2>

              <div className="h-80 overflow-y-auto border p-2 rounded bg-blue-100 mb-4">
                {messages.map((msg, index) => (
                  <div key={index} className="mb-2">
                    <strong>{msg.sender}:</strong> {msg.text}
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 border rounded px-3 py-2"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleSend}
                >
                  Send
                </button>
              </div>
            </div>
        </div>
        <Footer/>
      </div>
    </div>
    </>
  );
};

export default AnyDoubt;
