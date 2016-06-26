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
    },
    email: function () {
        if(Meteor.user) {
            return Meteor.user().emails[0].address;
        }
    }
})
Template.editProfile.helpers({
    user: function () {
        return Meteor.user();
    },
    email: function () {
        if(Meteor.user) {
            return Meteor.user().emails[0].address;
        }
    }
})
Template.editProfile.events({
    'click #updateProfile': function () {
        Meteor.users.update(Meteor.userId(), {$set:{
            'profile.firstName': $('input[name=firstName]').val(),
            'profile.lastName': $('input[name=lastName]').val(),
            'profile.description':$('input[name=description]').val(),
            'profile.phone':$('input[name=phone]').val(),
            'profile.address':$('input[name=address]').val(),
        }}, function (e) {
            if(!e){
                $('#editProfile').modal('hide')
            }
        })
    }
})