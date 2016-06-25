Comment = new Mongo.Collection('comment');

const schema = new SimpleSchema({
  userId: {
    type: String,
  },
  transactionId: {
    type: String,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

Comment.attachSchema(schema);
