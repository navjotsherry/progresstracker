import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  Lesson: {
    type: String
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
    required: true,
    unique: true
  },
  linkedInPost: {
    type:Boolean,
    required:true
  },
  points: {
    type: Number,
    required: true
  }
});

export const progressModel = mongoose.model('progressFactors', progressSchema);

