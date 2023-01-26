let productosStorage = JSON.parse(localStorage.getItem("inventario")) || [];

export default class Producto{
    constructor(id, nombre = "", descripcion = "Sin descripción", precio = 999999, stock = 0){
        this.id = id;
        this.nombre = nombre;
        this.descripcion= descripcion
        this.precio = precio;
        this.stock = stock;
    }

    getProducts(){
        productosStorage = productosStorage = JSON.parse(localStorage.getItem("inventario")) || []
        return productosStorage;
    }
    getProduct(){
        productosStorage = JSON.parse(localStorage.getItem("inventario")) || []
        return productosStorage.find(producto => producto.id == this.id);
    }
    deleteProduct(){
        productosStorage = JSON.parse(localStorage.getItem("inventario")) || []
        productosStorage = productosStorage.filter(producto => producto.id != this.id)
        localStorage.setItem("inventario", JSON.stringify(productosStorage))
        return productosStorage;
    }
    updateProduct(){
        productosStorage = JSON.parse(localStorage.getItem("inventario")) || []
        let producto = productosStorage.find(producto => producto.id ==this.id)
        producto.nombre= this.nombre;
        producto.descripcion= this.descripcion;
        producto.precio = this.precio;
        producto.stock = this.stock;
        localStorage.setItem("inventario", JSON.stringify(productosStorage))
        return producto;
    }
    addProduct(){
        productosStorage = JSON.parse(localStorage.getItem("inventario")) || []
        productosStorage.push(
            {
                id: this.id,
                nombre: this.nombre,
                descripcion: this.descripcion,
                precio: this.precio, 
                stock: this.stock
            }
            )
            localStorage.setItem("inventario", JSON.stringify(productosStorage))
        return productosStorage
    }

}