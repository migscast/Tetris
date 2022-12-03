const mongoose = require("mongoose")
const { Schema } = mongoose

const highScoreSchema = new mongoose.Schema(
    {
        name: (type: String),
        score: { type: Number}
    }
)

const highScore = mongoose.model("highScore", highScoreSchema)
module.exports = highScore