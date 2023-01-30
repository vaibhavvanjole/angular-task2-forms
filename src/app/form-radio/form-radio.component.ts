import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.css']
})
export class FormRadioComponent implements OnInit {
  myFormSelect : FormGroup | any;
  selectedOptionPhone : boolean = false;
  selectedOptionEmail : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.myFormSelect = new FormGroup({
      fName : new FormControl('', Validators.required),
      lName : new FormControl('', Validators.required),
      phone : new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      email : new FormControl('', [Validators.required, Validators.email])
    })
  }
  onSubmit(){
    console.log(this.myFormSelect)
  }
  onChange(eve:any){
    console.log(eve);
    if(eve.target.defaultValue === 'phone'){
      this.selectedOptionPhone = true;
      this.selectedOptionEmail = false;
    }
    else if(eve.target.defaultValue === 'email'){
      this.selectedOptionEmail = true;
      this.selectedOptionPhone = false;
    }
  }

}
