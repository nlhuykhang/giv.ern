Transaction = new Mongo.Collection('transaction');

const schema = new SimpleSchema({
  postId: {
    type: String,
  },
  giverId: {
    type: String,
  },
  takerId: {
    type: String,
  },
  proposalId: {
    type: String,
  },
  status: {
    type: String,
    allowedValues: [
      'onprogress',
      'complete',
      'cancel',
    ],
  },
  createdAt: {
    type: Date,
  },
});

Transaction.attachSchema(schema);
