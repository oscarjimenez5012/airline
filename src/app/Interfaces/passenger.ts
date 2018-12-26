export interface Passenger {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
}

export interface Message {
  message: string;
  type: string;
}

export interface AppState {
  readonly passengers: Passenger[];
}