/*************Variables************************* */
let color 
let size
let categorias
let productos 
let imagenesProduct 
                


let initCart = false
let initWishlist=false
let cart1;
let filtrosProductos1;
let wishlist1;
let idProducto
let rutaImage = "./../imagenes"



/*************Eventos Details Productos************************* */

window.addEventListener("load", cargarPagProductDetails)

let comprar = document.getElementById("addToCart")
comprar.addEventListener("click",addCart )

let wish = document.getElementById("addToWishlist")
wish.addEventListener("click",addWishlist )




/*************Métodos details product************************* */

function cargarPagProductDetails(e){

    fetch('./../JSON/imagenes-products.json')
        .then(response => response.json())
        .then(response => {
            imagenesProduct = response
        });  

    fetch('./../JSON/productos.json')
        .then(response => response.json())
        .then(response => {
            productos = response
            filtrosProductos1 = filtrosProductos()
            filtrosProductos1.add(productos)
        
            idProducto = getProducto()
            filtrosProductos1.searchId(idProducto)
            console.log(filtrosProductos1.getListSearch())
            loadProductDetails(filtrosProductos1.getListSearch())
            loadCart()
            loadWishlist()
        });  

   
   
}

function getImagenes(id){
    return imagenesProduct.filter((item) => item.id==id)
}

const getProducto = () =>{
    let valores = window.location.search;
    let urlParams = new URLSearchParams(valores);
    let id_producto = parseInt(urlParams.get('id'));

    return id_producto

}



function  addCart(){
    let cantidad = document.getElementById("cantidadProducto").value
    addToCart(idProducto, parseInt(cantidad))
}

function  addWishlist(){
    addToWishlist(idProducto)
}

/***************Metodos Cart*********************************** */

const loadCart = ()=>{
    let cartLS = getCartLocalStorage()

    console.log(cartLS[0])
   if(cartLS[0]  !== null){
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
        incrementar(id_producto, cantidad)
    }else{
        cart1.add({id:id_producto,producto:prodSelec.nombre, cantidad:cantidad, precioUnitario: prodSelec.precio,total:(prodSelec.precio*cantidad), urlImage:prodSelec.urlImage})
    }

    actualizarMiniCart(cart1);

}

const eliminar = (id) =>{
    console.log(id)
    cart1.remove(id)
    actualizarMiniCart(cart1)
}

const decrementar = (id,cantidad=1)=>{
    cart1.decrementarProduct(id, cantidad)
    actualizarMiniCart(cart1)
}

const incrementar = (id,cantidad=1)=>{
    cart1.incrementarProduct(id, cantidad)
    actualizarMiniCart(cart1)
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

/***************Metodos Wishlist*********************************** */

const loadWishlist = ()=>{
    let wishlistLS = getWishlistLocalStorage()
    console.log(wishlistLS)
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

const addToWishlist = (id_producto) =>{
    if(!initWishlist){
        wishlist1 = wishlist(1)
        initWishlist=true
    }

    let prodSelec = productos.find((p) => p.id===id_producto)
    
    if(!wishlist1.search(id_producto)){
        wishlist1.add({id:id_producto,producto:prodSelec.nombre,precioUnitario: prodSelec.precio, urlImage:prodSelec.urlImage})
        setWishlistLocalStorage(wishlist1)
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


function wishlist(init) {
    return {
        id:init,
        items: [],
        search: function(id){
            let item = this.items.find((item) => item.id===id)
            return (item) ? true: false
        },
        add: function(item) {
          this.items.push(item);
        },
        remove: function(id) {
            let item = this.items.find((item) => item.id===id)
            if (this.items.includes(item)) {
                let index = this.items.indexOf(item)
                if (index > -1) {
                  this.items.splice(index, 1)
                }
            }
        },
        getList: function() {
            return this.items
        },
    }
  
  }




  /*************Renderizar wishlist***********/
function loadProductDetails(producto){
    console.log("entro")    

    const {urlImage,id,nombre,precio} = producto[0] 

    let imagenes = getImagenes(id)
    console.log(imagenes)
    let image = imagenes[0].imagenes

    let i=0
    let productoDetailsImgSmallHTML = document.getElementById("img-small")        
    image.forEach(item => {
        i++
        let productoDetailsImgHTML = document.getElementById(`img-tab-${i}`)
            
        productoDetailsImgHTML.innerHTML = `<a href="${rutaImage}${item}" class="img-poppu">
                                            <img src="${rutaImage}${item}" alt="#">
                                        </a>`
                                                               
        let productoDetailsImgSmallHTML = document.getElementById(`img-small-${i}`)

        productoDetailsImgSmallHTML.src  = `${rutaImage}${item}`                                           

    });

    document.getElementById("nombre").innerText = nombre
    document.getElementById("precio").innerText = precio 


  
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


