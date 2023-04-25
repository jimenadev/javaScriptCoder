
let rutaImage = "./../imagenes"
let initCart = false
let cart1 =[];
let filtrosProductos1;


/*************Eventos Productos************************* */

window.addEventListener("load", cargarPagCheckout)


/*************Métodos Cart************************* */

function cargarPagCheckout(e){
    loadCart()
    loadTableCheckout(cart1)
    loadCartTotalCheckout(cart1)
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

const eliminar = (id) =>{
    cart1.remove(id)
    actualizarMiniCart(cart1)
}


/*************Renderizar Productos***********/
function loadTableCheckout(cart){

    document.getElementById("list-checkout").innerHTML = ""

    let checkoutHTML = document.getElementById("list-checkout")

    let arregloCart = cart.getList()

    arregloCart.forEach(({cantidad,total, producto, id}) => {
            
        checkoutHTML.innerHTML += `<tr class="cart_item">
                                        <td class="product-name">
                                            ${producto} <strong class="product-quantity"> × ${cantidad}</strong>
                                        </td>
                                        <td class="product-total">
                                            <span class="amount">${total}</span>
                                        </td>
                                    </tr>`
    });
}


function loadCartTotalCheckout(cart){
    
    document.getElementById("checkout-amount").innerText= `$ ${cart.getTotalPrecio()}`
    document.getElementById("amount-final").innerText= `$ ${cart.getTotalPrecio()}`
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