import User from '../models/user.model.js';

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    //get all users except the logged in user
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select();

    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.log('Error in getUsersForSidebar controller: ', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log('Error in getUserById controller: ', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const enrollCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const userId = req.user._id;
    const status = req.params.status;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const alreadyEnrolled = user.enrolledCourses.some(
      (course) => course.courseId.toString() === courseId
    );

    if (alreadyEnrolled) {
      return res
        .status(400)
        .json({ message: 'User already enrolled in this course' });
    }

    // If not enrolled, update the user's enrolled courses
    user.enrolledCourses.push({ courseId, started: status });
    await user.save();

    return res.status(200).json({ message: 'Course enrolled successfully' });
  } catch (error) {
    console.log('Error in enrollCourse controller: ', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const asignMenteeToMentor = async (req, res) => {
  try {
    const mentorId = req.params.mentorId;
    const menteeId = req.params.menteeId;

    const mentor = await User.findByIdAndUpdate(mentorId, {
      $push: {
        mentees: menteeId,
      },
    });

    const mentee = await User.findByIdAndUpdate(menteeId, {
      $push: {
        requests: {
          from: mentorId,
          requestMessage: `Mentorship request from ${mentorId}`,
        },
      },
    });

    if (!mentor || !mentee) {
      return res
        .status(404)
        .json({ message: 'Mentor sau discipol inexistent' });
    }
    return res
      .status(200)
      .json({ message: 'Mentor asignat cu succes către discipol.' });
  } catch (error) {
    console.log('Error in asignMenteeToMentor controller: ', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log('Error in deleteUser controller: ', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
