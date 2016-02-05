Template.admin.events({
    "submit .addproduct": function(event){
      event.preventDefault();
       var user = Meteor.userId();
       var name = event.target.name.value;
       var cost = event.target.cost.value;
       var picture = event.target.picture.value;
       var type = event.target.type.value;
       var description = event.target.description.value;
       if(type == "gel" || type == "foam"){
           Products.insert({
                    name: name,
                    cost: cost,
                    picture: picture,
                    type: type,
                    description: description,
                    createdAt: new Date(),
                    createdBy: user
           });
       }
       if(type == "flavor"){
           Flavors.insert({
              name: name,
              cost: cost,
              description: description,
              createdAt: new Date(),
              createdBy: user
           });
       }
        //console.log(name, user, cost, description, picture);
        event.target.name.value = "";
        event.target.cost.value = "";
        event.target.picture.value = "";
        event.target.description.value = "";
         event.target.type.value = "";
        alert("submitted");
    }
});