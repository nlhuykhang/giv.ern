Template.header.helpers({
    user: function () {
        if(Meteor.user()){
            return Meteor.user();
        }
    },
    counter: function () {
        if(Meteor.user()) {
            const noti = Noti.find({userId: Meteor.userId()}).fetch();
            if(noti.length > 0){
                return noti.length;
            }
        }
    },
    noti: function () {
        if(Meteor.user()){
            const noti = Noti.find({userId: Meteor.userId()}).fetch();
            if(noti.length){
                const noties = _.map(noti, function (item) {
                    const user = Meteor.users.findOne({_id:item.info.userId});
                    const name = user.profile.firstName + ' ' + user.profile.lastName;
                    if(item.type === 'request'){
                        return {
                            text: 'You have receive a request from ' + name,
                            link: item.info.transactionId
                        }
                    }
                    if(item.type === 'decline'){
                        return {
                            text: 'You have been declined by '+name,
                            link: item.info.transactionId
                        }
                    }
                    if(item.type === 'approve'){
                        return {
                            text: 'Your request have been approved by '+ name,
                            link: item.info.transactionId
                        }
                    }
                    if(item.type === 'complete'){
                        return {
                            text: 'You transaction with '+ name +' is completed',
                            link: item.info.transactionId
                        }
                    }
                    if(item.type === 'comment'){
                        return {
                            text: name + ' comment on a transaction',
                            link: item.info.transactionId
                        }
                    }
                    if(item.type === 'cancel'){
                        return {
                            text: name + ' have canceled transaction with you',
                            link: item.info.transactionId
                        }
                    }
                });
                return noties;
            }
        }

    }
})