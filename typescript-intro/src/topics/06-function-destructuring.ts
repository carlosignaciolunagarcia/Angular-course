export interface Product{
    description: string;
    price:number;
}

const phone:Product={
    description: 'Nokia A1',
    price:150.0
}

const tablet:Product={
    description: 'ipad Air',
    price:250.0
}

//destucturacion de objetos

//const {description:descripcion1, price:precio1}=phone;
//const {description:descripcion2, price:precio2}=tablet;

interface taxCalculationOptions{
    tax:number;
    products: Product[];
}

export function taxCalculation(options:taxCalculationOptions): [number, number] {
    
    //const{tax,products}=options;
    let total=0;

    options.products.forEach(product =>{
        total += product.price
    });

    return[total, total * options.tax];
}

const shoppingCart =[phone,tablet];
const tax=0.15;


const result = taxCalculation({
    tax: tax,
    products: shoppingCart,
});

//impreion de los resultados
/*
console.log('Total', result[0]);
console.log('Tax', result[1]);
*/

//una formada de destructuracion
/*
const [totalcar,totaltax] = taxCalculation({
    tax: tax,
    products: shoppingCart,
});
*/
// segunda forma
const [totalcar,totaltax]=result;



console.log('Total:', totalcar);
console.log('Tax:', totaltax);

