Template.profile.helpers({
    user: function () {
        return Meteor.user();
    },
    follow: function () {
        return {
            er: Meteor.user().profile.follower.length,
            ing: Meteor.user().profile.following.length,
            thanks: Meteor.user().profile.thanks.length,
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
        console.log($('#name']).val());
    }
})