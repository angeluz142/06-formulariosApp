import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {


  // <- Sustituyendo con form builder ->
  // miFormulario:FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTdasd')
  // })


  miFormulario:FormGroup = this.fb.group({
    nombre:[,[Validators.required,Validators.minLength(3)]],
    precio:[,[Validators.required,Validators.min(0)]],
    existencias:[,[Validators.required,Validators.min(0)]]
  })

  constructor(private fb:FormBuilder) { }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].touched 
              && this.miFormulario.controls[campo].errors
  }
 
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
  }

}
