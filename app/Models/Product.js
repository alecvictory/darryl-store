import { generateId } from '../Utils/GenerateId.js'

export default class Product {
    constructor(imgUrl, title, price, description, quantity, id = generateId()) {
        this.imgUrl = imgUrl
        this.title = title
        this.price = price
        this.description = description
        this.quantity = quantity
        this.id = id
    }

    get Template() {
        return `
        <div class="col-md-3 mb-3">
        <div class="card shadow">
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h2 class="card-title">${this.title}</h2>
                <h4 class="card-title">$${this.price}</h4>
                <p class="card-text">${this.description}</p>
            </div>
            <div class="px-3 pb-3 d-flex justify-content-between">
                <button type="button" class="btn btn-danger" onclick="app.productsController.addToCart('${this.id}')">Add To Cart</button>
            </div>
        </div>
      </div>
        `
    }

    get cartTemplate() {
        return `
        <div class="col d-flex justify-content-between">
                            <img src="${this.imgUrl}" alt="">
                            <h3>Item: ${this.title}</h3>
                            <h3>Quanity: ${this.quantity}</h3>
                            <h3>Item Price: $${this.price}</h3>
                            <h3>Total: $${this.price}</h3>
                        </div>
    `
    }
}
