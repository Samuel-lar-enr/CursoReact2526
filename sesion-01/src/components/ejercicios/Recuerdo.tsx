import React from 'react'


let nombreTS: string = "pepe";
let edad: number = 3;
let isAdmin: boolean= false;
let nuloTS: null = null;
let indefinidoTS: undefined= undefined;

const lenguajes: String[] = ["javascript", "typescript", "python"];
const numeros: number[] = [1, 2, 3, 4, 5];

//Array de objetos
const usuarios:{nombre:string, edad:number}[] = [
    {nombre: "pepe", edad: 3},
    {nombre: "juan", edad: 4},
    {nombre: "ana", edad: 5},
]
//Objeto simple
const persona: {nombre:string, edad: number, isAdmin: boolean} = {
    nombre: "pepe",
    edad: 3,
    isAdmin: false,
}

// ********** INTERFACES ************
//Las interfaces son un contrato que va a definir la forma de un objeto
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    edad?: number; //edad es pocional puede o no existir
    activo: boolean;
}

const Usuario1: Usuario = {
    id: 1,
    nombre: "pepe",
    email: "mario@gmail.com",
    activo: true,
    // edad no la necesito
}

const Usuario2: Usuario = {
    id: 1,
    nombre: "Paula",
    email: "Paula@gmail.com",
    edad: 18,
    activo: true, 
}

function sumar(a: number, b: number): number {
    return a + b;
}

function saludar(nombre: string): void {
    console.log(`Bienvenido ${nombre}`);
}

//funciones con parametros opcionales
function crearUsuario(nombre: string, edad?: number): Usuario {
    return {
        id: Date.now(),
        nombre: nombre,
        email: `${nombre.toLocaleLowerCase()}@gmail.com`,
        edad: edad,
        activo: true,
        
    }
    
}

//Union Types (posibles valores que puede tomar una variable)
let id: string | number;
//id= true <---- error

type Tamano= "small" | "medium" | "large"

let talla:tamano = "medium"

// --Cuando usar type o interfaces

//Usar interfaces con objetos
//Types con primitivos y uniones
//Ejemplo

type ID= String | number;
type Estado= "pendiente" | "completado" | "cancelado"

interface Persona {
    nombre:string
    edad:number
}

//Extender interfaces
interface Empleado extends Persona {
    puesto: string
    salario: number
}

const empleado1: Empleado = {
    nombre: "pepe",
    edad:53,
    puesto:"Animador cultural",
    salario:50000,
}

function Recuerdo() {
  return (
    <div>Recuerdo</div>
  )
}

export default Recuerdo