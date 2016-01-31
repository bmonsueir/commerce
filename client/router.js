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

});