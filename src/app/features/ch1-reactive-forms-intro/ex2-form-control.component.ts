import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

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
        <fb-static-gmap [value]="text"></fb-static-gmap>
        <br>
        <fb-meteo-http [text]="text"></fb-meteo-http>
      </div>
    </div>
  `
})
export class Ex2FormControlComponent {
  text = 'Rome';
  input: FormControl;

  constructor() {
    this.input = new FormControl(this.text);
    this.input.valueChanges
      .pipe(
        filter((text: string) => text.length > 3),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(text => {
        this.text = text;
      });
  }
}
