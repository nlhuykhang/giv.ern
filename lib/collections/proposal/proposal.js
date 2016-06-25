Proposal = new Mongo.Collection('proposal');

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
  status: {
    type: String,
    allowedValues: [
      'request',
      'approve',
      'decline'
    ],
  },
  declineReason: {
    type: String,
    optional: true,
  },
  takerMessage: {
    type: String,
    optional: true,
  },
  createdAt: {
    type: Date,
  },
});

Proposal.attachSchema(schema);
