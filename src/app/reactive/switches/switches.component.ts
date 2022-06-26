import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent  {

  miFormulario:FormGroup = this.frmBuilder.group({
    genero:['M',Validators.required],
    notificaciones:[true,Validators.required],
    condiciones:[false,Validators.requiredTrue]
  });

  persona = {
    genero:'F',
    notificaciones: true
  }
  
  
  constructor(private frmBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones:false
    });

    // Actualizando obj persona con la eliminacion del elemento condiciones

    // this.miFormulario.valueChanges.subscribe(form => {
    //   delete form.condiciones;
    //   this.persona = form;
    // });

    // Actualizando los valores con desestructuracion
    this.miFormulario.valueChanges.subscribe(({condiciones , ...rest}) =>{
      this.persona = rest;
    });

  }

  guardar(){
    // const frmValue = { ...this.miFormulario.value };

    // delete frmValue.condiciones;
    // this.persona = frmValue;

    console.log(this.persona);
  }


}
