import { Component } from '@angular/core';

@Component({
  selector: 'fb-root',
  template: `
    <fb-route-header></fb-route-header>
    <div class="container mt-3">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
}
