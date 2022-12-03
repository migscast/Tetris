const mongoose = require("mongoose")
const { Schema } = mongoose

const characterSchema = new mongoose.Schema(
    {
        name: (type: String),
        ability: {type: String},
        id: {type: Number },
    }
)

const character = mongoose.model("character", characterSchema)
module.exports = character