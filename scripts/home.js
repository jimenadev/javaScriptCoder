let rutaImage = "./imagenes"

/*************Eventos************************* */
window.addEventListener("load", cargarPagHome)


function cargarPagHome(e){

    fetch('./../JSON/productos.json')
        .then(response => response.json())
        .then(response => {
            productos = response
            filtrosProductos1 = filtrosProductos()
            filtrosProductos1.add(productos)
            loadCart()
        });  
}


/******************Renderizar Mini-Cart******************************* */
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
                                <a href="./pages/cart.html">Ver Carrito</a>
                                <a href="./pages/checkout.html">Checkout</a>
                            </div>
                        </li>`

        miniCartHTML.innerHTML = miniCart
        cartTotalHTML.innerHTML = cart1.getTotalCantidad();
   

}


