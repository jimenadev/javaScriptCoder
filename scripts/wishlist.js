let rutaImage = "./../imagenes"

/*************Eventos Productos************************* */
window.addEventListener("load", cargarPagWishlist)

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
