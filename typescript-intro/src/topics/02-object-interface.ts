//declaracion de un arreglo en ts

let skills: string[]=['Bash','Counter','Healing'];

//---------------------declaracion de un objeto en ts-----------------------------
//declaracion de una interface
interface Character{
    name:string;
    hp:number;
    skills: string[];
    hometown?: string;// cariable opcional
}

//declaracion de un objeto
const strider:Character={
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}
//ctl+. peara agregar las propiedades que hacen falta

//modificar un valor
strider.hometown='Rivendell';

//impresion en consola
console.table(strider);
export{};