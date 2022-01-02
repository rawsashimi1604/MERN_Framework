const mongoose = require("mongoose");

const MyObjectSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
})

module.exports = mongoose.model("MyObject", MyObjectSchema);