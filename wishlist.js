
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


let initCart = false
let cart1 =[]
let wishlist1=[]



/*************Eventos Productos************************* */


window.addEventListener("load", cargarPagWishlist)




/*************Métodos Cart************************* */

function cargarPagWishlist(e){
    loadCart()
    loadWishlist()
    loadTableWishlist(wishlist1)
   
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

function addToCart(id_producto){
    if(!initCart){
        cart1 = cart(1)
        initCart=true
    }

    let prodSelec = productos.find((p) => p.id===id_producto)
    
    if(cart1.search(id_producto)){
        incrementar(id_producto)
    }else{
        cart1.add({id:id_producto,producto:prodSelec.nombre, cantidad:1, precioUnitario: prodSelec.precio,total:prodSelec.precio, urlImage:prodSelec.urlImage})
    }

    actualizarMiniCart(cart1);

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
function loadTableWishlist(wishlist){

    setWishlistLocalStorage(wishlist)

    document.getElementById("list-wishlist").innerHTML = ""

    let wishlistHTML = document.getElementById("list-wishlist")

    let arregloWishlist1 = wishlist.getList()

    arregloWishlist1.forEach(({urlImage, precioUnitario, producto, id}) => {
            
        wishlistHTML.innerHTML += ` <tr>
                                        <td class="plantmore-product-thumbnail"><a href="#"><img src="${urlImage}" alt=""></a></td>
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


