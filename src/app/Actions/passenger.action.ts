import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Passenger, Message } from '../interfaces/Passenger';

export enum PassengerActionTypes {
  ADD_PASSENGER = '[Passenger] ADD_PASSENGER',
  REMOVE_PASSENGER = '[Passenger] REMOVE_PASSENGER',
}

export enum MessageActionTypes {
  ADD_MESSAGE = 'ADD_MESSAGE',
  REMOVE_MESSAGE = 'REMOVE_MESSAGE',
}

export class AddPassenger implements Action {
  readonly type = PassengerActionTypes.ADD_PASSENGER;
  constructor(public payload: Passenger) {}
}

export class RemovePassenger implements Action {
  readonly type = PassengerActionTypes.REMOVE_PASSENGER;
  constructor(public payload: number) {}
}

export class AddMessage implements Action {
  readonly type = MessageActionTypes.ADD_MESSAGE;
  constructor(public payload: Message) {}
}

export class RemoveMessage implements Action {
  readonly type = MessageActionTypes.REMOVE_MESSAGE;
  constructor(public payload: number) {}
}

export type PassengerActions = AddPassenger | RemovePassenger;

export type MessageActions = AddMessage | RemoveMessage;
