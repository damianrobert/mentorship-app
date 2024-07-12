import Post from '../models/post.model.js';

export const postArticle = async (req, res) => {
  const userId = req.params.userId;
  try {
    const { post } = req.body;
    const { title, content, author, genre, firstName, lastName } = post;

    const newPost = new Post({
      title,
      content,
      author,
      genre,
      firstName,
      lastName,
    });

    await newPost.save();

    res.status(201).json({
      _id: newPost._id,
      title: newPost.title,
      content: newPost.content,
      author: newPost.author,
      genre: newPost.genre,
      firstName: newPost.firstName,
      lastName: newPost.lastName,
    });
  } catch (error) {
    console.log('Error in postArticle controller: ', error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getArticles = async (req, res) => {
  try {
    const articles = await Post.find();

    res.status(200).json(articles);
  } catch (error) {
    console.log('Error in getArticles controller: ', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
