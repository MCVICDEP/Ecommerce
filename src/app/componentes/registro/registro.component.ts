import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  registroForm!: FormGroup;

  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm(){    
    this.registroForm = this.builder.group({
      dni:['', Validators.required],
      nombres:['', Validators.required],
      email:['', Validators.required, Validators.email],
      celular:['', Validators.required],
      password:['', Validators.required],
      confipassword:['', Validators.required],
      region:['', Validators.required],
      provincia:['', Validators.required],
      distrito:['', Validators.required],
      direccion:['', Validators.required]
    })
  }

  get f (){
    return this.registroForm.controls;
  }

  registro() {
    console.log(this.registroForm.value)
  }
}
