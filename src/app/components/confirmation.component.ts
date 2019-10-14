import { Component, OnInit } from '@angular/core';
import { SvcService, FORM } from '../services/svc.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  // Placeholder information while data loads
  formData: FORM = {
    address: 'placeholder',
    contactNumber: 'placeholder',
    country: 'placeholder',
    dateOfBirth: moment(),
    email: 'placeholder',
    gender: 'placeholder',
    name: 'placeholder'
  };

  constructor(private svc: SvcService, private router: Router) { }

  ngOnInit() {
    // Get using service
    this.formData = this.svc.getFormData();
    // Deletes password info, make it inaccessible
    delete this.formData.password;
  }

  back() {
    // Goes back to root
    this.router.navigate(['/']);
  }
}
