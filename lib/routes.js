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