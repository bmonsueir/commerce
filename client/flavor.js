Flavors = new Mongo.Collection("flavors");

Template.flavors.helpers({
    flavor: function(){
        var flavors = Flavors.find().fetch();
        var flavor = [];
        for(var i in flavors){
            flavor.push({
                name: flavors[i].name,
                description: flavors[i].description,
                _id: flavors[i]._id
            });
        }
        return flavor;
    }
});

Template.flavors.events({
    "click .btn": function(){
        var user = Meteor.userId();
        var product = Router.current().params;
        Cart.insert({
            user: user,
            product: product,
            flavor: this._id,
        });
        console.log(this._id, product,user);
    }
    
});