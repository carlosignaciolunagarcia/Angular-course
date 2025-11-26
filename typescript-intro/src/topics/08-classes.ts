/*
//forma uno
export class Person{
    public name:string;
    private address:string;

    constructor(name:string, address:string){
        this.name=name;
        this.address=address;
    }
}
*/
/*--------------parte 1--------------------*/
/*
export class Person{
    constructor(public name:string, private address:string){
    }
}

export class Hero extends Person{
    constructor(
        public alterego: string,
        public age:number,
        public realName:string,

    ){
        super(realName,'new york');
    }
}*/
/*------------------------------------------------*/

export class Person{
    constructor(public firstname:string, public lastname:string,private address:string){
    }
}
export class Hero{

    constructor(
        public alterego: string,
        public age:number,
        public realName:string,
        public person: Person,

    ){

    }
}

const tony =new Person('Tony','Stark','New york');
const ironamn=new Hero('Iron man',45,'Tony',tony);
console.log(ironamn);