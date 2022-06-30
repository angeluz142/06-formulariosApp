import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  

  miFormulario:FormGroup = this.frmBldr.group({
    nombre:['',[Validators.required,Validators.pattern(this.validatorSrv.regexNombreApellido)]],
    email:['',[Validators.required,Validators.pattern(this.validatorSrv.emailPattern)],[this.emailVlServ]],
    username:['',[Validators.required,this.validatorSrv.validUsername]],
    password:['',[Validators.required,Validators.min(6)]],
    password2:['',[Validators.required]]
  },{
    validators:[this.validatorSrv.camposIguales('password','password2')]
  });

  //emailMsgError:string = '';

get emailMsgError():string {

    const _emailError = this.miFormulario.get('email')?.errors;

    if(_emailError?.required){
      return 'El email es requerido'
    }
    else if( _emailError?.pattern ){
      return 'El email no cumple con el formato abcd@site.com'
    }
    else if( _emailError?.notAvailable ) {
      return 'Ya el email está en uso'
    }


  return '';
}

  constructor(
      private frmBldr:FormBuilder,
      private validatorSrv:ValidatorService, 
      private emailVlServ:EmailValidatorService) { }
      

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Angel Uzcategui',
      email:'asdas@gmasd.com',
      username:'holsa',
      password:'123456',
      password2:'123456'
    })
  }


  campoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && 
              this.miFormulario.get(campo)?.touched;
  }

  enviar(){
    this.miFormulario.markAllAsTouched();
  }

}
