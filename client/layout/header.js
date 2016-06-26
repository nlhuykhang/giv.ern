Template.header.helpers({
    user: function () {
        if(Meteor.user()){
            return Meteor.user();
        }
    }
})