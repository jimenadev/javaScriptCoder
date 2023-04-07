/*************Variables************************* */


const color = ["Negro","Blanco","Rojo", "Verde", "Amarillo", "Azul", "Naranjo", "Beige", "Cafe", "Morado", "Gris", "Rosado", "Celeste"]
const size = ["S", "M", "L", "XL", "XXL"]

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
                    precio:20000,
                    descripcion:"djsahfha",
                    color:["Amarillo"],
                    size:["S","M","L"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2021/08/24/1629769472764a9a227d70b3938add7257db27b012.webp"},
                    {id:2,
                    nombre:"Grunge Punk Camisetas de Mujer A rayas Casual",
                    id_categoria:1,
                    precio:15000,
                    descripcion:"djsahfha",
                    color:["Rojo"],
                    size:["S","M","L"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2023/03/07/167818465781da2a3ce767e91e0892e1a6c7633bb1.webp"},
                    {id:3,
                    nombre:"Pantalones ajustados PU de cintura alta",
                    id_categoria:2,
                    precio:17000,
                    descripcion:"djsahfha",
                    color:["Gris"],
                    size:["S","M","L"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/09/01/1662027238a2ebc72869b152479832ef62517c3cb0.webp"},
                    {id:4,
                    nombre:"Falda floral de muslo con abertura",
                    id_categoria:2,
                    precio:7000,
                    descripcion:"djsahfha",
                    color:["Negro"],
                    size:["S","M","L"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/05/17/1652757953e649513b7389fb38d17666f2dd5ea3cc.webp"},
                    {id:5,
                    nombre:"Vestido Plantas Bohemio",
                    id_categoria:3,
                    precio:9900,
                    descripcion:"djsahfha",
                    color:["Beige"],
                    size:["S","M"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2021/04/19/1618798645280c8b9819a024ccd406e9d9ab554803.webp"},
                    {id:6,
                    nombre:"Vestido con estampado de leopardo de manga obispo de muslo con abertura",
                    id_categoria:3,
                    precio:15290,
                    descripcion:"djsahfha",
                    color:"Celeste",
                    size:["S","M","L","XL"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/10/10/166539641937eae9de145ae0330ec01ae10bd82698.webp"},
                    {id:7,
                    nombre:"Conjunto de pijama pantalones con blusa con estampado floral ribete en contraste de satén",
                    id_categoria:4,
                    precio:21000,
                    descripcion:"djsahfha",
                    color:["Celeste"],
                    size:["S","M","L","XL"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/03/17/1647483778e1e9ef48b2f13054a10bb2693e8d1da7.webp"},
                    {id:8,
                    nombre:"Conjunto de pijama pantalones con blusa con estampado floral ribete en contraste de satén",
                    id_categoria:4,
                    precio:13000,
                    descripcion:"djsahfha",
                    color:["Celeste"],
                    size:["S","M","L","XL"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/03/17/1647483778e1e9ef48b2f13054a10bb2693e8d1da7.webp"},
        
                    {id:9,
                    nombre:"Leggings deportivos bolsillo de celular de cintura ancha",
                    id_categoria:5,
                    precio:13290,
                    descripcion:"djsahfha",
                    color:["Negro"],
                    size:["M","L","XL"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/07/07/1657158565f46339e5d9bf19283daaa9850e914dba.webp"},
                    {id:10,
                    nombre:"Leggings deportivos de tie dye con estiramiento alto",
                    id_categoria:5,
                    precio:9890,
                    descripcion:"djsahfha",
                    color:["Rosado"],
                    size:["S","L","XL"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/10/18/1666078857b3d9e23210f27eb85cc1cef4d612ff77.webp"},
        
                ];

const imagenesProduct = [
    {
        id:1,
        imagenes:["https://img.ltwebstatic.com/images3_pi/2021/08/24/1629769472764a9a227d70b3938add7257db27b012.webp",
        "https://img.ltwebstatic.com/images3_pi/2021/08/24/1629769472764a9a227d70b3938add7257db27b012.webp",
        "https://img.ltwebstatic.com/images3_pi/2021/08/24/1629769472764a9a227d70b3938add7257db27b012.webp"]
    }
]
                


let initCart = false
let initWishlist=false
let cart1;
let filtrosProductos1;
let wishlist1;
let idProducto



/*************Eventos Details Productos************************* */

window.addEventListener("load", cargarPagProductDetails)

let comprar = document.getElementById("addToCart")
comprar.addEventListener("click",addCart )

let wish = document.getElementById("addToWishlist")
wish.addEventListener("click",addWishlist )




/*************Métodos details product************************* */

function cargarPagProductDetails(e){
    filtrosProductos1 = filtrosProductos()
    filtrosProductos1.add(productos)
    loadCart()
    loadWishlist()
    idProducto = getProducto()
    filtrosProductos1.searchId(idProducto)
    console.log(filtrosProductos1.getListSearch())
    loadProductDetails(filtrosProductos1.getListSearch())
   
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




/*************Objetos Cart y Wishlist************************* */

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
            console.log(item)
            
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
        searchId: function(id){
            let newProducts = this.items.filter((item) => item.id==id)
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
        },
      
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
        console.log(item)
        i++
        let productoDetailsImgHTML = document.getElementById(`img-tab-${i}`)
            
        productoDetailsImgHTML.innerHTML = `<a href="${item}" class="img-poppu">
                                            <img src="${item}" alt="#">
                                        </a>`
                                                               
        productoDetailsImgSmallHTML.innerHTML += `<li class="pot-small-img" id="${i}"><img src="${item}" alt="#"></li>`                                           

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
                                        <a href="single-product.html"><img alt="" src="${element.urlImage}"></a>
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


