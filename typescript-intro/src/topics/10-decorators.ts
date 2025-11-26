function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
    ){
    
    return class extends constructor{
        newPropety ='New Propety';
        hello = 'override';    
    }
}

@classDecorator
export class SuperClass{
    public myPropety: string='abc123';

    print(){
        console.log('Hola mundo');
    }
}

console.log(SuperClass);

const myClass =new SuperClass();
console.log(myClass);