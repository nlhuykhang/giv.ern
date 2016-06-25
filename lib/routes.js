FlowRouter.route('/', {
  action(params) {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'explore',
    })
  },
});
