import Course from '../models/course.model.js';

export const postCourses = async (req, res) => {
  try {
    const { course } = req.body;
    const {
      title,
      description,
      instructor,
      difficulty,
      categories,
      video,
      files,
      backgroundImage,
    } = course;

    const newCourse = new Course({
      title,
      description,
      instructor,
      difficulty,
      categories,
      video,
      files,
      backgroundImage,
    });

    await newCourse.save();

    res.status(201).json({
      _id: newCourse._id,
      title: newCourse.title,
      description: newCourse.description,
      instructor: newCourse.instructor,
      difficulty: newCourse.difficulty,
      categories: newCourse.categories,
      video: newCourse.video,
      files: newCourse.files,
      backgroundImage: newCourse.backgroundImage,
    });
  } catch (error) {
    console.log('Error in postCourse controller: ', error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    console.log('Error in getCourses controller: ', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
