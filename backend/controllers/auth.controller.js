import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, password, email, username } = req.body;

    if (!firstName || !lastName || !password || !email || !username) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ message: 'User with same email already exists' });

    const checkUsername = await User.findOne({ username });
    if (checkUsername)
      return res
        .status(400)
        .json({ message: 'This username is taken, please try another one' });

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const avatar = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      username,
      avatar: avatar,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        username: newUser.username,
        avatar: newUser.avatar,
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.log('Error in signup controller', error.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      user?.password || ''
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(201).json({
      message: 'Login successful',
      _id: user._id,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      firstName: user.firstName,
      lastName: user.lastName,
      isAdmin: user.isAdmin,
      roles: user.roles,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    console.log('Error in login controller', error.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ message: 'Logged out succesfully' });
  } catch (error) {
    console.log('Error in logout controller', error.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
