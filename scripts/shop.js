
/*************Variables************************* */


const color = ["Negro","Blanco","Rojo", "Verde", "Amarillo", "Azul", "Naranjo", "Beige", "Cafe", "Morado", "Gris", "Rosado", "Celeste"]
const size = ["S", "M", "L", "XL", "XXL"]
const ofertas = ["Con Ofertas", "Sin Ofertas"]

const categorias = [{nombre:"Tops",
                    id:1},
                    {nombre:"Bottoms",
                    id:2},
                    {nombre:"Vestidos",
                    id:3},
                    {nombre:"Pijamas",
                    id:4},
                    {nombre:"Deporte",
                    id:5},
                    ];

    const productos = [{id:1,
                        nombre:"Blusa con botón con bolsillo delantero de manga enrollada con botón",
                        id_categoria:1,
                        precio:18200,
                        descripcion:"djsahfha",
                        color:["Amarillo"],
                        size:["S","M","L"],
                        oferta:{oferta:true,precio_old:26000, porcentaje:30},
                        urlImage:"/producto1/1.webp"},
                        {id:2,
                        nombre:"Grunge Punk Camisetas de Mujer A rayas Casual",
                        id_categoria:1,
                        precio:13650,
                        descripcion:"djsahfha",
                        color:["Rojo"],
                        size:["S","M","L"],
                        oferta:{oferta:true,precio_old:19500, porcentaje:30},
                        urlImage:"/producto2/1.webp"},
                        {id:3,
                        nombre:"Pantalones ajustados PU de cintura alta",
                        id_categoria:2,
                        precio:13600,
                        descripcion:"djsahfha",
                        color:["Gris"],
                        size:["S","M","L"],
                        oferta:{oferta:false,precio_old:17000, porcentaje:20},
                        urlImage:"/producto3/1.webp"},
                        {id:4,
                        nombre:"Falda floral de muslo con abertura",
                        id_categoria:2,
                        precio:8000,
                        descripcion:"djsahfha",
                        color:["Negro"],
                        size:["S","M","L"],
                        oferta:{oferta:false,precio_old:10000, porcentaje:20},
                        urlImage:"/producto4/4.webp"},
                        {id:5,
                        nombre:"Vestido Plantas Bohemio",
                        id_categoria:3,
                        precio:12750,
                        descripcion:"djsahfha",
                        color:["Beige"],
                        size:["S","M"],
                        oferta:{oferta:true,precio_old:15000, porcentaje:15},
                        urlImage:"/producto5/1.webp"},
                        {id:6,
                        nombre:"Vestido con estampado de leopardo de manga obispo de muslo con abertura",
                        id_categoria:3,
                        precio:11050,
                        descripcion:"djsahfha",
                        color:"Verde",
                        size:["S","M","L","XL"],
                        oferta:{oferta:true,precio_old:13000, porcentaje:15},
                        urlImage:"/producto6/1.webp"},
                        {id:7,
                        nombre:"Conjunto de pijama pantalones con blusa con estampado floral ribete en contraste de satén",
                        id_categoria:4,
                        precio:12600,
                        descripcion:"djsahfha",
                        color:["Celeste"],
                        size:["S","M","L","XL"],
                        oferta:{oferta:true,precio_old:21000, porcentaje:40},
                        urlImage:"/producto7/1.webp"},
                        {id:8,
                        nombre:"Pijama con estampado floral ribete en contraste Pantalones con blusa Conjunto de pijama",
                        id_categoria:4,
                        precio:15000,
                        descripcion:"djsahfha",
                        color:["Verde"],
                        size:["S","M","L","XL"],
                        oferta:{oferta:false,precio_old:25000, porcentaje:40},
                        urlImage:"/producto8/1.webp"},
                        {id:9,
                        nombre:"Leggings deportivos bolsillo de celular de cintura ancha",
                        id_categoria:5,
                        precio:15000,
                        descripcion:"djsahfha",
                        color:["Negro"],
                        size:["M","L","XL"],
                        oferta:{oferta:true,precio_old:30000, porcentaje:50},
                        urlImage:"/producto9/1.webp"},
                        {id:10,
                        nombre:"Leggings deportivos de tie dye con estiramiento alto",
                        id_categoria:5,
                        precio:17500,
                        descripcion:"djsahfha",
                        color:["Rosado"],
                        size:["S","L","XL"],
                        oferta:{oferta:true,precio_old:35000, porcentaje:50},
                        urlImage:"/producto10/1.webp"}
                    ];

let rutaImage = "./../imagenes"
let initCart = false
let initWishlist=false
let cart1;
let filtrosProductos1;
let wishlist1;



/*************Eventos Productos************************* */


window.addEventListener("load", cargarPagShop)

let searchInput = document.getElementById("search")
searchInput.addEventListener("keyup", buscarProductos)

let removeFilter = document.getElementById("removeAllFilter")
removeFilter.addEventListener("click", removeAllFilter)



let filtrarPorPrecioButton = document.getElementById("filtrarPorPrecio")
filtrarPorPrecioButton.addEventListener("click", updatePrice )

let sortbySelect = document.getElementById("sortby")
sortbySelect.addEventListener("change", ordenarProductos )



/*************Métodos Productos************************* */

function cargarPagShop(e){
    filtrosProductos1 = filtrosProductos()
    filtrosProductos1.add(productos)
    loadProductos(filtrosProductos1.getList())
    loadListProduct(filtrosProductos1.getList())
    loadCategorias(categorias)
    loadColor(color)
    loadSize(size)
    loadCart()
    loadWishlist()
}

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

    if(wishlistLS[0].length > 0){
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


/*************Objetos Cart, Productos, Wishlist ************************* */

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


  function filtrosProductos() {
    return {
        items: [],
        itemsSearch:[],
        orderPrecio:0,
        orderNombre:0,
        add: function(productos){
            this.items=productos
        },
        search: function(nombre){
            this.orderPrecio=0
            this.orderNombre=0
            nombre = nombre.toLowerCase()
            let newProducts =this.items.filter(element => {

                let nombreProduct = element.nombre.toLowerCase()
                let isIncludes = nombreProduct.includes(nombre)

                if(isIncludes){
                    return element
                }
                
            });

            this.itemsSearch = newProducts
          
        },
        getList: function() {
            return this.items
        },
        getListSearch: function() {
            return this.itemsSearch
        },
        filtrarPorCategoria(idCategoria){
            this.orderPrecio=0
            this.orderNombre=0
            let newProducts =this.items.filter(element => {

                if(element.id_categoria==idCategoria){
                    return element
                }
                
            });

            this.itemsSearch = newProducts
        },
        filtrarPorColor: function(color){
            this.orderPrecio=0
            this.orderNombre=0
            let newProducts =this.items.filter(element => {

                let isIncludesSize = element.color.includes(color)

                if(isIncludesSize){
                    return element
                }
                
            });

            this.itemsSearch = newProducts

        },
        filtrarPorSize: function(size){
            this.orderPrecio=0
            this.orderNombre=0
            let newProducts =this.items.filter(element => {

                let isIncludesSize = element.size.includes(size)

                if(isIncludesSize){
                    return element
                }
                
            });

            this.itemsSearch = newProducts
        },
        filtrarPorPrecio: function(minPrecio, maxPrecio){
            this.orderPrecio=0
            this.orderNombre=0

            let newProducts =this.items.filter(element => {

                if(element.precio >= minPrecio && element.precio <= maxPrecio ){
                    return element
                }
                
            });

            this.itemsSearch = newProducts

        },
        sortPrice: function(order){
            this.itemsSearch = [...this.items]
            this.itemsSearch.sort((x, y) => x.precio - y.precio)  
            if(this.orderPrecio != 0){
                if(order>this.orderPrecio){
                    this.itemsSearch.reverse()
                }else if(order<this.orderPrecio){
                    this.itemsSearch.sort((x, y) => x.precio - y.precio)    
                }
            }else{
                if(order==2){
                    this.itemsSearch.reverse()
                }
            }

            this.orderPrecio=order
        },
        sortNombre: function(order){
            this.itemsSearch = [...this.items]
            this.itemsSearch.sort((x, y) => x.nombre.localeCompare(y.nombre)); 
            if(this.orderNombre != 0){
                if(order>this.orderNombre){
                    this.itemsSearch.reverse()
                }else if(order<this.orderNombre){
                    this.itemsSearch.sort((x, y) => x.nombre.localeCompare(y.nombre)); 
                }
            }else{
                if(order==2){
                    this.itemsSearch.reverse()
                }
            }
            this.orderNombre=order
        }
    
      
    }

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




  /*************Renderizar Productos***********/
function loadProductos(arreglo){

    document.getElementById("productos").innerHTML = ""

    let productosHTML = document.getElementById("productos")

    arreglo.forEach(({urlImage,id,nombre,precio, oferta}) => {

        if(oferta.oferta){
            productosHTML.innerHTML += `<div class="col-lg-4 col-md-4 col-sm-6">
                                    <input type="hidden" value="producto_${id}" class="id_producto">
                                    <div class="single-product-wrap">
                                        <div class="product-image">
                                            <a href="product-details.html?id=${id}"><img src="${rutaImage}${urlImage}" alt="Produce Images"></a>
                                            <span class="label">${oferta.porcentaje} Off</span>
                                            <div class="product-action">
                                                <a class="add-to-cart" onclick="addToCart(${id})" ><i class="ion-bag"></i></a>
                                                <a  class="wishlist" onclick="addToWishlist(${id})"><i class="ion-android-favorite-outline"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-content">
                                            <h3><a href="product-details.html?id=${id}">${nombre}</a></h3>
                                            <div class="price-box">
                                                <span class="old-price">${oferta.precio_old}</span>
                                                <span class="new-price">${precio}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
        }else{
            productosHTML.innerHTML += `<div class="col-lg-4 col-md-4 col-sm-6">
                                    <input type="hidden" value="producto_${id}" class="id_producto">
                                    <div class="single-product-wrap">
                                        <div class="product-image">
                                            <a href="product-details.html?id=${id}"><img src="${rutaImage}${urlImage}" alt="Produce Images"></a>
                                            <div class="product-action">
                                                <a class="add-to-cart" onclick="addToCart(${id})" ><i class="ion-bag"></i></a>
                                                <a  class="wishlist" onclick="addToWishlist(${id})"><i class="ion-android-favorite-outline"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-content">
                                            <h3><a href="product-details.html?id=${id}">${nombre}</a></h3>
                                            <div class="price-box">
                                                <span class="new-price">${precio}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
        }
            
       

    });
}

function loadListProduct(arreglo){
    document.getElementById("list-product").innerHTML = ""

    let productosHTML = document.getElementById("list-product")

    arreglo.forEach(({urlImage,id,nombre,precio, oferta}) => {

        if(oferta.oferta){
            
            productosHTML.innerHTML += ` <div class="row product-layout-list">
                        <div class="col-lg-4 col-md-5">
                            <div class="single-product-wrap">
                                <div class="product-image">
                                    <a href="product-details.html?id=${id}"><img src="${rutaImage}${urlImage}" alt="Produce Images"></a>
                                    <span class="label">${oferta.porcentaje} Off</span>
                                    <div class="product-action">
                                        <a  class="add-to-cart"  onclick="addToCart(${id})"><i class="ion-bag"></i></a>
                                        <a  class="wishlist" onclick="addToWishlist(${id})"><i class="ion-android-favorite-outline"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-7">
                            <div class="product-content text-start">
                                <h3><a href="product-details.html?id=${id}">${nombre}</a></h3>
                                <div class="price-box">
                                    <span class="old-price">${oferta.precio_old}</span>
                                    <span class="new-price">${precio}</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis pariatur ipsa sint consectetur velit maiores sit voluptates aut tempora totam, consequatur iste quod suscipit natus. Explicabo facere neque adipisci odio.</p>
                            </div>
                        </div>
                    </div>`
        }else{
                    productosHTML.innerHTML += ` <div class="row product-layout-list">
                    <div class="col-lg-4 col-md-5">
                        <div class="single-product-wrap">
                            <div class="product-image">
                                <a href="product-details.html?id=${id}"><img src="${rutaImage}${urlImage}" alt="Produce Images"></a>
                                <div class="product-action">
                                    <a  class="add-to-cart"  onclick="addToCart(${id})"><i class="ion-bag"></i></a>
                                    <a  class="wishlist" onclick="addToWishlist(${id})"><i class="ion-android-favorite-outline"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-7">
                        <div class="product-content text-start">
                            <h3><a href="product-details.html?id=${id}">${nombre}</a></h3>
                            <div class="price-box">
                                <span class="new-price">${precio}</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis pariatur ipsa sint consectetur velit maiores sit voluptates aut tempora totam, consequatur iste quod suscipit natus. Explicabo facere neque adipisci odio.</p>
                        </div>
                    </div>
                </div>`
        }
    })
}

function loadCategorias(arreglo){
    let categoriasHTML = document.getElementById("categorias")

    arreglo.forEach(element => {
        categoriasHTML.innerHTML += `<li><a class="filtros" onclick="filtrarPorCategoria(${element.id})">${element.nombre}</li>`
    });
}

function loadColor(arreglo){
    let categoriasHTML = document.getElementById("color")

    arreglo.forEach(element => {
        categoriasHTML.innerHTML += ` <li><a class="filtros"  onclick="filtrarPorColor('${element}')">${element}</li>`
    });
}

function loadSize(arreglo){
    let categoriasHTML = document.getElementById("size")

    arreglo.forEach(element => {
        categoriasHTML.innerHTML += `<li><a class="filtros"   onclick="filtrarPorSize('${element}')">${element}</li>`
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


