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

export const progressModel = mongoose.model('Lesson', progressSchema);

