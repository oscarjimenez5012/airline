import { Component, OnInit, Input } from '@angular/core';
import {select, Store} from "@ngrx/store";
import { Observable } from "rxjs/internal/Observable";

import * as fromApp from "../../../reducers/passenger.reducer"


import { Passenger, Message, AppState } from '../../../interfaces/passenger';
import { RemovePassenger } from '../../../actions/passenger.action';

@Component({
  selector: 'app-passenger-resume',
  templateUrl: './passenger-resume.component.html',
  styleUrls: ['./passenger-resume.component.scss']
})
export class PassengerResumeComponent implements OnInit {
  public passengers$: Observable<Passenger[]>;
  public messages: Observable<Message[]>;


  constructor(private store: Store<AppState>) { 
  	this.passengers$ = store.select('passengers');
    this.messages = store.select('messages');
  }

  ngOnInit() {}
  
  removePassenger(index) {
	  this.store.dispatch(new RemovePassenger(index));
   }

}
