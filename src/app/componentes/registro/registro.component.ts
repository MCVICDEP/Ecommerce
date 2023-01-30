import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



/**
 * 
 * @param form
 */

function passwordMatch(form:any){
  const password = form.get('password')
  const confipassword = form.get('confipassword')

  if (password.value !== confipassword.value){
    confipassword.setErrors({passwordMatch : true})
  } else {
    confipassword.setErrors(null)
  }
  return null
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})






export class RegistroComponent implements OnInit {

  registroForm!: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.registroForm = this.builder.group({
      dni: ['', Validators.required],
      nombres: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), validarSimbolo]],
      confipassword: ['', Validators.required],
      region: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      direccion: ['', Validators.required]
    }, {
      validators: passwordMatch
    })
  }

  registro() {
    console.log(this.registroForm.value)
  }
}

function validarSimbolo(control:any) {
  if(control.hasError('required')) return null;
  if(control.hasError('minlength')) return null;

if(control.value.indexOf('!') > -1){
  return null
} else {
  return {symbol : true}
}
}
