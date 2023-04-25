
let productos 

let rutaImage = "./../imagenes"

let cart1 =[]
let wishlist1=[]



/*************Eventos Productos************************* */


window.addEventListener("load", cargarPagWishlist)




/*************Métodos Cart************************* */

function cargarPagWishlist(e){

    fetch('./../JSON/productos.json')
        .then(response => response.json())
        .then(response => {
            productos = response
            filtrosProductos1 = filtrosProductos()
            filtrosProductos1.add(productos)
            loadCart()
            loadWishlist()
            loadTableWishlist(wishlist1)
        });
    
   
   
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

    if(cartLS[0] !== null){
        let itemsLS = cartLS[0]["items"]

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
    
}

function addToCart(id_producto, cantidad=1){
    if(!initCart){
        cart1 = cart(1)
        initCart=true
    }

    let prodSelec = productos.find((p) => p.id===id_producto)
    
    if(cart1.search(id_producto)){
        incrementar(id_producto)
    }else{
        cart1.add({id:id_producto,producto:prodSelec.nombre, cantidad:cantidad, precioUnitario: prodSelec.precio,total:(prodSelec.precio*cantidad), urlImage:prodSelec.urlImage})
    }

    actualizarMiniCart(cart1);

}

const eliminar = (id) =>{
    cart1.remove(id)
    actualizarMiniCart(cart1)
}


const incrementar = (id,cantidad=1)=>{
    cart1.incrementarProduct(id, cantidad)
    actualizarMiniCart(cart1)
}

/***************Metodos Wishlist*********************************** */

const loadWishlist = ()=>{
    let wishlistLS = getWishlistLocalStorage()

    if(wishlistLS[0] !== null){
        let itemsLS = wishlistLS[0]["items"]
        console.log(itemsLS.length)

        if(itemsLS.length>0){
            wishlist1 = wishlist(1)
            initWishlist=true
            itemsLS.forEach(element => {
                wishlist1.add(element)
            })
            
        }
    }
    
}




const setWishlistLocalStorage = (wishlist) =>{
    let wishlistJSON = JSON.stringify(wishlist)
    localStorage.setItem('wishlist', wishlistJSON)
}

const getWishlistLocalStorage = () =>{
    let wishlistJSON = localStorage.getItem('wishlist')
    let arrayWishlist = []
    arrayWishlist.push(JSON.parse(wishlistJSON))
    return arrayWishlist
}

const eliminarWishlist = (id) =>{
    wishlist1.remove(id)
    loadTableWishlist(wishlist1)
}


  /*************Renderizar wishlist***********/
function loadTableWishlist(wishlist){

    setWishlistLocalStorage(wishlist)

    document.getElementById("list-wishlist").innerHTML = ""

    let wishlistHTML = document.getElementById("list-wishlist")

    let arregloWishlist1 = wishlist.getList()

    arregloWishlist1.forEach(({urlImage, precioUnitario, producto, id}) => {
            
        wishlistHTML.innerHTML += ` <tr>
                                        <td class="plantmore-product-thumbnail"><a href="#"><img src="${rutaImage}${urlImage}" alt=""></a></td>
                                        <td class="plantmore-product-name"><a href="#">${producto}</a></td>
                                        <td class="plantmore-product-price"><span class="amount">$ ${precioUnitario}</span></td>
                                        <td class="plantmore-product-stock-status"><span class="in-stock">in stock</span></td>
                                        <td class="plantmore-product-add-cart"><a class="plantmore-product-add-cart" onclick="addToCart(${id})">Agregar a cart</a></td>
                                        <td class="plantmore-product-remove"><a onclick="eliminarWishlist(${id})"><i class="ion-close"></i></a></td>
                                    </tr>`
    });
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


