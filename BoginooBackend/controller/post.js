import Post from "../model/Post.js";

export const getAllPosts = async (req, res) => {
  try {
    const post = await Post.find({});
    res.status(200).send({
      success: true,
      posts: post,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createPosts = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).send({
      success: true,
      posts: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const searchPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).send({
      success: true,
      posts: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      posts: error.message,
    });
  }
};
export const uptadePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      posts: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      posts: error.message,
    });
  }
};
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      posts: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      posts: error.message,
    });
  }
};
  