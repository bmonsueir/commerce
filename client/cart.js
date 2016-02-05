Cart = new Meteor.Collection("cart");

Template.cart.helpers({
    items: function () {
       var items = Cart.find().fetch();
       var item = [];
       var user = Meteor.userId();
       
       for (var i in items){
           if(items[i].user= user){
               var flavoring = Flavors.findOne({_id:items[i].flavor});
               var producting = Products.findOne({_id:items[i].product});
            //   item.push({
            //       product: items[i].product,
            //       flavor: flavoring.name
            //   });
               console.log(flavoring);
           }
       }
       
       return item;
    },
    first: function(){
    if(Meteor.user())
        return Meteor.user().profile.firstname;
    },
    last: function(){
        if(Meteor.user())
         return Meteor.user().profile.lastname;
    },
    city: function(){
        if(Meteor.user())
            return Meteor.user().profile.city;
    },
    state: function(){
        if(Meteor.user())
            return Meteor.user().profile.state;
    },
    zip: function(){
        if(Meteor.user())
            return Meteor.user().profile.zip;
    },
    address: function(){
        if(Meteor.user())
            return Meteor.user().profile.address;
    }
});