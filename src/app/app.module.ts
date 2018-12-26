import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



// ngrx modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


import { PassengerEffects } from './effects/passenger.effects';


import * as fromPassenger from './reducers/passenger.reducer';


import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';


import { PassengerService } from './services/passenger.service';
import { CountriesService } from './services/countries.service';
import { passengerReducer } from './reducers/passenger.reducer';
import { messageReducer } from './reducers/passenger.reducer';


import { AppComponent } from './app.component';
import { PassengerComponent } from './pages/passenger/passenger.component';
import { PassengerFormComponent } from './components/passenger/passenger-form/passenger-form.component';
import { PassengerResumeComponent } from './components/passenger/passenger-resume/passenger-resume.component';

const NGRX_IMPORTS = [
  StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
  EffectsModule.forRoot([PassengerEffects])
]

@NgModule({

  declarations: [
    AppComponent,
    PassengerComponent,
    PassengerFormComponent,
    PassengerResumeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
        passengers: passengerReducer,
        messages: messageReducer
      }),
    AppRoutingModule,
    AngularFontAwesomeModule,
    ...NGRX_IMPORTS
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
