import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    categories: {
      type: [String], // Array of strings to store multiple categories/rankings
      required: true,
    },
  },
  { timestamps: true }
);

const Course =
  mongoose.models.courses || mongoose.model('courses', courseSchema);

export default Course;
