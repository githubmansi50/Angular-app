import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EncryptTest';
  encryptMode: boolean;
  textToConvert: string;
  password: string;
  conversionOutput: string;
  postData;
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
   /* this.postData={
      Pass:this.Dataform.get("passKey"),
      Text:this.Dataform.get("textToConvert"),
      Mode:1,
      Alg:1
    };*/

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
}
}
