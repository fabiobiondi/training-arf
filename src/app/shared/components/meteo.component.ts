import { Component, Input } from '@angular/core';
import { Meteo } from '../../features/ch1-reactive-forms-intro/meteo';

@Component({
  selector: 'fb-meteo',
  template: `
    <div class="meteo mr-2" *ngIf="!data; else showAll">
      No results
    </div>

      <!--meteo icon-->
    <ng-template #showAll>
      <img
        *ngIf="data?.weather[0].icon"
        [src]="'http://openweathermap.org/img/w/' + data?.weather[0].icon + '.png'">
      <!--temp-->
      <div class="meteo mr-2">{{data?.main.temp}}°</div>
      <!--meteo description-->
      <div class="meteo">{{data?.weather[0].description}}</div>
    </ng-template>
  `,
  styles: [`
    .meteo {
      background-color: #ededed;
      color: #222;
      display: inline-block;
      font-size: 24px;
      padding: 10px;
      margin-top: 10px;
      border-radius: 10px;
    }
  `]
})
export class MeteoComponent {
  @Input() data: Meteo;
}
