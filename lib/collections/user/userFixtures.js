var fixtures = [
  {
    _id: 'user1',
    services: {
      password: {
        bcrypt: '$2a$10$zEL0uOLvkGNYSNitNxNvLeHO2VFzbwbQmw7CPjzZC99bgfqbzalMu'
      },
    },
    emails: [{
      address: 'user1@gmail.com',
      verified: true,
    }],
    profile: {
      firstName: 'user1 firstname',
      lastName: 'user1 lastname',
      avatar: 'http://www.betapleatedchic.com/uploads/3/0/4/1/30413754/4907429_orig.gif',
    },
    need: {
      electronic: true,
      clothing: true,
      kitchenWare: true,
      pet: true,
      instrument: true,
      food: true,
      book: true,
      vehicle: true,
      houseWare: true,
      beverage: true,
      beautyCare: true,
      staionery: true,
    },
  }, {
    _id: 'user2',
    services: {
      password: {
        bcrypt: '$2a$10$zEL0uOLvkGNYSNitNxNvLeHO2VFzbwbQmw7CPjzZC99bgfqbzalMu'
      },
    },
    emails: [{
      address: 'user2@gmail.com',
      verified: true,
    }],
    profile: {
      firstName: 'user2 firstname',
      lastName: 'user2 lastname',
      avatar: 'http://www.betapleatedchic.com/uploads/3/0/4/1/30413754/4907429_orig.gif',
    },
    need: {
      electronic: true,
      clothing: true,
      kitchenWare: true,
      pet: true,
      instrument: true,
      food: true,
      book: true,
      vehicle: true,
      houseWare: true,
      beverage: true,
      beautyCare: true,
      staionery: true,
    },
  }, {
    _id: 'user3',
    services: {
      password: {
        bcrypt: '$2a$10$zEL0uOLvkGNYSNitNxNvLeHO2VFzbwbQmw7CPjzZC99bgfqbzalMu'
      },
    },
    emails: [{
      address: 'user3@gmail.com',
      verified: true,
    }],
    profile: {
      firstName: 'user3 firstname',
      lastName: 'user3  lastname',
      avatar: 'http://www.betapleatedchic.com/uploads/3/0/4/1/30413754/4907429_orig.gif',
    },
    need: {
      electronic: true,
      clothing: true,
      kitchenWare: true,
      pet: true,
      instrument: true,
      food: true,
      book: true,
      vehicle: true,
      houseWare: true,
      beverage: true,
      beautyCare: true,
      staionery: true,
    },
  },
];

if (process.env.LOAD_FIXTURES) {
  Meteor.users.remove({});

  for (var i = 0, n=fixtures.length; i < fixtures.length; i++) {
    Meteor.users.insert(fixtures[i]);
  }
}
