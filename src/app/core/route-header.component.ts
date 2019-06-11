import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'fb-route-header',
  template: `    
    <nav class="navbar navbar-light bg-light" *ngIf="!root">
      <div class="navbar-brand" routerLink="">
        <i class="fa fa-arrow-circle-left"></i>
        {{data?.label}}
      </div>
      
      <strong class="pull-right">
        Reactive Forms
      </strong>
    </nav>
  `,
})
export class RouteHeaderComponent implements OnInit {
  data: any;
  root = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        map((event: ActivationEnd) => event.snapshot)
      )
      .subscribe((snapshot: ActivatedRouteSnapshot) => {
        this.root = snapshot.routeConfig.path === '';
        this.data = snapshot.data;
      });
  }

  ngOnInit() {
  }

}
