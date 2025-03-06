import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Briefcase, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useLetterGeneration from "../Hooks/useLetterGeneration";
import { DownloadLetter } from "./Download";

export default function LetterGeneration() {
  const [formData, setFormData] = useState({
    fullName: "",
    rollNumber: "",
    department: "",
    semester: "",
    letterType: "",
    reason: "",
    description: "",
    recipient: "",
    fromDate: "",
    endDate: "",
  });

  const { loading, letterData, generateLetter } = useLetterGeneration();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("front:", formData);
    await generateLetter({
      fullName: formData.fullName,
      rollNumber: formData.rollNumber,
      department: formData.department,
      semester: formData.semester,
      recipient: formData.recipient,
      letterType: formData.letterType,
      reason: formData.reason,
      description: formData.description,
      fromDate: formData.fromDate,
      endDate: formData.endDate,
    });
  };

  // useEffect(() => {
  //   if (letterData) {
  //     navigate("/download", { state: { letterData } });
  //   }
  // }, [letterData, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <motion.div
        className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-purple-400 mb-2">
            Generate Letter
          </h1>
          <p className="text-gray-400">
            Fill out the details to generate your letter
          </p>
        </motion.div>

        <motion.form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Roll Number
            </label>
            <input
              type="number"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your roll number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your department"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Semester
            </label>
            <input
              type="text"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your semester"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Letter Type
            </label>
            <input
              type="text"
              name="letterType"
              value={formData.letterType}
              onChange={handleChange}
              className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter letter type"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Reason
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter reason for the letter"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter additional details"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Recipient
            </label>
            <input
              type="text"
              name="recipient"
              value={formData.recipient}
              onChange={handleChange}
              className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter recipient"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                From Date
              </label>
              <input
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg"
          >
            {loading ? "Generating..." : "Generate Letter"}
          </motion.button>
          <DownloadLetter letter={letterData} />
        </motion.form>
      </motion.div>
    </div>
  );
}
