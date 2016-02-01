Template.admin.events({
    "submit .addproduct": function(event){
      event.preventDefault();
      var user = Meteor.userId();
       var name = event.target.name.value;
       var cost = event.target.cost.value;
       var picture = event.target.picture.value;
       var describe = event.target.describe.value;
       Products.insert({
                name: name,
                cost: cost,
                picture: picture,
                descibe: describe,
                createdAt: new Date(),
                createdBy: user
       });
        console.log(name, user, cost, describe, picture);
        
    }
});