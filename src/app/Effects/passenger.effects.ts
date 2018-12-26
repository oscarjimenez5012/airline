import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Message } from '../interfaces/passenger'

import { Observable } from 'rxjs';
import { PassengerActionTypes, MessageActionTypes, AddMessage } from '../actions/passenger.action';
import { map } from 'rxjs/operators';

@Injectable()
export class PassengerEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  addPassenger$ = this.actions$.pipe(
    ofType(PassengerActionTypes.ADD_PASSENGER),
    map(action => ({
      type: MessageActionTypes.ADD_MESSAGE,
      payload: {Message: 'New passenger added.', type: 'success'}
    }))
  );
}
