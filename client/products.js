Products = new Mongo.Collection("products");

Template.products.helpers({
    items: function () {
       var items = Products.find().fetch;
       var item = [];
       for (var i in items){
               item.push({
                   name: items[i].name,
                   describe: items[i].describe,
                   picture: items[i].picture,
                   cost: items[i].cost
               });
       }
       console.log("products",item);
       return item;
    }
    
});
