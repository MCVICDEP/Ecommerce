import { RolService } from './../../../../services/rol.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Rol } from 'src/app/interfaces/rol';
import { Usuario } from './../../../../interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UtilidadService } from 'src/app/componentes/shared/utilidad.service';

@Component({
  selector: 'app-modalusuario',
  templateUrl: './modalusuario.component.html',
  styleUrls: ['./modalusuario.component.css']
})
export class ModalusuarioComponent implements OnInit {

  formularioUsuario: FormGroup;
  ocultarPassword: boolean = true;
  tituloAccion: string = "Agregar";
  botonAccion: string = "Guardar";
  listaRoles: Rol[] = []

  constructor(
    private modalActual: MatDialogRef<ModalusuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public datosUsuario: Usuario,
    private _rolServicio: RolService,
    private fb: FormBuilder,
    private _usuarioServicio: UsuarioService,
    private _utilidadServicio: UtilidadService
  ) {

    this.formularioUsuario = this.fb.group({
      dni: ['', Validators.required],
      nombreCompleto: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required],
      celular: ['', Validators.required],
      idRol: ['', Validators.required],
      flag: ['', Validators.required],
    });

    if (this.datosUsuario != null) {
      this.tituloAccion = "Editar";
      this.botonAccion = "Actualizar";
    }

    this._rolServicio.lista().subscribe({
      next: (data) => {
        if (data.status) this.listaRoles = data.value
      },
      error: (e) => {}
    })
  }

  ngOnInit(): void {
    if (this.datosUsuario != null) {

      this.formularioUsuario.patchValue({

        dni: this.datosUsuario.dni,
        nombreCompleto: this.datosUsuario.nombrecompleto,
        correo: this.datosUsuario.correo,
        password: this.datosUsuario.password,
        celular: this.datosUsuario.celular,
        idRol: this.datosUsuario.idrol,
        flag: this.datosUsuario.flag
      });
    }
  }

  guardarEditarUsuario() {
    const _usuario: Usuario = {
      dni: this.formularioUsuario.value.dni,
      idusuario: this.datosUsuario == null ? 0 : this.datosUsuario.idusuario,
      nombrecompleto: this.formularioUsuario.value.nombrecompleto,
      correo: this.formularioUsuario.value.correo,
      password: this.formularioUsuario.value.password,
      celular: this.formularioUsuario.value.celular,
      idrol: this.formularioUsuario.value.idrol,
      rolDescripcion: "",
      flag: parseInt(this.formularioUsuario.value.flag)
    }
    if (this.datosUsuario == null) {

      this._usuarioServicio.guardar(_usuario).subscribe({
        next: (data => {
          if (data.status) {
            alert("Usuario ha sido registrado con Éxito")
            this.modalActual.close("true")
          } else {
            alert("El usuario no pudo ser registrado")
          }
        })
      })
    }
    else
    {
      this._usuarioServicio.editar(_usuario).subscribe({
        next: (data => {
          if (data.status) {
            alert("Usuario ha sido editado con Éxito")
            this.modalActual.close("true")
          } else {
            alert("El usuario no pudo ser editado")
          }
        })
      })
    }
  }
}