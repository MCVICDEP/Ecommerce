import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(form:NgForm){
    const email = form.value.email
    const pass = form.value.password
  }
}
