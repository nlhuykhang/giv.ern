/**
 * Created by boc on 25/06/2016.
 */

Template.announce.onRendered(function () {
  //  $('.carousel').slick({
  //      dots: false,
  //      arrows: false
  //  });
});


Template.announce.helpers({
  user() {
    return Meteor.users.findOne({
      _id: this.userId
    });
  },
  info() {
    return moment(this.createdAt).fromNow() + ', ' + this.location.address;
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

Template.announce.events({
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

Template.item.helpers({
  requestUsers() {

    const p2i = Proposal2Item.find({
      itemId: this._id,
    }).map(({proposalId}) => proposalId);

    const t2i = Transaction2Item.find({
      itemId: this._id,
    }).map(({transactionId}) => transactionId);

    const proposals = Proposal.find({
      _id: {
        $in: p2i,
      },
      status: 'request',
    }).map(({takerId}) => takerId);

    const transaction = Transaction.find({
      _id: {
        $in: t2i
      },
      status: 'onprogress',
    }).map(({takerId}) => takerId);

    const userIds = _.union(proposals, transaction);

    return Meteor.users.find({
      _id: {
        $in: userIds
      }
    });
  }
});

Template.item.events({
  'click .item-container': function(e, t) {
    $(t.find('.giving')).toggleClass('selected');
  },
  'click .quantity input': function(e) {
    return false;
  },
  'change .quantity input': function(e, t) {
    if (parseInt(e.target.value) > this.curAmount) {
      e.target.value = this.curAmount;
    }
  },
});
