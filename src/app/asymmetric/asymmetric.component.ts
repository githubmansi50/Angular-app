import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-asymmetric',
  templateUrl: './asymmetric.component.html',
  styleUrls: ['./asymmetric.component.css']
})
export class AsymmetricComponent implements OnInit {
  encryptMode: boolean;
  textToConvert: string;
  password: string;
  conversionOutput: string;
 
  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  constructor() {
    this.encryptMode = true;
  }

  changeMode() {
    this.encryptMode = this.encryptMode ? false : true;
    this.encryptMode = this.encryptMode ? true : false;

    this.textToConvert = "";
  }


  changeAlgo() {
    this.encryptMode = this.encryptMode;
    this.textToConvert = "";
  }

  convertText() {
    if (this.textToConvert.trim() === "" || this.password.trim() === "") {
      this.conversionOutput = "Please fill the textboxes."
      return;
    }
    else {
      if (this.encryptMode) {
      }
      else {
      }
    }
  }

  ngOnInit(): void {
  }

}
