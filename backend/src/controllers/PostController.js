const Post = require('../models/Post');

module.exports = {
  async index(req, res) {
    const posts = await Post.find();

    return res.json(posts);
  },

  async store(req, res) {
    const { newName: name, size, key, location: url = '' } = req.file;

    const post = await Post.create({
      name,
      size,
      key,
      url,
    });

    return res.json({ post });
  },

  async destroy(req, res) {
    const post = await Post.findById(req.params.id);

    await post.remove();

    return res.send();
  },
};
