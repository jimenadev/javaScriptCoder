
let rutaImage = "./../imagenes"

/*************Eventos************************* */

window.addEventListener("load", cargarPagCheckout)

function cargarPagCheckout(e){
    loadCart()
    loadTableCheckout(cart1)
    loadCartTotalCheckout(cart1)
}

/*************Renderizar Checkout***********/
function loadTableCheckout(cart){

    document.getElementById("list-checkout").innerHTML = ""

    let checkoutHTML = document.getElementById("list-checkout")

    let arregloCart = cart.getList()

    arregloCart.forEach(({cantidad,total, producto, id}) => {
            
        checkoutHTML.innerHTML += `<tr class="cart_item">
                                        <td class="product-name">
                                            ${producto} <strong class="product-quantity"> × ${cantidad}</strong>
                                        </td>
                                        <td class="product-total">
                                            <span class="amount">${total}</span>
                                        </td>
                                    </tr>`
    });
}


function loadCartTotalCheckout(cart){
    
    document.getElementById("checkout-amount").innerText= `$ ${cart.getTotalPrecio()}`
    document.getElementById("amount-final").innerText= `$ ${cart.getTotalPrecio()}`
}