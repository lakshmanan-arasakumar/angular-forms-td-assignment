import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription = 'advanced';
  @ViewChild('formData', {static: false})
  formData: NgForm;
  submitted = false;

  form = {
    emailAddress: '',
    subscription: '',
    password: ''
  };

  onSubmit() {
    this.form.emailAddress = this.formData.value.emailAddress;
    this.form.password = this.formData.value.password;
    this.form.subscription = this.formData.value.subscription;

    this.submitted = true;
  }
}
