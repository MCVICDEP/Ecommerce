import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  model: any = {}

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.model)
  }
}
