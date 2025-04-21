import { useState, useEffect } from "react";
import axios from "axios";
import LetterPreview from "./LetterPreview";

const LetterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "Rahul R P",
    rollNumber: "CUSAT2027CSE042",
    department: "Computer Science and Engineering",
    semester: "4",
    recipient: "Head of Department",
    letterType: "Duty Leave",
    reason: "Participation in AI Hackathon",
    description: "Requesting duty leave for attending a 3-day AI Hackathon representing the college.",
    fromDate: "2025-04-22",
    endDate: "2025-04-24"
  });

  const [generatedLetter, setGeneratedLetter] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(90);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    let timer;
    if (loading && countdown > 0) {
      timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    } else if (loading && countdown === 0) {
      setLoading(false);
      alert("Something went wrong! Please try again later.");
    }
    return () => clearTimeout(timer);
  }, [loading, countdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCountdown(90); // reset countdown

    try {
      const response = await axios.post("http://localhost:5001/api/user/submit", formData);
      setGeneratedLetter(response.data.generatedLetter);
      setLoading(false);
    } catch (error) {
      console.error(error);
      // Let countdown handle the alert after 15s
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl space-y-6"
      >
        <h1 className="text-4xl font-extrabold text-indigo-600 text-center tracking-wide font-mono">
          autodraft.ai
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "fullName", placeholder: "Full Name" },
            { name: "rollNumber", placeholder: "Roll Number" },
            { name: "department", placeholder: "Department" },
            { name: "semester", placeholder: "Semester" },
            { name: "recipient", placeholder: "Recipient (e.g., HOD)" },
            { name: "letterType", placeholder: "Letter Type (e.g., Duty Leave)" },
            { name: "reason", placeholder: "Reason" }
          ].map(({ name, placeholder }) => (
            <input
              key={name}
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              className="input"
            />
          ))}

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Short Description"
            className="input resize-none h-24"
          />
          <input
            type="date"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            className="input"
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="input"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 ${
            loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
          } text-white rounded-lg transition duration-300 font-semibold text-lg`}
        >
          {loading ? `Generating... (${countdown}s)` : "Generate Letter"}
        </button>

        {generatedLetter && !loading && (
          <div className="mt-6 p-4 border border-indigo-300 rounded-xl bg-gray-50">
            <LetterPreview letter={generatedLetter} />
          </div>
        )}
      </form>
    </div>
  );
};

export default LetterForm;
