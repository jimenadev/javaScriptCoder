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
        vaciarCarrito: function(){
            console.log("antes")
            console.log(this.items)
            this.items=[]
            console.log("despues")
            console.log(this.items)
            this.sumPrecio();
            this.totalProduct();
        }
      
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
