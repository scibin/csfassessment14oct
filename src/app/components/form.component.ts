import { Component, OnInit } from '@angular/core';
import { SvcService, COUNTRIES } from '../services/svc.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // For the requirement that users must be at least 18 years old
  // maxDate is the latest date that the user can enter
  minAge = 18;
  maxDate = moment().subtract(this.minAge, 'years');

  // Placeholder while using GET
  countryList: COUNTRIES[] = [
    {
      name: 'Afghanistan',
      code: 'AF'
    },
    {
      name: 'Western Sahara',
      code: 'EH'
    },
    {
      name: 'Yemen',
      code: 'YE'
    }
  ];

  constructor(private svc: SvcService, private router: Router) { }

  ngOnInit() {
    // Gets list of countries using HTTP GET
    this.svc.getCountries()
    .then((data) => {
      this.countryList = data;
    });
  }

  submitForm(data: any) {
    // Transfers form data to service
    this.svc.setFormData(data.value);
    // Page routing
    this.router.navigate(['/confirmation']);
  }
}
