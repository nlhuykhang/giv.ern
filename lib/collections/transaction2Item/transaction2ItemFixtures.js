var fixtures = [
  {
    _id: 'transaction2Item1',
    itemId: 'item1',
    transactionId: 'transaction1',
    amount: '1',
  }, {
    _id: 'transaction2Item2',
    itemId: 'item2',
    transactionId: 'transaction1',
    amount: '1',
  }, {
    _id: 'transaction2Item3',
    itemId: 'item3',
    transactionId: 'transaction1',
    amount: '1',
  }, {
    _id: 'transaction2Item4',
    itemId: 'item1',
    transactionId: 'transaction2',
    amount: '1',
  }, {
    _id: 'transaction2Item5',
    itemId: 'item2',
    transactionId: 'transaction2',
    amount: '1',
  }, {
    _id: 'transaction2Item6',
    itemId: 'item3',
    transactionId: 'transaction2',
    amount: '1',
  }, {
    _id: 'transaction2Item7',
    itemId: 'item4',
    transactionId: 'transaction3',
    amount: '1',
  }, {
    _id: 'transaction2Item8',
    itemId: 'item5',
    transactionId: 'transaction3',
    amount: '1',
  }, {
    _id: 'transaction2Item9',
    itemId: 'item6',
    transactionId: 'transaction3',
    amount: '1',
  },
];

if (process.env.LOAD_FIXTURES) {
  Transaction2Item.remove({});

  for (var i = 0, n=fixtures.length; i < fixtures.length; i++) {
    Transaction2Item.insert(fixtures[i]);
  }
}
