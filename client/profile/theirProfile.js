Template.theirProfile.helpers({
    user: function () {
        const id = FlowRouter.getParam('id');
        const user = Meteor.users.findOne({_id: id});
        return user;
    },
    follow: function () {
        const id = FlowRouter.getParam('id');
        const user = Meteor.users.findOne({_id: id});
        if(user){
            return {
                er: user.profile.follower?user.profile.follower.length:0,
                ing: user.profile.following?user.profile.following.length: 0,
                thanks: user.profile.thanks?user.profile.thanks.length: 0,
            }
        }
    },
    isOwner: function () {
        const id = Meteor.userId();
        const currentId = FlowRouter.getParam('id');
        if(id == currentId){
            return true
        }
        return false;
    },
    isFollowed: function () {
        const id = Meteor.userId();
        const currentId = FlowRouter.getParam('id');
        const user = Meteor.users.findOne({_id: currentId, 'profile.follower':{$in: [id]}});
        if(user){
            return true
        }
        return false;
    }
})
Template.theirProfile.events({
    'click #un-follow': function () {
        const id = Meteor.userId();
        const currentId = FlowRouter.getParam('id');
        if(id && id != currentId){
            Meteor.users.update(id, {$addToSet:{'profile.following': currentId}});
            Meteor.users.update(currentId, {$addToSet:{'profile.follower': id}});
        }
    }
})
