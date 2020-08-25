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
 
  Dataform = new FormGroup({
    Pass:new FormControl(''),
    Text: new FormControl(''),
    Mode: new FormControl('', Validators.required),
    Alg:new FormControl('')
  });

  
  get f(){
    return this.Dataform.controls;
  }
  
  submit(){
    console.log(this.Dataform.value);
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
    /*if (this.textToConvert.trim() === "" || this.password.trim() === "") {
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
*/}

  ngOnInit(): void {
  }

}
