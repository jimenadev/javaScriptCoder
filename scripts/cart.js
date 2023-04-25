let rutaImage = "./../imagenes"

/*************Eventos************************* */

window.addEventListener("load", cargarPagCart)

function cargarPagCart(e){
    loadCart()
    loadTableCart(cart1)
    loadCartTotal(cart1)
}


/*************Renderizar Cart***********/
function loadTableCart(cart){

    document.getElementById("list-cart").innerHTML = ""

    let cartHTML = document.getElementById("list-cart")

    let arregloCart = cart.getList()

    arregloCart.forEach(({urlImage, precioUnitario, cantidad,total, producto, id}) => {
            
        cartHTML.innerHTML += `<tr>
                                <td class="plantmore-product-thumbnail"><a href="#"><img src="${rutaImage}${urlImage}" alt=""></a></td>
                                <td class="plantmore-product-name"><a href="#">${producto}</a></td>
                                <td class="plantmore-product-price"><span class="amount">$ ${precioUnitario}</span></td>
                                <td class="plantmore-product-quantity">
                                    <input value="${cantidad}" type="number" id="${id}"   onmouseout="updateQuantity(${id})">
                                </td>
                                <td class="product-subtotal"><span class="amount">$ ${total}</span></td>
                                <td class="plantmore-product-remove"><a onclick="eliminarDeCart(${id})"><i class="ion-close"></i></a></td>
                            </tr>`

    });
}

function loadCartTotal(cart){
    document.getElementById("subtotal").innerText= `$ ${cart.getTotalPrecio()}`
    document.getElementById("total").innerText= `$ ${cart.getTotalPrecio()}`
}