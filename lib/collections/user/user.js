const profile = new SimpleSchema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  avatar: {
    type: String,
  },
  address: {
    type: String,
    optional: true,
  },
  follower: {
    type: [String],
    defaultValue: []
  },
  following: {
    type: [String],
    defaultValue: []
  },
  thanks: {
    type: [String],
    defaultValue: []
  },
  phone: {
    type: String,
    optional: true
  },
  description:{
    type: String,
    optional: true
  }

});

const need = new SimpleSchema({
  electronic: {
    type: Boolean,
    defaultValue: false,
  },
  clothing: {
    type: Boolean,
    defaultValue: false,
  },
  kitchenWare: {
    type: Boolean,
    defaultValue: false,
  },
  pet: {
    type: Boolean,
    defaultValue: false,
  },
  instrument: {
    type: Boolean,
    defaultValue: false,
  },
  food: {
    type: Boolean,
    defaultValue: false,
  },
  book: {
    type: Boolean,
    defaultValue: false,
  },
  vehicle: {
    type: Boolean,
    defaultValue: false,
  },
  houseWare: {
    type: Boolean,
    defaultValue: false,
  },
  beverage: {
    type: Boolean,
    defaultValue: false,
  },
  beautyCare: {
    type: Boolean,
    defaultValue: false,
  },
  staionery: {
    type: Boolean,
    defaultValue: false,
  },
});

const email = new SimpleSchema({
  address: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  verified: {
    type: Boolean,
    optional: true,
  }
});


Meteor.users.attachSchema(new SimpleSchema({
  services: {
    type: Object,
    blackbox: true,
    optional: true,
  },
  emails: {
    type: [email],
    optional: true,
  },
  profile: {
    type: profile,
  },
  need: {
    type: need,
  },
}));
