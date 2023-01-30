import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioServicioService } from 'src/app/services/usuarioservicio.service';
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
    private _usuarioServicio: UsuarioServicioService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login() {

    this.loading = true;

    const correo = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this._usuarioServicio.getIniciarSesion(correo, password).subscribe({
      next: (data) => {
        if (data.status) {
          alert(data.status);
          this.router.navigate(['admin'])
        } else {
          // alert("ERROR, NO SE ENCONTRARON COINCIDENCIAS")
        }
      },
    }
    )
  }
}
