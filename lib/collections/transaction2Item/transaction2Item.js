Transaction2Item = new Mongo.Collection('transaction2item');

const schema = new SimpleSchema({
  itemId: {
    type: String,
  },
  transactionId: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

Transaction2Item.attachSchema(schema);
