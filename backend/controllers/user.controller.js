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
