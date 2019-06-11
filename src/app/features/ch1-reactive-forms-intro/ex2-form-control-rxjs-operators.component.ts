import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { Meteo } from './meteo';

@Component({
  selector: 'fb-ex2-form-control',
  template: `
    <div class="card">
      <div class="card card-header bg-info">
        <input
          [formControl]="input"
          class="form-control bg-info text-white"
          type="text" 
          placeholder="Search by city"
        >
      </div>
      <div class="card-body">
        <fb-static-gmap *ngIf="meteo" [value]="meteo?.name"></fb-static-gmap>
        <br>
        <fb-meteo [data]="meteo"></fb-meteo>
      </div>
    </div>
  `
})
export class Ex2FormControlRxjsOperatorsComponent {
  input: FormControl;
  meteo: Meteo;

  constructor(http: HttpClient) {
    this.input = new FormControl();

    this.input.valueChanges
      .pipe(
        filter((text: string) => text.length > 3),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(text => http.get<Meteo>(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534`)
          .pipe(catchError(() => of(null))) // Needed to keep alive the stream
        )
      )
      .subscribe(
        (meteo: Meteo) => {
          this.meteo = meteo;
        }
      );

    // Need setValue instead of inizialize formControl in order to trigger a next in 'valueChanges' observable
    this.input.setValue('Rome');
  }

}
