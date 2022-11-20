import { FormGroup } from '@angular/forms';

export function Confirmvalidators(controlName:string,matchingValidator:string) {
    return (formGroup:FormGroup) =>{
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingValidator];
        console.log("value1" + control.value);
        console.log("value2" + matchingControl.value);

        if(control.errors && !matchingControl.errors?.['confirmValidators']) {
            return;
        }

        if(control.value != matchingControl.value) {
            console.log("true");
            matchingControl.setErrors({ confirmedValidator:true});
        } else{
            console.log("tue");
            matchingControl.setErrors(null);
        }
    }
}