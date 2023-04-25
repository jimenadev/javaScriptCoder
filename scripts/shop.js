let rutaImage = "./../imagenes"

/*************Eventos************************* */
window.addEventListener("load", cargarPagShop)

let searchInput = document.getElementById("search")
searchInput.addEventListener("keyup", buscarProductos)

let removeFilter = document.getElementById("removeAllFilter")
removeFilter.addEventListener("click", removeAllFilter)

let filtrarPorPrecioButton = document.getElementById("filtrarPorPrecio")
filtrarPorPrecioButton.addEventListener("click", updatePrice )

let sortbySelect = document.getElementById("sortby")
sortbySelect.addEventListener("change", ordenarProductos )


function cargarPagShop(e){

    fetch('./../JSON/categorias.json')
    .then(response => response.json())
    .then(response => {
        categorias = response
        loadCategorias(categorias)
    });

    fetch('./../JSON/colores.json')
        .then(response => response.json())
        .then(response => {
            color = response
            loadColor(color)
        });

    fetch('./../JSON/size.json')
        .then(response => response.json())
        .then(response => {
            size = response
            loadSize(size)
        });

    fetch('./../JSON/productos.json')
        .then(response => response.json())
        .then(response => {
            productos = response
            filtrosProductos1 = filtrosProductos()
            filtrosProductos1.add(productos)
            loadProductos(filtrosProductos1.getList())
            loadListProduct(filtrosProductos1.getList())
            loadCart()
            loadWishlist()
        });
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
