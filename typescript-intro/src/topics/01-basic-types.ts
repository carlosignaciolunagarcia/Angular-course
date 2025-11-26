//como declarar variables en ts

let name ='Strider'; //tipo string
let hpPoints:number|'FULL'=95; //indica que la variable puede tener varios tipos de valores (en este caso2)
const isAlive:boolean=true; //tipo boolean

hpPoints='FULL';//reasignacion de valor

//impresion variables en consola
console.log({
    name,hpPoints, isAlive
})
export{};