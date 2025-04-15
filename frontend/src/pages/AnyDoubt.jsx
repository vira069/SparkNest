import React, { useState } from "react";
import Footer from "../components/Footer";
import theTeacher from "../assets/Images/the_teacher.png"

const AnyDoubt = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "You", text: input }]);
    setInput("");
    // Dummy bot reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "SparkNest", text: `You said: ${input}` }]);
    }, 500);
  };

  return (
    <>

      <div class="absolute inset-0">
        <div class="relative h-full w-full [&>div]:absolute [&>div]:bottom-0 [&>div]:right-0 [&>div]:z-[-2] [&>div]:h-full [&>div]:w-full [&>div]:bg-gradient-to-b [&>div]:from-blue-200 [&>div]:to-white">
          <div></div>

          <div className="flex flex-row items-center  min-h-screen bg-gray-100 gap-60">
            <div><h1>Hello World</h1>

            {/*Double bouncy circles*/}
            <div class="my-5 ml-56 mt-64">
              <div class="relative mx-auto h-24 w-24 animate-bounce ">
                <div class="mx-auto h-40 w-40  rounded-full bg-blue-500 flex items-center justify-center"><h1 className="text-white text-xl">hii</h1></div>
                <span class="absolute flex h-6 w-6 animate-spin">
                  <span class="h-5 w-5  rounded-full bg-blue-400"></span>
                </span>
              </div>
            </div>

            <img src={theTeacher} alt="The teacher" className="w-96 h-auto rounded-lg object-left" />

          </div>
      
          <div className="ml-80 w-full max-w-md p-4 border rounded-xl shadow-lg bg-blue-300">
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSend}>
            Send
          </button>
       </div>
      </div>
    </div>



        </div>
        <Footer/>
      </div>
    </>
  );
};

export default AnyDoubt;
