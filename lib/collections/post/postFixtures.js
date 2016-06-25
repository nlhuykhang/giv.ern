var fixtures = [
  {
    _id: 'post1',
    userId: 'user1',
    content: 'post 1',
    status: 'active',
    location: {
      address: 'post 1 address',
    },
    createdAt: new Date('06/25/2016'),
  }, {
    _id: 'post2',
    userId: 'user2',
    content: 'post 2',
    status: 'active',
    location: {
      address: 'post 2 address',
    },
    createdAt: new Date('06/25/2016'),
  }, {
    _id: 'post3',
    userId: 'user3',
    content: 'post 3',
    status: 'active',
    location: {
      address: 'post 3 address',
    },
    createdAt: new Date('06/25/2016'),
  }, {
    _id: 'post4',
    userId: 'user1',
    content: 'post 4',
    status: 'active',
    location: {
      address: 'post 4 address',
    },
    createdAt: new Date('06/25/2016'),
  }, {
    _id: 'post5',
    userId: 'user2',
    content: 'post 5',
    status: 'active',
    location: {
      address: 'post 5 address',
    },
    createdAt: new Date('06/25/2016'),
  },
];

if (process.env.LOAD_FIXTURES) {
  Post.remove({});

  for (var i = 0, n=fixtures.length; i < fixtures.length; i++) {
    Post.insert(fixtures[i]);
  }
}
