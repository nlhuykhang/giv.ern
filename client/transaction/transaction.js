editItemAmountId = new ReactiveVar('');

Template.transaction.helpers({
  giver() {
    const transId = FlowRouter.getParam('transId');
    const trans = Transaction.findOne({
      _id: transId,
    });

    return Meteor.users.findOne({
      _id: trans && trans.giverId,
    });
  },
  receiver() {
    const transId = FlowRouter.getParam('transId');
    const trans = Transaction.findOne({
      _id: transId,
    });

    return Meteor.users.findOne({
      _id: trans && trans.takerId,
    });
  },
  t2i() {
    const transId = FlowRouter.getParam('transId');

    return Transaction2Item.find({
      transactionId: transId,
    });
  },
  comments() {
    return Comment.find({
      transactionId: FlowRouter.getParam('transId'),
    }, {
      sort: {
        createdAt: -1
      }
    });
  },
  commentAva() {
    const user = Meteor.users.findOne({
      _id: this.userId,
    });

    return user && user.profile.avatar;
  },
});

Template.transaction.events({
  'submit #chat-input-form': function(e) {
    e.preventDefault();

    Comment.insert({
      userId: Meteor.userId(),
      transactionId: FlowRouter.getParam('transId'),
      content: e.target.content.value,
      createdAt: new Date,
    });
  },
});

Template.transItem.helpers({
  item() {
    return Item.findOne({
      _id: this.itemId,
    });
  }
});

Template.transItem.events({
  'click .ts-item': function(e, t) {
    editItemAmountId.set(this._id);
    $('#edit-trans-item').modal('show');
  },
});

Template.editTransItems.helpers({
  t2i() {
    return Transaction2Item.findOne(editItemAmountId.get());
  },
  item() {
    const t2i = Transaction2Item.findOne(editItemAmountId.get());
    return Item.findOne({
      _id: t2i && t2i.itemId,
    });
  }
});

Template.editTransItems.events({
  'click .update-t2i': function(e, t) {

    const t2i = Transaction2Item.findOne(editItemAmountId.get());

    Transaction2Item.update({
      _id: editItemAmountId.get(),
    }, {
      $set: {
        amount: parseInt(t.find('input[type="number"]').value)
      }
    });

    Comment.insert({
      transactionId: t2i.transactionId,
      userId: Meteor.userId(),
      content: 'Amount of ' + Item.findOne(t2i.itemId).name + ' item was updated',
      createdAt: new Date(),
    });
  },
});
