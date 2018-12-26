import { Passenger, Message } from '../interfaces/passenger';
import {  PassengerActions, PassengerActionTypes, MessageActions, MessageActionTypes, AddMessage } from '../actions/passenger.action';


export function passengerReducer(state: Passenger[] = [], action: PassengerActions) {
  switch (action.type) {
    case PassengerActionTypes.ADD_PASSENGER:
    console.log("state", state);
      return [...state, action.payload];

    case PassengerActionTypes.REMOVE_PASSENGER:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
}

export function messageReducer(state: Message[] = [], action: MessageActions) {
  switch (action.type) {
    case MessageActionTypes.ADD_MESSAGE:
      return [...state, action.payload];

	case MessageActionTypes.REMOVE_MESSAGE:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }



}

