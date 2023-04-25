/*************Variables************************* */
let color 
let size
let ofertas
let categorias
let productos


let initCart = false
let initWishlist=false
let cart1
let filtrosProductos1
let wishlist1
let imagenesProduct 
let idProducto


/*************Métodos Productos************************* */
function buscarProductos(e){
    let searchText = document.getElementById("search").value
    filtrosProductos1.search(searchText)
    loadProductos(filtrosProductos1.getListSearch())
    loadListProduct(filtrosProductos1.getListSearch())
}

function removeAllFilter(){
    loadProductos(filtrosProductos1.getList())
    loadListProduct(filtrosProductos1.getList())
}

function filtrarPorCategoria(idCategoria){
    filtrosProductos1.filtrarPorCategoria(idCategoria)
    loadProductos(filtrosProductos1.getListSearch())
    loadListProduct(filtrosProductos1.getListSearch())
}

function filtrarPorColor(color){
    filtrosProductos1.filtrarPorColor(color)
    loadProductos(filtrosProductos1.getListSearch())
    loadListProduct(filtrosProductos1.getListSearch())
}


function filtrarPorSize(size){
    filtrosProductos1.filtrarPorSize(size)
    loadProductos(filtrosProductos1.getListSearch())
    loadListProduct(filtrosProductos1.getListSearch())
}

function updatePrice(e){

    let minPrice = document.getElementById("min-price").value
    let maxPrice = document.getElementById("max-price").value

    minPrice = minPrice.replace('$', '')
    maxPrice = maxPrice.replace('$', '')

    minPrice = parseInt(minPrice)
    maxPrice = parseInt(maxPrice)
    filtrosProductos1.filtrarPorPrecio(minPrice, maxPrice)
    loadProductos(filtrosProductos1.getListSearch())
    loadListProduct(filtrosProductos1.getListSearch())

}

function ordenarProductos(e){
    e.preventDefault();
    let select = e.target
    let opcionSeleccionadaOrder = select.options[sortbySelect.selectedIndex].value

    switch(opcionSeleccionadaOrder){
        case "1":
            filtrosProductos1.sortNombre(1)
            break;
        case "2":
            filtrosProductos1.sortNombre(2)
            break;
        case "3":
            filtrosProductos1.sortPrice(1)
        case "4": 
            filtrosProductos1.sortPrice(2)
            break;
        case "5":
            return removeAllFilter()
    }

    loadProductos(filtrosProductos1.getListSearch())
    loadListProduct(filtrosProductos1.getListSearch())
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

const eliminarDeCart = (id) =>{
    cart1.remove(id)
    actualizarMiniCart(cart1)
    loadTableCart(cart1)
    loadCartTotal(cart1)
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

function  updateQuantity(id){
    
    let quantity = document.getElementById(id).value
    cart1.updateCantidadProduct(id, quantity)
    actualizarMiniCart(cart1)
    loadTableCart(cart1)
    loadCartTotal(cart1)

}


/***************Metodos Wishlist*********************************** */
const loadWishlist = ()=>{
    let wishlistLS = getWishlistLocalStorage()
   
    if(wishlistLS[0] !== null){  
            let itemsLS = wishlistLS[0]["items"]
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

const eliminarWishlist = (id) =>{
    wishlist1.remove(id)
    loadTableWishlist(wishlist1)
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

