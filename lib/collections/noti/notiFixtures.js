var fixtures = [
    {
        type: 'request',
        userId: 'user1',
        info: {
            userId: 'user2',
            transactionId:'transaction1'
        },
        createdAt: new Date()
    },
    {
        type: 'approve',
        userId: 'user1',
        info: {
            userId: 'user2',
            transactionId:'transaction2'
        },
        createdAt: new Date()
    },
    {
        type: 'comment',
        userId: 'user1',
        info: {
            userId: 'user3',
            transactionId:'transaction3'
        },
        createdAt: new Date()
    },
];

if (process.env.LOAD_FIXTURES) {
    Noti.remove({});

    for (var i = 0, n=fixtures.length; i < fixtures.length; i++) {
        Noti.insert(fixtures[i]);
    }
}
