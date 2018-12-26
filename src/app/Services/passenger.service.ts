import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor() { }

  register(user): Observable<any> {
  	return from([true]);
  }
}
