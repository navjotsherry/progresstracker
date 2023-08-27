import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  Lesson: {
    type: String,
    required: true
  },
  githubPush: {
    type: Boolean,
    required: true
  },
  DSA: {
    type: Boolean,
    required: true
  },
  applicationtoJob: {
    type: Boolean,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

const Lesson = mongoose.model('Lesson', progressSchema);

module.exports = Lesson;
