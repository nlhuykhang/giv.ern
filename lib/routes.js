FlowRouter.route('/', {
  action(params) {
    BlazeLayout.render('layout', {
      header: 'test1',
      content: 'test2',
    })
  },
});
