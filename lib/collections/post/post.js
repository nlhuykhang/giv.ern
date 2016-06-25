Post = new Mongo.Collection('mongo');

const location = new SimpleSchema({
  address: {
    type: String,
  },
  type: {
    type: String,
    defaultValue: 'Point',
  },
  coordinates: {
    type: [Number],
    maxCount: 2,
    optional: true,
  }
});

const schema = new SimpleSchema({
  userId: {
    type: String,
  },
  content: {
    type: String,
  },
  status: {
    type: String,
    allowedValues: [
      'active',
      'deactive',
      'completed'
    ],
  },
  // TODO: if we have time left for location
  location: {
    type: location,
    optional: true,
  },
  createdAt: {
    type: Date,
  },
});

Post.attachSchema(schema);
