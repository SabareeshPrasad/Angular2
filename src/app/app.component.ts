import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div> Welcome </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

@Component({
  selector: 'navigation-root',
  template: `<div> Navigation </div>`,
  styleUrls: ['./app.component.css']
})

export class NavigationComponent {
  title = 'appnav';
}