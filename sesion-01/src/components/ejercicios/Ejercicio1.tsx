import React from 'react'

//Crear una interfaz llamada producto , id , nombre, precio ,disponible y opcionalmente categoria
//implementar una función llamada calcular total que reciva un array de tipo producto y devuelva un numero , que sume todos los precios de la productos disponibles
//crea un array de productos con al menos 3 productos diferentes 
//rpobar la función

interface Producto {
    id: number,
    nombre:string,
    precio: number,
    disponible: boolean,
    categoria?: string,
}

function calcularTotal(productos: Producto[]): number {
    let total:number = 0;
    for ( const producto of productos){
        if (producto.disponible){
            total += producto.precio;
        }
    
    }
    return total;


}
const productos: Producto[] = [
    {id:1, nombre: "Patata", precio: 3, disponible: true, categoria: "verdura"},
    {id:2, nombre: "Manzana", precio: 2, disponible: true, categoria: "fruta"},
    {id:3, nombre: "Lechuga", precio: 1, disponible: false, categoria: "verdura"},
]

calcularTotal(productos);


const Ejercicio1 = () => {
  return (
    <div>Ejercicio1</div>
  )
}

export default Ejercicio1