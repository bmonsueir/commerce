Template.home.events({
    "click .btnFoam": function(event){
        Router.go('products', {type: "foam"});
    },
    
     "click .btnGel": function(event){
        Router.go('products', {type: "gel"});
    },
    
     "click .btnAll": function(event){
        Router.go('products', {type: "all"});
    }
    
});