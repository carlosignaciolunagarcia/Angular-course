import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe,ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {
  private fb=inject(FormBuilder);
  formutils=FormUtils; //recuerda que esta es para las vilaciones y poder mostar los errores


  myForm:FormGroup=this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal gear',[Validators.required]],
      ['Death Stranding',[Validators.required]],
    ],
    Validators.minLength(2)
  ),
  })

  newFavorite=new FormControl('',Validators.required);

  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddToFavorites(){
    if(this.newFavorite.invalid) return;

    //asignacion del nuevo elemento a una variable
    const newGame=this.newFavorite.value;
    
    //agregamos el nuevo elemento al array
    this.favoriteGames.push(this.fb.control(newGame,Validators.required));

    //reseteamos el input
    this.newFavorite.reset();
  }

  onDeleteFavorite(index:number){
    this.favoriteGames.removeAt(index);
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
