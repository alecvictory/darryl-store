import { ProxyState } from "../AppState.js";
import { productsService } from "../Services/ProductsService.js";


//Private
function _draw() {
    let products = ProxyState.products;
    let template = ''

    products.forEach(product => {
        template += product.Template;
    })

    document.getElementById("products").innerHTML = template
}

function _drawCart() {
    let cart = ProxyState.cart;
    let template = ''
    cart.forEach(item => {
        template += item.cartTemplate
    })
    document.getElementById('shopping-cart-items').innerHTML = template
}


//Public
export default class ProductsController {
    constructor() {
        ProxyState.on("products", _draw);
        ProxyState.on('cart', _drawCart);
        _draw()
    }

    addMoney() {
        productsService.addMoney();
    }

    addToCart(id) {
        productsService.addToCart(id)
    }
}
