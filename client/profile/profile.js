Template.profile.helpers({
    user: function () {
        return Meteor.user();
    },
    follow: function () {
        if(Meteor.user()){
            return {
                er: Meteor.user().profile.follower?Meteor.user().profile.follower.length:0,
                ing: Meteor.user().profile.following?Meteor.user().profile.following.length: 0,
                thanks: Meteor.user().profile.thanks?Meteor.user().profile.thanks.length: 0,
            }
        }
    }
})
Template.editProfile.helpers({
    user: function () {
        return Meteor.user();
    },
})
Template.editProfile.events({
    '#updateProfile': function () {
        console.log('a')
    }
})