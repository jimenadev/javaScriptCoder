

let initCart = false
let cart1 =[];
let filtrosProductos1;
let rutaImage = "./imagenes"



/*************Eventos Productos************************* */


window.addEventListener("load", cargarPagCart)




/*************Métodos Cart************************* */

function cargarPagCart(e){
    loadCart()
    loadTableCart(cart1)
    loadCartTotal(cart1)
}

const setCartLocalStorage = (cart) =>{
    let cartJSON = JSON.stringify(cart)
    console.log(cartJSON)
    localStorage.setItem('cart', cartJSON)
}

const getCartLocalStorage = () =>{
    let cartJSON = localStorage.getItem('cart')
    let arrayCart = []
    arrayCart.push(JSON.parse(cartJSON))
    return arrayCart
}

function  updateQuantity(id){
    
    let quantity = document.getElementById(id).value
    cart1.updateCantidadProduct(id, quantity)
    actualizarMiniCart(cart1)
    loadTableCart(cart1)
    loadCartTotal(cart1)

}

const eliminar = (id) =>{
    cart1.remove(id)
    actualizarMiniCart(cart1)
    loadTableCart(cart1)
    loadCartTotal(cart1)
}

/***************Metodos Cart*********************************** */

const loadCart = ()=>{
    let cartLS = getCartLocalStorage()
    let itemsLS = cartLS[0]["items"]
    console.log(itemsLS.length)

    if(itemsLS.length>0){
        cart1 = cart(1)
        initCart=true
        itemsLS.forEach(element => {
            cart1.add(element)
        })
        
        actualizarMiniCart(cart1);
    }else{
        document.getElementById("cart-total").innerText = 0
    }
}

/*************Objetos Cart y Productos************************* */

function cart(init) {
    return {
        id:init,
        items: [],
        sumaPreciosProductos:null,
        totalProductos:null,
        search: function(id){
            let item = this.items.find((item) => item.id===id)
            return (item) ? true: false
        },
        add: function(item) {
          this.items.push(item);
          this.sumPrecio();
          this.totalProduct();
        },
        remove: function(id) {
            let item = this.items.find((item) => item.id===id)
            if (this.items.includes(item)) {
                let index = this.items.indexOf(item)
                if (index > -1) {
                  this.items.splice(index, 1)
                }
                this.sumPrecio();
                this.totalProduct();
            }

            
        },
        incrementarProduct:function(id, cantidad){
            let item = this.items.find((item) => item.id===id)
            
            let index = this.items.indexOf(item)
              if (index > -1) {
                    item.cantidad += cantidad
                    item.total = item.precioUnitario * item.cantidad
                    this.items[index] = item
                    this.sumPrecio();
                    this.totalProduct();
              }
        },
        decrementarProduct:function(id, cantidad){
            let item = this.items.find((item) => item.id===id)
            
            let index = this.items.indexOf(item)
              if (index > -1) {
                    item.cantidad -= cantidad
                    item.total = item.precioUnitario * item.cantidad
                    this.items[index] = item
                    this.sumPrecio();
                    this.totalProduct();
              }
        },
        updateCantidadProduct: function(id, cantidad){
            let item = this.items.find((item) => item.id===id)
            let index = this.items.indexOf(item)
            if (index > -1) {
                item.cantidad = cantidad
                item.total = item.precioUnitario * item.cantidad
                this.items[index] = item
                this.sumPrecio();
                this.totalProduct();
            }
        },
        getList: function() {
            return this.items
        },
        sumPrecio:function(){
            this.sumaPreciosProductos = this.items.reduce( (acumulador, elemento) => acumulador + parseInt(elemento.total),0)
        },
        totalProduct:function(){
            this.totalProductos = this.items.reduce( (acumulador, elemento) => acumulador + parseInt(elemento.cantidad) , 0)
        },
        getTotalPrecio: function() {
            return this.sumaPreciosProductos
        },
        getTotalCantidad: function() {
            return this.totalProductos
        },
      
    }
  
  }


  /*************Renderizar Productos***********/
function loadTableCart(cart){

    document.getElementById("list-cart").innerHTML = ""

    let cartHTML = document.getElementById("list-cart")

    let arregloCart = cart.getList()

    arregloCart.forEach(({urlImage, precioUnitario, cantidad,total, producto, id}) => {
            
        cartHTML.innerHTML += `<tr>
                                <td class="plantmore-product-thumbnail"><a href="#"><img src="${rutaImage}${urlImage}" alt=""></a></td>
                                <td class="plantmore-product-name"><a href="#">${producto}</a></td>
                                <td class="plantmore-product-price"><span class="amount">$ ${precioUnitario}</span></td>
                                <td class="plantmore-product-quantity">
                                    <input value="${cantidad}" type="number" id="${id}"   onmouseout="updateQuantity(${id})">
                                </td>
                                <td class="product-subtotal"><span class="amount">$ ${total}</span></td>
                                <td class="plantmore-product-remove"><a onclick="eliminar(${id})"><i class="ion-close"></i></a></td>
                            </tr>`

    });
}


function loadCartTotal(cart){
    
    document.getElementById("subtotal").innerText= `$ ${cart.getTotalPrecio()}`
    document.getElementById("total").innerText= `$ ${cart.getTotalPrecio()}`
}




/******************Renderizar Cart******************************* */

const actualizarMiniCart = (cart) =>{

    setCartLocalStorage(cart)

    let miniCartHTML = document.getElementById("mini-cart")
    let cartTotalHTML = document.getElementById("cart-total")
    let miniCart = ""

    cart.getList().forEach(element => {
      
        miniCart += `<li class="cart-item">
                                    <div class="cart-image">
                                        <a href="single-product.html"><img alt="" src="${rutaImage}${element.urlImage}"></a>
                                    </div>
                                    <div class="cart-title">
                                        <a href="product-details.html">
                                            <h4>${element.producto}</h4>
                                        </a>
                                        <span class="quantity"> ${element.cantidad}</span>
                                        <div class="price-box"><span class="new-price">$${element.total}</span></div>
                                        <a class="remove_from_cart" onclick="eliminar(${element.id})"><i class="ion-ios-trash-outline"></i></a>
                                    </div>
                                </li>`
      
        });

        miniCart += ` <li class="mini-cart-btns">
                            <div class="cart-btns">
                                <a href="cart.html">Ver Carrito</a>
                                <a href="checkout.html">Checkout</a>
                            </div>
                        </li>`

        miniCartHTML.innerHTML = miniCart
        cartTotalHTML.innerHTML = cart1.getTotalCantidad();
   

}


