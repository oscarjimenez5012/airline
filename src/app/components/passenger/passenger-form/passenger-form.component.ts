import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


import {Observable} from "rxjs/internal/Observable";
import {select, Store} from "@ngrx/store";
import {CountriesService} from "../../../services/countries.service";
import * as PassengerActions from "../../../actions/passenger.action"

import {Countries} from "../../../interfaces/countries";
import {Passenger, AppState} from "../../../interfaces/passenger";

import {Router} from "@angular/router";

import { AddPassenger } from '../../../actions/passenger.action';


@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {
  countries$;
  passengers$;
  phoneNumber: any;
  constructor(private fb: FormBuilder, 
              private countriesService: CountriesService,
              private store: Store<Countries>,
              private storePassengers: Store<AppState>,
              private router : Router,

              ) { 
              this.passengers$ = storePassengers.select('passengers');
  }

  ngOnInit() {
    this.countriesService.getCountries()
      .subscribe((data) => this.countries$ = data);
    
  }
  
  
  passengerForm = this.fb.group({
    firstName: ['', [Validators.required]],    
    lastName: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: this.fb.group({
    country: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  })

  });
  passengerRegistration(firstName: string,
      lastName: string, 
      dateOfBirth: string,
      email: string,
      phoneNumber: string) {
      this.store.dispatch(new AddPassenger({ firstName, lastName, dateOfBirth, email, phoneNumber }));
      this.passengerForm.get('firstName').reset();
      this.passengerForm.get('lastName').reset();
      this.passengerForm.get('dateOfBirth').reset();

      
  }
}
