import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

const newLocal = 'spaiderman';
@Component({
    templateUrl:`./hero-page.component.html`,
    imports:[UpperCasePipe]
})

export class HeroPageComponent{
    //señales
    name = signal('Ironman');
    age = signal(45);
    constructor( ){

    }
    
    HeroDescription=computed(()=>{
        const description = `${this.name()} - ${this.age()}`;
        return description;
    })
    
    capitalizedName = computed(()=> this.name().toUpperCase());

    changeHero(){
        this.name.set('Spaiderman'); 
        this.age.set(22);
    }

    resetForm(){
        this.name.set('Ironman'); 
        this.age.set(45);
    }

    chageAge(){
        this.age.set(60);
    }
}