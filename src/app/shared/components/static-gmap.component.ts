import { Component, Input } from '@angular/core';

@Component({
  selector: 'fb-static-gmap',
  template: `
    <img [src]="BASE_API + value" width="100%">
  `,
})
export class StaticGmapComponent  {
  @Input() value: string;
  BASE_API = 'https://www.mapquestapi.com/staticmap/v5/map?key=Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn&size=1100,500&center=';
}


// https://www.mapquestapi.com/staticmap/v5/map?key=Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn&size=1100,500&center=Trieste
