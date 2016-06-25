var fixtures = [
  {
    _id: 'comment1',
    userId: 'user2',
    transactionId: 'transaction1',
    content: 'hi please give me these items',
    createdAt: new Date('06/25/2016'),
  }, {
    _id: 'comment2',
    userId: 'user1',
    transactionId: 'transaction1',
    content: 'user1 ask',
    createdAt: new Date('06/25/2016'),
  }, {
    _id: 'comment3',
    userId: 'user2',
    transactionId: 'transaction1',
    content: 'user12 answer',
    createdAt: new Date('06/25/2016'),
  }, {
    _id: 'comment4',
    userId: 'user3',
    transactionId: 'transaction2',
    content: 'hi please give me these items',
    createdAt: new Date('06/25/2016'),
  }, {
    _id: 'comment5',
    userId: 'user1',
    transactionId: 'transaction2',
    content: 'user1 ask',
    createdAt: new Date('06/25/2016'),
  }, {
    _id: 'comment6',
    userId: 'user3',
    transactionId: 'transaction2',
    content: 'user3 answer',
    createdAt: new Date('06/25/2016'),
  },
];

if (process.env.LOAD_FIXTURES) {
  Comment.remove({});

  for (var i = 0, n=fixtures.length; i < fixtures.length; i++) {
    Comment.insert(fixtures[i]);
  }
}
