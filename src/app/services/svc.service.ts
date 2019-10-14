import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

export interface COUNTRIES {
  name: string;
  code: string;
}

export interface FORM {
  address: string;
  contactNumber: string;
  country: string;
  dateOfBirth: moment.Moment;
  email: string;
  gender: string;
  name: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SvcService {

  // Form data placeholder
  formData: FORM = {
    address: 'placeholder',
    contactNumber: 'placeholder',
    country: 'placeholder',
    dateOfBirth: moment(),
    email: 'placeholder',
    gender: 'placeholder',
    name: 'placeholder',
    password: 'placeholder',
  };

  constructor(private http: HttpClient) { }

  setFormData(data: FORM) {
    this.formData = data;
  }

  getFormData() {
    return this.formData;
  }

  getCountries(): Promise<COUNTRIES[]> {
    return (
      this.http.get<any>('https://cors-anywhere.herokuapp.com/ec2-13-229-233-153.ap-southeast-1.compute.amazonaws.com:3000/countries')
      .toPromise()
        );
      }
}
