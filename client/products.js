Products = new Mongo.Collection("products");

Template.products.helpers({
    items: function () {
       
        var type = Router.current().params;
       var items = Products.find().fetch();
       var item = [];
       for (var i in items){
        //  if(type.type == items[i].type || type.type == "all"){
               item.push({
                   name: items[i].name,
                   description: items[i].description,
                   picture: items[i].picture,
                   cost: items[i].cost,
                   _id: items[i]._id
               });
         // }  
       }
     console.log(type.type);
       return item;
    }
    
});

Template.products.events({
    "click .buyMe": function(event){
        Router.go('flavors',{'_id': this._id});
    }
});

