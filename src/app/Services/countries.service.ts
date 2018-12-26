import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {catchError, map, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

import {Countries} from "../interfaces/countries";
import {throwError} from "rxjs/internal/observable/throwError";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countriesUrl = '../../assets/data/countries.json';
  constructor(private http: HttpClient) { }

    getCountries() {
      return this.http.get<any>(this.countriesUrl);
    }
  }
  