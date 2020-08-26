import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-symmetric',
  templateUrl: './symmetric.component.html',
  styleUrls: ['./symmetric.component.css']
})
export class SymmetricComponent implements OnInit {
  title = 'Symmetric Encryption';
  encryptMode: boolean;
  textToConvert: string;
  password: string;
  conversionOutput: string;
  url='http://localhost:8080/EncryptDecrypt/webapi/JsonTest';

 
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
  constructor(private http:HttpClient) {
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
    interface Result{
      Output_String:string;
    }
    console.log(this.Dataform.value);
  

    this.http.post<Result>(this.url,this.Dataform.value).subscribe(response =>{
      this.conversionOutput=response.Output_String;
      console.log(response);
    });
  /* if (this.textToConvert.trim() === "" || this.password.trim() === "") {
      this.conversionOutput = "Please fill the textboxes."
      return;
    }
    else {
      if (this.encryptMode) {

      }
      else {
      }
    }
  }*/
}  ngOnInit(): void {
  }

}
