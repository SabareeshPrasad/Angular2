import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<div *ngFor="let name of names"> Say hellow to {{name}} </div>
  `,
  //styleUrls: ['./app.component.css']
})
export class HelloComponent {
  names:string[];
  constructor() {
  	this.names = ['Sabareesh', 'Prasad', 'Sabari'];
  }
}
