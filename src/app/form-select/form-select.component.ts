import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {
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
    if(eve.target.value === 'phone'){
      this.selectedOptionPhone = !this.selectedOptionPhone;
      this.selectedOptionEmail = false;
    }
    else if(eve.target.value === 'email'){
      this.selectedOptionEmail = !this.selectedOptionEmail;
      this.selectedOptionPhone = false;
    }
  }
}
