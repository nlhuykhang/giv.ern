Template.givingItem.helpers({
  isDone() {
    return this.status === 'deactive' || this.status === 'completed';
  },
  user() {
    return Meteor.users.findOne({
      _id: this.userId
    });
  },
  time() {
    return moment(this.createdAt).format('hh:mm a - D MMMM');
  },
  items() {
    return Item.find({
      postId: this._id,
      curAmount: {
        $gt: 0
      }
    });
  },
  cannotRequest() {
    const p = Proposal.find({
      postId: this._id,
      takerId: Meteor.userId(),
      status: 'request',
    }).count() > 0;

    const t = Transaction.find({
      postId: this._id,
      takerId: Meteor.userId(),
      status: 'onprogress'
    }).count() > 0;

    return p || t || Meteor.userId() === this.userId;
  },
  isPoster() {
    return Meteor.userId() === this.userId;
  }
});

Template.givingItem.events({
  'click #edit-post-status': function(e, t) {
    editPostId.set(this._id);
    $('#editStatus').modal('show');
  },
  'click .button-show-more': function(e, t) {
    $(t.find('.detail-info')).toggleClass('hidden');
  },
  'click .request-btn': function(e, t) {
    const items = [];
    t.$('.item-container').each(function(i, el) {
      if ($(el).find('.giving').hasClass('selected')) {
        if (parseInt($(el).find('input').val()) > 0) {
          items.push({
            itemId: $(el).data('id'),
            amount: parseInt($(el).find('input').val()),
          });
        }
      }
    });

    if (items.length > 0) {
      const proposalId = Proposal.insert({
        postId: this._id,
        giverId: this.userId,
        takerId: Meteor.userId(),
        status: 'request',
        createdAt: new Date(),
      });

      items.forEach(function({itemId, amount}) {
        Proposal2Item.insert({
          itemId,
          proposalId,
          amount,
        });
      });

    } else {
      // TODO: show error here
      alert('can not request')
    }
  },
});
