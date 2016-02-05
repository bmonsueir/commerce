Template.account.events({
"submit form": function(event){
    event.preventDefault();

var user = Meteor.userId();
var firstname = event.target.firstname.value;
if(!firstname) firstname = Meteor.user().profile.firstname;
var lastname = event.target.lastname.value;
if(!lastname) lastname = Meteor.user().profile.lastname;
var city = event.target.city.value;
if(!city) city = Meteor.user().profile.city;
var state = event.target.state.value;
if(!state) state = Meteor.user().profile.state;
var zip = event.target.zip.value;
if(!zip) zip = Meteor.user().profile.zip;
var address = event.target.address.value;
if(!address) address = Meteor.user().profile.address;
Meteor.users.update(user,{$set:{
                "profile.firstname": firstname,
                "profile.lastname": lastname,
                "profile.city": city,
                "profile.state": state,
                "profile.zip": zip,
                "profile.address": address
            }});
event.target.firstname.value = "";
event.target.lastname.value = "";
event.target.city.value = "";
event.target.state.value = "";
event.target.zip.value = "";
event.target.address.value = "";
}
});
Template.account.helpers({
first: function(){
    if(Meteor.user())
        return Meteor.user().profile.firstname;
}
});
Template.account.helpers({
last: function(){
    if(Meteor.user())
     return Meteor.user().profile.lastname;
}
});
Template.account.helpers({
city: function(){
    if(Meteor.user())
        return Meteor.user().profile.city;
}
});
Template.account.helpers({
state: function(){
    if(Meteor.user())
        return Meteor.user().profile.state;
}
});
Template.account.helpers({
zip: function(){
    if(Meteor.user())
        return Meteor.user().profile.zip;
}
});
Template.account.helpers({
address: function(){
    if(Meteor.user())
        return Meteor.user().profile.address;
}
});