import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  myForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  change_color: boolean = false;


  password:any;

  show = false;

  constructor() {}

  ngOnInit() {
    this.password = 'password';
  }

  submitForm () {
    console.log("value form : ", this.myForm.value);
    this.change_color = !this.change_color
  }


  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

}
