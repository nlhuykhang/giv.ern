Noti = new Mongo.Collection('noti');

// request
//   userId
//   proposalId
//
// decline
//   userId
//   proposalId
//
// approve
//   userId
//   proposalId
//
// complete
//   userId
//   transactionId
//
// comment
//   userId
//   transactionId
//
// cancel
//   userId
//   transactionId
//
// suggest
//   userId
//   transactionId

const info = new SimpleSchema({
  userId: {
    type: String,
  },
  // proposalId: {
  //   type: String,
  //   optional: true,
  // },
  transactionId: {
    type: String,
    optional: true,
  },
});

const schema = new SimpleSchema({
  type: {
    type: String,
    allowedValues: [
      'request',
      'decline',
      'approve',
      'complete',
      'comment',
      'cancel',
      'suggest',
    ],
  },
  userId: {
    type: String,
  },
  info: {
    type: info,
  },
  createdAt: {
    type: Date,
  },
});

Noti.attachSchema(schema);
