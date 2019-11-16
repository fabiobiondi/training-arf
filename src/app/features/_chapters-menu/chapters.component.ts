import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

interface MyRoute extends Route {
  data: { label: string };
}

@Component({
  selector: 'fb-chapters',
  template: `
    <h3>Angular Reactive Forms examples</h3>
    <li *ngFor="let page of routes" [hidden]="!page.data">
      <a [routerLink]="page.path">{{page.data?.label}}</a>
    </li>
  `,
})
export class ChaptersComponent {
  routes: MyRoute[];
  constructor(public router: Router) {
    this.routes = router.config as MyRoute[];
  }
}
