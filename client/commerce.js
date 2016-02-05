
Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  
Template.nav.helpers({
    admin: function(){
        var username = Meteor.user().username;
        if(username == "bill" || username == "chris" || username == "ryan"){
            return true;
        } else {
            return false;
        }
    }
    
});