import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function GiriBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      if (!response.ok) {
        setAnswer("Sorry, GiriBot is recharging right now ⚡");
      } else {
        setAnswer(data.answer);
      }
    } catch (error) {
      setAnswer("Sorry, GiriBot is recharging right now ⚡");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAsk();
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

            <p className="text-xs text-gray-400 mb-3">
              Ask me anything about Giri's career, experience, or how to connect.
            </p>

            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="w-full px-3 py-2 mb-2 border rounded-md text-sm"
            />

            <button
              onClick={handleAsk}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Thinking..." : "Ask"}
            </button>

            {answer && (
              <div className="mt-3 p-3 bg-gray-50 rounded-md text-gray-700 text-sm leading-relaxed">
                {answer}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
