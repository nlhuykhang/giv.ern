// var fixtures = [
//   {
//     _id: 'proposal1',
//     postId: 'post1',
//     giverId: 'user1',
//     takerId: 'user2',
//     status: 'request',
//     createdAt: new Date('06/25/2016'),
//   }, {
//     _id: 'proposal2',
//     postId: 'post1',
//     giverId: 'user1',
//     takerId: 'user3',
//     status: 'request',
//     createdAt: new Date('06/25/2016'),
//   }, {
//     _id: 'proposal3',
//     postId: 'post2',
//     giverId: 'user2',
//     takerId: 'user1',
//     status: 'request',
//     createdAt: new Date('06/25/2016'),
//   }, {
//     _id: 'proposal4',
//     postId: 'post2',
//     giverId: 'user2',
//     takerId: 'user3',
//     status: 'request',
//     createdAt: new Date('06/25/2016'),
//   },
// ];
//
// if (process.env.LOAD_FIXTURES) {
//   Proposal.remove({});
//
//   for (var i = 0, n=fixtures.length; i < fixtures.length; i++) {
//     Proposal.insert(fixtures[i]);
//   }
// }
