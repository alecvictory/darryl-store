import { ProxyState } from "../AppState.js";
import Product from "../Models/Product.js";

class ProductsService {

    addMoney() {
        ProxyState.money += 100;
        document.getElementById('balance').innerText = ProxyState.money
    }

    addToCart(id) {
        let cartItem = ProxyState.products.find(product => product.id == id);
        if (cartItem.price <= ProxyState.money) {
            cartItem.quantity++
            ProxyState.cart = [...ProxyState.cart, cartItem]
        }
    }


}

export const productsService = new ProductsService();

