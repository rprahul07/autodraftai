const asyncHandler = require("express-async-handler");
const Letter = require("../models/LetterSchema");
const axios = require("axios");

// OpenRouter API Key (Set this in your environment variables)
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_MODEL = "deepseek/deepseek-r1:free";

// 🔥 Submit Letter Request
const submitLetter = asyncHandler(async (req, res) => {
  const {
    fullName,
    rollNumber,
    department,
    semester,
    recipient,
    letterType,
    reason,
    description,
    fromDate,
    endDate,
  } = req.body;
  console.log("ok1");
  if (
    !fullName ||
    !rollNumber ||
    !department ||
    !semester ||
    !recipient ||
    !letterType ||
    !fromDate ||
    !endDate
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }
  console.log("ok2");

  // Save Letter Request to DB
  const newLetter = new Letter({
    fullName,
    rollNumber,
    department,
    semester,
    recipient,
    letterType,
    reason,
    description,
    fromDate,
    endDate,
  });
  console.log("wefwe");
  //   await newLetter.save();
  console.log("wefwe");
  console.log("Generating AI Letter...");

  // 🔄 Generate AI Letter Content using OpenRouter
  const generatedLetter = await generateAILetter(
    fullName,
    rollNumber,
    department,
    semester,
    recipient,
    letterType,
    reason,
    description,
    fromDate,
    endDate
  );

  console.log("Generated Letter:", generatedLetter);

  // Update Letter in DB with AI-generated content
  // newLetter.generatedLetter = generatedLetter;
  // await newLetter.save();

  res
    .status(201)
    .json({ message: "Letter generated successfully", generatedLetter });
});

// ✨ AI Letter Generation Function (OpenRouter)
const generateAILetter = async (
  fullName,
  rollNumber,
  department,
  semester,
  recipient,
  letterType,
  reason,
  description,
  fromDate,
  endDate
) => {
  const prompt = `
    Generate a formal ${letterType} for a college student studying at Cochin University College of Engineering Kuttanad (CUCEK), Alappuzha, Kerala.
    Student Details:
    - Name: ${fullName}
    - Roll Number: ${rollNumber}
    - Department: ${department}
    - Semester: ${semester}
    - Recipient: ${recipient} (Principal, HOD, Tutor, etc.)
    - Reason: ${reason}
    - Description: ${description}
    - From Date: ${fromDate}
    - End Date: ${endDate}
    Format it professionally for submission without any extra instructions or placeholders.
    `;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: OPENROUTER_MODEL,
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data?.choices?.[0]?.message?.content) {
      return response.data.choices[0].message.content;
    } else {
      throw new Error("Invalid response from OpenRouter API");
    }
  } catch (error) {
    console.error(
      "OpenRouter API Error:",
      error.response?.data || error.message
    );
    throw new Error("Failed to generate AI letter");
  }
};

module.exports = submitLetter;
