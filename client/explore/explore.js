Template.explore.helpers({
  posts() {
    return Post.find({}, {
      sort: {
        createdAt: -1,
      }
    });
  }
});
