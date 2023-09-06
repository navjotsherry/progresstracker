import mongoose from "mongoose";

// Define a schema for tracking progress factors
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

// Create a model based on the defined schema
export const progressModel = mongoose.model('progressFactors', progressSchema);