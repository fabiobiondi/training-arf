import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'fb-ex1-form-rxjs',
  template: `
    <div class="card">
      <div class="card card-header bg-info">
        <input type="text" #usernameRef class="form-control"/>
      </div>

      <div class="card-body">
        <fb-static-gmap [value]="text"></fb-static-gmap>
        <br>
        <fb-meteo-http [text]="text"></fb-meteo-http>
      </div>
    </div>
  `
})
export class Ex1FormRxjsComponent implements OnInit, AfterViewInit {
  @ViewChild('usernameRef') username: ElementRef;
  text = 'Trieste';

  ngOnInit(): void {
    fromEvent(this.username.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 3),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        this.text = text;
      });
  }

  ngAfterViewInit() {
    const inputRef = this.username.nativeElement as HTMLInputElement;
    inputRef.value = this.text;
  }
}
