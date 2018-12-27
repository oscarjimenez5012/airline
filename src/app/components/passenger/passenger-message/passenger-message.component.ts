import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveMessage } from '../../../actions/passenger.action';
import { Message, AppState } from '../../../interfaces/passenger';



@Component({
  selector: 'app-passenger-message',
  templateUrl: './passenger-message.component.html',
  styleUrls: ['./passenger-message.component.scss']
})
export class PassengerMessageComponent implements OnInit {
  @Input()
  messages: Message;
  constructor(private store: Store<AppState>) { 

  }

  ngOnInit() {
  }

  deleteMessage(index) {
  	this.store.dispatch(new RemoveMessage(index));
  }
}
