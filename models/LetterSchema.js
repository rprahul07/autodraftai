const mongoose = require("mongoose");

const LetterSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    department: { type: String, required: true },
    semester: { type: Number, required: true },
    recipient: { type: String, required: true },
    letterType: { type: String, required: true },
    reason: { type: String, required: false },
    generatedLetter: { type: String, default: "" }, // Stores AI-generated letter text
    pdfPath: { type: String, default: "" }, // Stores path to the generated PDF
    status: { 
        type: String, 
        enum: ["pending", "generated", "downloaded"], 
        default: "pending" 
    }, // Tracks letter status
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Letter", LetterSchema);
