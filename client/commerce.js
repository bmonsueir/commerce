
Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  
Template.nav.helpers({
    admin: function(){
        var username = Meteor.user().username;
        if(username == "bill"){
            return true;
        } else {
            return false;
        }
    }
    
});