import { UtilidadService } from './../shared/utilidad.service';
import { Login } from './../../interfaces/login';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  loginForm!: FormGroup;
  hidePassword: boolean = true;
  loading: boolean = false;

  model: any = {}

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _utilidadServicio : UtilidadService,
    private _usuarioServicio: UsuarioService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login() {

    const req : Login = {
      correo : this.loginForm.value.email,
      password : this.loginForm.value.password
    } 


    this._usuarioServicio.iniciarSesion(req).subscribe({
      next: (data) => {
        if (data.status) {
          this._utilidadServicio.guardarSesionUsuario(data.value)
          this.router.navigate(['admin'])
        } else {
          alert("ERROR, NO SE ENCONTRARON COINCIDENCIAS")
        }
      },
    }
    )
  }
}
