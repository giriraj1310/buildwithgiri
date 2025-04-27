// import React, { useState } from "react";
// import axios from "axios";
// import { FaRobot } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";


// export default function GiriBotWidget() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");

//   const handleAsk = async () => {
//     try {
//       const response = await axios.post(
//         "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
//         { inputs: question },
//         { headers: { Authorization: `Bearer ` } }
//       );
//       setAnswer(response.data.generated_text);
//     } catch (error) {
//       setAnswer("Sorry, GiriBot is sleeping right now 💤");
//     }
//   };

//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
//         aria-label="Open GiriBot"
//       >
//         <FaRobot className="text-2xl" />
//       </button>

//       {isOpen && (
//         <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-lg p-4 z-50">
//           <h4 className="text-lg font-bold mb-2">Ask GiriBot 🤖</h4>
//           <input
//             type="text"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             placeholder="Ask me anything..."
//             className="w-full px-3 py-2 mb-2 border rounded-md"
//           />
//           <button
//             onClick={handleAsk}
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Ask
//           </button>
//           {answer && (
//             <div className="mt-3 p-3 bg-gray-50 rounded-md text-gray-700">
//               {answer}
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import { FaRobot } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function GiriBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const HUGGING_FACE_API_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;

  const handleAsk = async () => {
    if (!question.trim()) return;
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
        { inputs: question },
        { headers: { Authorization: `Bearer ${HUGGING_FACE_API_TOKEN}` } } // <-- Replace with your token
      );
      setAnswer(response.data.generated_text);
    } catch (error) {
      setAnswer("Sorry, GiriBot is recharging right now ⚡");
    }
  };

  return (
    <>
      {/* Floating Robot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="Open GiriBot"
      >
        <FaRobot className="text-2xl" />
      </button>

      {/* Animated Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-lg p-4 z-50"
          >
            {/* 👇 NEW close button container */}
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-bold">Ask GiriBot 🤖</h4>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-700 text-2xl font-bold"
                aria-label="Close Chat"
              >
                ×
              </button>
            </div>

            {/* Rest of your original chatbot content stays */}
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full px-3 py-2 mb-2 border rounded-md"
            />
            <button
              onClick={handleAsk}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Ask
            </button>
            {answer && (
              <div className="mt-3 p-3 bg-gray-50 rounded-md text-gray-700">
                {answer}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
