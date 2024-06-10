import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export default class ContactComponent {
readonly contactForm = new FormGroup({
  name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]{2,25}$")]),
  email: new FormControl('', [Validators.required, Validators.email]),
})
  // alertService: any;

onSubmit() {
  const { name, email } = this.contactForm.value;

  if (!name || !email) {
    return;
  }

  this.contactForm.reset();
  // this.alertService.submitFormAlert(name, email);
}
}
