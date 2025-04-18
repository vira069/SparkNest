import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    options: [String],
    answer: {
        type: String,
        required: true
    },
});

export const Questions = mongoose.model("Questions", questionSchema);