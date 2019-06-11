import { Component, Input } from '@angular/core';

@Component({
  selector: 'fb-static-gmap',
  template: `
    <img 
      [src]="BASE_API + '?center=' + value + '&zoom=7&size=400x200&key=' + TOKEN" alt="">
  `,
})
export class StaticGmapComponent  {
  @Input() value: string;
  BASE_API = 'https://maps.googleapis.com/maps/api/staticmap';
  TOKEN = 'AIzaSyBAyMH-A99yD5fHQPz7uzqk8glNJYGEqus';
}
