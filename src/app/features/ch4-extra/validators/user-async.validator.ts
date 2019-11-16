import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncValidatorFn, FormControl } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';

const URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class UserValidator {

  constructor(private http: HttpClient) {}

  uniqueName(): AsyncValidatorFn {
    return (control: FormControl): Observable<{ [key: string]: any } | null> => {
      // simulate Response delay
      return timer(1000)
        .pipe(
          switchMap(() => this.http.get<any>(`${URL}/users?username=${control.value}`)),
          map(res => res.length ? { notAvailable: true } : null)
        );
    };
  }
}
