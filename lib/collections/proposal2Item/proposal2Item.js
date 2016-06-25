Proposal2Item = new Mongo.Collection('proposal2item');

const schema = new SimpleSchema({
  itemId: {
    type: String,
  },
  proposalId: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

Proposal2Item.attachSchema(schema);
