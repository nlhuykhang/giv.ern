FlowRouter.route('/', {
  action(params) {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'explore',
    })
  },
});
FlowRouter.route('/giving', {
  action(params) {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'giving',
    })
  },
});
FlowRouter.route('/trans', {
  action(params) {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'transaction',
    })
  },
});
FlowRouter.route('/profile', {
  action(params) {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'profile',
    })
  },
});
FlowRouter.route('/profile/:id', {
  action(params) {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'theirProfile',
    })
  },
});