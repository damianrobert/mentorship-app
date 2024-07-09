import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
    difficulty: {
      type: String,
    },
    categories: {
      type: [String],
    },
    offeredResources: {
      type: String,
    },
    video: {
      type: String, 
    },
    files: {
      type: [String], 
    },
    backgroundImage: {
      type: String, 
    },
  },
  { timestamps: true }
);

const Course =
  mongoose.models.courses || mongoose.model('courses', courseSchema);

export default Course;
