const staticImage = 'data:image/png;base64,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'

var fixtures = [
  {
    _id: 'item1',
    type: ['electronic'],
    name: 'item1 name',
    desc: 'item1 desc',
    image: staticImage,
    oriAmount: 3,
    curAmount: 3,
    postId: 'post1',
  }, {
    _id: 'item2',
    type: ['electronic'],
    name: 'item2 name',
    desc: 'item2 desc',
    image: staticImage,
    oriAmount: 3,
    curAmount: 3,
    postId: 'post1',
  }, {
    _id: 'item3',
    type: ['electronic'],
    name: 'item3 name',
    desc: 'item3 desc',
    image: staticImage,
    oriAmount: 3,
    curAmount: 3,
    postId: 'post1',
  }, {
    _id: 'item4',
    type: ['electronic'],
    name: 'item1 name',
    desc: 'item1 desc',
    image: staticImage,
    oriAmount: 2,
    curAmount: 2,
    postId: 'post2',
  }, {
    _id: 'item5',
    type: ['electronic'],
    name: 'item2 name',
    desc: 'item2 desc',
    image: staticImage,
    oriAmount: 2,
    curAmount: 2,
    postId: 'post2',
  }, {
    _id: 'item6',
    type: ['electronic'],
    name: 'item3 name',
    desc: 'item3 desc',
    image: staticImage,
    oriAmount: 3,
    curAmount: 3,
    postId: 'post2',
  },
];

if (process.env.LOAD_FIXTURES) {
  Item.remove({});

  for (var i = 0, n=fixtures.length; i < fixtures.length; i++) {
    Item.insert(fixtures[i]);
  }
}
