const productos = ["Leche",
                    "Agua",
                    "Manzana",
                    "Naranja",
                    "Sal",
                    "Azúcar",
                    "Pan",
                    "Manjar",
                    "Mermelada",
                    "Atún",
                    "Lechuga",
                    "Apio",
                    "Colifor",
                    "Pepino"];

const precios = [2000,
                    3000,
                    1500,
                    1800,
                    2500,
                    2300,
                    1300,
                    1700,
                    1850,
                    2000,
                    1470,
                    2550,
                    3100,
                    1190
                    ];

let total=0;
let cantidadProductos=0;


const productosSeleccionados = new Array(0);


function verProductos(){

    let productosImprimir = imprimirListadoProductos();

    let productoSelected = prompt(`Selecciona un producto de la lista, digita el número del producto que quieres comprar:

        ${productosImprimir}
    
    `);

    if(productoSelected){

        if(!isNaN(productoSelected)){
            productoSelected = parseInt(productoSelected);

            productosSeleccionados.push(productoSelected-1);
    
            let seleccionados = imprimirListadoProductosSeleccionados();
    
            document.getElementById("productos").innerHTML = seleccionados;

            document.getElementById("cantidadProductos").innerHTML = productosSeleccionados.length;

            calcularTotalCarrito(productoSelected);

            document.getElementById("totalCarrito").innerHTML = total;
        }else{
            alert("debe digitar un valor númerico");
        }

       
    }

}


function imprimirListadoProductos(){
    let imprimir="";

    for(let i=1; i<= productos.length; i++){
        imprimir += `${i}  -  ${productos[i-1]} - $ ${precios[i-1]}\n`;
    }

    return imprimir;
}


function imprimirListadoProductosSeleccionados(){
    let imprimir="";

    for(let i=0; i< productosSeleccionados.length; i++){
        imprimir += `<li>${productos[productosSeleccionados[i]]} - $ ${precios[productosSeleccionados[i]]} \n</li>`;
    }

    return imprimir;
}





function calcularTotalCarrito(productoSelected){


    total = total + precios[productoSelected-1];


}