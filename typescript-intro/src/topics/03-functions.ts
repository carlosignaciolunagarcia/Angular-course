//----------------declaraciones de funciones------------------------

function addNumber(a:number, b:number):number{
    return a+b
}

//declaracion de un array function
const addNumberArrow = (a:number,b:number):string =>{
    return `${a+b}`; //inyeccion
}

function multiply (firstNumber:number, secondNumber?:number, base:number=2){
    return firstNumber*base;

}

/*
const result: number=addNumber(1,2);
const result2: string= addNumberArrow(1,2);
const result3:number=multiply(5);

console.log({result, result2, result3});
*/
//-----------------------------------------------------------------------------------

// reglas del tiene que tener el tipo Character
interface Character{
    name:string; //este v ahacer el nombre
    hp: number; //los puntos
    showHp:()=> void; // asi se declara una funcion

}

//funcion flecha con un parametro objeto que cumple con las reglas de Character
const healCaracter=( character:Character, amount:number)=> {
    character.hp+=amount;
}

// objeto de tipo caracter
const strider:Character ={
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntaos de vida ${this.hp}`);
    }
}

console.log(`puntos de vida antes del aumento`);

//utilizacion del metodo que esta en el objeto
strider.showHp();

console.log(`puntos de vida despues del aumento`);
//utilizacion de la funcion flecha
healCaracter(strider,40);
strider.showHp();


export{};