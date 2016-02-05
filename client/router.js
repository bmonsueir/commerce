Router.configure({
    layoutTemplate:'layout'

});

Router.map(function(){

    this.route('home', {path:'/'});
    this.route('about', {path:'/about'});
    this.route('products', {path:'/products'});
    this.route('cart', {path:'/cart'});
    this.route('account', {path:'/account'});
    this.route('admin', {path:'/admin'});
   // this.route('flavors',{path:'/flavors'});
   
    this.route('flavors', {
        template: 'flavors',
        path:'/flavors/:_id',
        data: function(){
            return Products.findOne(this.params._id);
        }
    });
    
    //  this.route('products', {
    //     template: 'products',
    //     path:'/products/:type',
    //     data: function(){
    //         return type;
    //     }
    // });
    
    

});