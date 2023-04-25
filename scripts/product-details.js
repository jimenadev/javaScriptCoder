/*************Variables************************* */
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