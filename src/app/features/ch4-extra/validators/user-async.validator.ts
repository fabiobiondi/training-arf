import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn, FormControl } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';

const URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class UserValidator {
  constructor(private http: HttpClient) {}

  searchUser(text) {
    // debounce
    return timer(1000)
      // Check if username is available
      .pipe(
        switchMap(() => this.http.get<any>(`${URL}/users?username=${text}`))
      );
  }

  uniqueName(): AsyncValidatorFn {
    return (control: FormControl): Observable<{ [key: string]: any } | null> => {
      return this.searchUser(control.value)
        .pipe(
          map(res => res.length ? { notAvailable: true } : null)
        );
    };

  }

}
