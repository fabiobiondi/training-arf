import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Meteo } from '../../features/ch1-reactive-forms-intro/meteo';

@Component({
  selector: 'fb-meteo-http',
  template: `
    <!--error-->    
    <div class="meteo mr-2" *ngIf="error; else showAll">{{error}}</div>

    <ng-template #showAll>
      <!--meteo icon-->
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
export class MeteoHttpComponent implements OnChanges {
  @Input() text: string;
  error: string;
  data: Meteo;

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges) {
    const { text } = changes;
    this.fetchData(text.currentValue);
  }

  fetchData(text = '') {
    this.http.get<Meteo>(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534`)
      .subscribe(
        (res: Meteo) => {
          this.error = null;
          this.data = res;
        },
        (err: HttpErrorResponse) => {
          if (err.status === 404) {
            this.error = 'city not found';
          }
        }
      );
  }
}
