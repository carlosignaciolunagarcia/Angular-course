import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils{
  //Expresiones regulares
  static getTextError(errors:ValidationErrors){
    for( const key of Object.keys(errors)){ //forma de recorrer las llaves 
      switch(key){
        case 'required':
          return 'Este campo es requerido';
          
        case 'minlength':
          return `Minimo de ${errors['minlength'].requiredLength} carcateres`;

        case 'min':
          return `Valor minimo de ${errors['min'].min}`;
        }
    }
    return null;
  }

  static isValidFiels(form:FormGroup,fielName:string): boolean|null{
    return form.controls[fielName].errors&&form.controls[fielName].touched;
  }

  static  getFieldError(form:FormGroup, fieldName:string):string|null{
    //creamos el caso base cuando no hay errores
    if(!form.controls[fieldName]) return null;
    const errors=form.controls[fieldName].errors ?? {};

    //cuando si hay error y hay que identificarlo para poderlo mostrar
    return FormUtils.getTextError(errors);
  }

  static isValidFieldInArray(formArray:FormArray,index:number){
    return (formArray.controls[index].errors && formArray.controls[index].touched );
  }

  static getFieldErrorInArray(formArray:FormArray,index:number):string|null{
    if(formArray.controls.length ==0) return null;

    //creamos el caso base cuando no hay errores
    const errors=formArray.controls[index].errors ?? {};

    //cuando si hay error y hay que identificarlo para poderlo mostrar
    return FormUtils.getTextError(errors);
  }
}

//FormUtils.isValidField()