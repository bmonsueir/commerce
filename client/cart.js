Cart = new Meteor.Collection("cart");

Template.cart.helpers({
    items: function () {
       var items = Cart.find().fetch;
       var item = [];
       var username = Meteor.user().username;
       for (var i in items){
           if(items[i].username = username){
               item.push({product: items[i].product});
           }
       }
       return item;
    }
    
});