import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Directive } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Directive({
  selector: '[fbUsernameAsyncValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UserAsyncValidatorDirective,
      multi: true
    }
  ]
})
export class UserAsyncValidatorDirective implements AsyncValidator {

  constructor(private http: HttpClient) {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users/?q=' + control.value)
      .pipe(
        map(res => {
          if (res.length > 0 ) {
            return { notAvailable: true };
          }
        }),
        catchError(() => {
          return null;
        })
      );
  }
}
