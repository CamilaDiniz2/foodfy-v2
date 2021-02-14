module.exports = {
  create(req, res) {
    return res.render('admin/recipes/create');
  },

  post(req, res) {
    return res.send('Post');
  },
};
