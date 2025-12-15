import { Component, signal } from "@angular/core";

const newLocal = 'spaiderman';
@Component({
    templateUrl:`./hero-page.component.html`
})

export class HeroPageComponent{
    //señales
    name = signal('Ironman');
    age = signal(45);
    constructor( ){

    }

    getHeroDescription(): string{
        return `${this.name} - ${this.age}`;
    }
    
    changeHero(){
        this.name.update((name)=>'spaiderman'); 
        this.age.update((edad)=>22);
    }

    resetForm(){
        this.name.update((name)=>'Ironman'); 
        this.age.update((edad)=>45);
    }

    chageAge(){
        this.age.update((edad)=>60);
    }
}