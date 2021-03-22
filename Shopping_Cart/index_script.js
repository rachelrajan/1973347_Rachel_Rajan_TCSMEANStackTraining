let items = [
    {
        item_name:'Berry Smoothie',
        tag: 'smoothie',
        price : '10'
    },
    {
        item_name:'Oatmeal Pancake',
        tag: 'oats',
        price : '15'
    },
    {
        item_name:'Grilled Tofu Salad',
        tag : 'salad',
        price : '25'
    },
    {
        item_name:'Vegan Taco',
        tag:'taco',
        price : '20'
    }

]
function Add(){
let cart = document.querySelectorAll('.add-cart');
for(let i = 0; i<cart.length;i++){
    cart[i].addEventListener('click', ()=>{
        console.log("Added to Cart")

    })
}
}


