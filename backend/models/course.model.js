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
    status: {
      started: {
        type: Boolean,
        default: false,
      },
      completed: {
        type: Boolean,
        default: false,
      },
    },
    video: {
      type: String, // URL or GridFS ID
    },
    files: {
      type: [String], // Array of URLs or GridFS IDs
    },
    backgroundImage: {
      type: String, // URL or GridFS ID
    },
  },
  { timestamps: true }
);

const Course =
  mongoose.models.courses || mongoose.model('courses', courseSchema);

export default Course;
