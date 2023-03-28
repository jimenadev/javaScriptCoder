const nombres = [{nombre:"Tops",
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
                    id_nombre:1,
                    precio:"20000",
                    descripcion:"djsahfha",
                    color:"yellow",
                    size:["S","M","L"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2021/08/24/1629769472764a9a227d70b3938add7257db27b012.webp"},
                    {id:2,
                    nombre:"Grunge Punk Camisetas de Mujer A rayas Casual",
                    id_nombre:1,
                    precio:"15000",
                    descripcion:"djsahfha",
                    color:"red",
                    size:["S","M","L"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2023/03/07/167818465781da2a3ce767e91e0892e1a6c7633bb1.webp"},
                    {id:3,
                    nombre:"Pantalones ajustados PU de cintura alta",
                    id_nombre:2,
                    precio:"17000",
                    descripcion:"djsahfha",
                    color:"gray",
                    size:["S","M","L"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/09/01/1662027238a2ebc72869b152479832ef62517c3cb0.webp"},
                    {id:4,
                    nombre:"Falda floral de muslo con abertura",
                    id_nombre:2,
                    precio:"7000",
                    descripcion:"djsahfha",
                    color:"black",
                    size:["S","M","L"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/05/17/1652757953e649513b7389fb38d17666f2dd5ea3cc.webp"},
                    {id:5,
                    nombre:"Vestido Plantas Bohemio",
                    id_nombre:3,
                    precio:"9900",
                    descripcion:"djsahfha",
                    color:"beige",
                    size:["S","M","L"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2021/04/19/1618798645280c8b9819a024ccd406e9d9ab554803.webp"},
                    {id:6,
                    nombre:"Vestido con estampado de leopardo de manga obispo de muslo con abertura",
                    id_nombre:3,
                    precio:"15290",
                    descripcion:"djsahfha",
                    color:"lightblue",
                    size:["S","M","L","XL"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/10/10/166539641937eae9de145ae0330ec01ae10bd82698.webp"},
                    {id:7,
                    nombre:"Conjunto de pijama pantalones con blusa con estampado floral ribete en contraste de satén",
                    id_nombre:4,
                    precio:"21000",
                    descripcion:"djsahfha",
                    color:"lightblue",
                    size:["S","M","L","XL"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/03/17/1647483778e1e9ef48b2f13054a10bb2693e8d1da7.webp"},
                    {id:8,
                    nombre:"Conjunto de pijama pantalones con blusa con estampado floral ribete en contraste de satén",
                    id_nombre:4,
                    precio:"13000",
                    descripcion:"djsahfha",
                    color:"lightblue",
                    size:["S","M","L","XL"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/03/17/1647483778e1e9ef48b2f13054a10bb2693e8d1da7.webp"},
        
                    {id:9,
                    nombre:"Leggings deportivos bolsillo de celular de cintura ancha",
                    id_nombre:5,
                    precio:"13290",
                    descripcion:"djsahfha",
                    color:"black",
                    size:["S","M","L","XL"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/07/07/1657158565f46339e5d9bf19283daaa9850e914dba.webp"},
                    {id:10,
                    nombre:"Leggings deportivos de tie dye con estiramiento alto",
                    id_nombre:5,
                    precio:"9890",
                    descripcion:"djsahfha",
                    color:"pink",
                    size:["S","M","L","XL"],
                    Oferta:"",
                    urlImage:"https://img.ltwebstatic.com/images3_pi/2022/10/18/1666078857b3d9e23210f27eb85cc1cef4d612ff77.webp"},
        
                ];


let initCart = false
let cart1;

verProductos = () =>{
    let nombresImprimir = imprimnir(productos);
    let idSelected = prompt(`Selecciona un nombre de la lista, digita el número del nombre que quieres comprar:

        ${nombresImprimir}
    
    `);

    if(idSelected){

        if(!isNaN(idSelected)){
            idSelected = parseInt(idSelected);

            if(!initCart){
                cart1 = cart(1)
                initCart=true
            }
            

            let prodSelec = productos.find((p) => p.id===idSelected)

            if(cart1.search(idSelected)){
                incrementar(idSelected)
            }else{
                cart1.add({id:idSelected,producto:prodSelec.nombre, cantidad:1, precioUnitario: prodSelec.precio,total:prodSelec.precio})
                console.log(cart1)
                verCart(cart1)
            }

            

        }else{
            alert("debe digitar un valor númerico");
        }

       
    }

}

verCart = (cart1) =>{
    let seleccionados = imprimirCart(cart1);
    document.getElementById("cart").innerHTML = seleccionados;
    document.getElementById("cantidadProductos").innerHTML = cart1.getTotalCantidad();
    document.getElementById("totalCarrito").innerHTML = cart1.getTotalPrecio();
}

eliminar = (id) =>{
    cart1.remove(id)
    verCart(cart1)
}

decrementar = (id,cantidad=1)=>{
    cart1.decrementarProduct(id, cantidad)
    verCart(cart1)
}

incrementar = (id,cantidad=1)=>{
    cart1.incrementarProduct(id, cantidad)
    verCart(cart1)
}

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


function imprimnir(arreglo){
    let imprimir="";

    arreglo.forEach(element => {
        for (const propiedad in element) {
            const prod = element[propiedad];
            if(propiedad == "id"){
                imprimir += `${prod} -`
            }
            if(propiedad == "nombre"){
                imprimir += `${prod}`
            }

            if(propiedad == "precio"){
                imprimir += `$ ${prod}\n`
            }

        }
    });
   
    return imprimir;
}

imprimirCart = (cart) =>{

    let imprimir="";

    cart.getList().forEach(element => {
        imprimir += `<li>${element.producto} - <button onclick="decrementar(${element.id})" >-</button>  ${element.cantidad} <button onclick="incrementar(${element.id})" >+</button>  Total:${element.total}  <button onclick="eliminar(${element.id})">eliminar</button> \n</li>`;
    });
   
    return imprimir;
}
