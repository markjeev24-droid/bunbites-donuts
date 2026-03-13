function addToCart(name,price,qty){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name:name,
price:price,
qty:qty
});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart!");

}
