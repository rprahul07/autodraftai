

const asyncHandler = require("express-async-handler");
const Letter = require("../models/LetterSchema");



// 🔥 Get Generated Letter by ID
const getGeneratedLetter = asyncHandler(async (req, res) => {
    const { id } = req.params;

    // Find letter by ID
    const letter = await Letter.findById(id);

    if (!letter) {
        return res.status(404).json({ error: "Letter not found" });
    }

    res.status(200).json({
        letterId: letter._id,
        generatedLetter: letter.generatedLetter
    });
});
module.exports=getGeneratedLetter;