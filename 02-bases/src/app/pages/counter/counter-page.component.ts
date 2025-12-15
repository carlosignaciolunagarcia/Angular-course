//libreria
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

//primer componente
@Component({
  /*
    template:`
    <h1>Counter: {{ counter }} </h1> <!--mestrar variable-->
    <button (click)="incremento(1)">+1</button>
  `,*/

    /*
    styles: `
    button{
      padding: 5px;
      margin:  5px 10px;
      width: 75px;
    }
  `,*/
  templateUrl:`./counter-page.component.html`,
  styleUrl:`./counter-page.component.css`,
  //changeDetection: ChangeDetectionStrategy.OnPush,// zoneless angular
})

export class CounterPageComponent{
    
    counter=10;//atributo normal
    counterSignal= signal(10); //atributo señal

    constructor(){
      /*setInterval(() => {
        //this.counter+=1;
        this.counterSignal.update((v) => v + 1)
        console.log('Tick');
      
      },2000);*/
    }
    //metodos
    incremento(value:number){ //incrementoa al atributo
      this.counter+=value;
    }

    decremento(value:number){ //decremento al atributo
      this.counter-=value;
    }

    incrmentBY(value:number){ //incremento y decremento tanto al atyributo como a la señal
      this.counter+=value;
      this.counterSignal.update((current) => current + value)
    }

    reset(){ //funcion para resetar los valores
      this.counter=10; //reseteo del atriburto
      this.counterSignal.set(0); //reseteo de la señal con set()
    }
}