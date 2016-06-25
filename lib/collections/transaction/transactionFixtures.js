var fixtures = [
  {
    _id: 'transaction1',
    postId: 'post1',
    giverId: 'user1',
    takerId: 'user2',
    proposalId: 'proposal1',
    status: 'onprogress',
    createdAt: new Date('06/25/2016'),
  }, {
    _id: 'transaction2',
    postId: 'post1',
    giverId: 'user1',
    takerId: 'user3',
    proposalId: 'proposal2',
    status: 'onprogress',
    createdAt: new Date('06/25/2016'),
  }, {
    _id: 'transaction3',
    postId: 'post2',
    giverId: 'user2',
    takerId: 'user1',
    proposalId: 'proposal3',
    status: 'onprogress',
    createdAt: new Date('06/25/2016'),
  }, {
    _id: 'transaction4',
    postId: 'post2',
    giverId: 'user2',
    takerId: 'user3',
    proposalId: 'proposal4',
    status: 'onprogress',
    createdAt: new Date('06/25/2016'),
  },
];

if (process.env.LOAD_FIXTURES) {
  Transaction.remove({});

  for (var i = 0, n=fixtures.length; i < fixtures.length; i++) {
    Transaction.insert(fixtures[i]);
  }
}
