import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map,delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private httpClient:HttpClient) { }


  validate(control: AbstractControl):Observable<ValidationErrors | null> {
    const _email = control.value;

    console.log("Email recibido para validar : " + _email);
    
   return this.httpClient.get<any[]>(`http://localhost:3000/usuarios?q=${_email}`)
                              .pipe(
                                delay(7000),
                                map(
                                  response => {
                                    return (response.length === 0) ? null : { notAvailable:true }
                                  }
                                )
                              )
  }
}
