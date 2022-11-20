import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Confirmvalidators } from '../confirm-validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  registrationForm!:FormGroup;
  submittedform:boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName:['',Validators.required],
      userName:[null,Validators.compose([Validators.required, Validators.email])],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
    }); 
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        console.log("abc" + control.value);
        console.log("xyz" + matchingControl.value);

        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  

  submitReactiveForm() {
    this.submittedform = true;
    console.log("ABC" + this.registrationFormControls['userName'].invalid);
    // console.log(this.registrationFormControls['confirmPassword'].errors?.['confirmPassword']);
    // console.log(this.registrationFormControls['firstName'].errors?.['required']);
  }

  get registrationFormControls() {
    return this.registrationForm.controls;
  }
}
