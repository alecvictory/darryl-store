import Product from "./Models/Product.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Product[]} */
  products = [new Product('https://images.unsplash.com/photo-1550957886-ac45931e5779?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60', 'Tent', 199, 'Top-brand gear, clothing—and outdoor adventures! Plus rentals', 0),
  new Product('https://images.unsplash.com/photo-1555488205-d5e67846cf40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bGFudGVybnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60', 'Lantern', 25, 'Top-brand gear, clothing—and outdoor adventures! Plus rentals', 0),
  new Product('https://images.unsplash.com/photo-1532724414795-8a873d116fab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2hpbmclMjBwb2xlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60', 'Fishing Pole', 75, 'Top-brand gear, clothing—and outdoor adventures! Plus rentals', 0),
  new Product('https://images.unsplash.com/photo-1531928719516-3609b35d6ea1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aGlraW5nJTIwYm9vdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60', 'Hiking Boots', 250, 'Top-brand gear, clothing—and outdoor adventures! Plus rentals', 0),
  new Product('https://images.unsplash.com/photo-1493668068984-ac1a19928fdf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0aWNrc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60', 'Sticks', 5, 'Top-brand gear, clothing—and outdoor adventures! Plus rentals', 0),
  new Product('https://images.unsplash.com/photo-1611124214575-8a16b2e0bc0c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZSUyMHN0YXJ0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60', 'Fire Starter', 25, 'Top-brand gear, clothing—and outdoor adventures! Plus rentals', 0),
  new Product('https://images.unsplash.com/photo-1591603516357-dc6dac428e2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvdmVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60', 'Shovel', 20, 'Top-brand gear, clothing—and outdoor adventures! Plus rentals', 0),
  new Product('https://images.unsplash.com/photo-1518176258769-f227c798150e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmVlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60', 'Beer', 1000, 'Top-brand gear, clothing—and outdoor adventures! Plus rentals', 0)];

  money = 0;

  cart = [];

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
