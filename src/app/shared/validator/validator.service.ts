import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public regexNombreApellido:string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  // validUsername = (control:FormControl) => {
  //   const valor = control.value?.trim().toLowerCase();
  //   if(valor === 'mayuya'){
  //     return {
  //       unvalidUser:true
  //     }
  //   }

  //   return null;
  // }

  validUsername(control:FormControl):ValidationErrors | null {
    const valor = control.value?.trim().toLowerCase();
    if(valor === 'mayuya'){
      return {
        unvalidUser:true
      }
    }

    return null;
  }

  camposIguales(campo1:string, campo2:string){

    return (frmGroup:AbstractControl):ValidationErrors | null => {

      const pass1 = frmGroup.get(campo1)?.value;
      const pass2 = frmGroup.get(campo2)?.value;
      
      if(pass1 !== pass2 )
      {
        frmGroup.get(campo2)?.setErrors({ notEquals : true });
        return { notEquals : true }
      }

     frmGroup.get(campo2)?.setErrors(null);
      return null;
    }
  }
}
