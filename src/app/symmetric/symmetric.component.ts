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
  Modevalidator:string;
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
    this.Dataform.get("Mode").setValue("Encryption");
    this.Dataform.get("Alg").setValue("AES-256");
    this.encryptMode = true;
  }

  changeMode() {
    this.Modevalidator=this.Dataform.get("Mode").value;
     if(this.Modevalidator=="Encryption"){
       this.encryptMode=true;
       console.log(this.encryptMode);
     }
     else{this.encryptMode=false;}
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
  

    
  if (this.Dataform.get("Text").value.trim() === "" || this.Dataform.get("Pass").value.trim() === "") {
      this.conversionOutput = "Please fill the textboxes."
      return;
    }
    else {
        this.http.post<Result>(this.url,this.Dataform.value).subscribe(response =>{
          this.conversionOutput=response.Output_String;
          console.log(response);
        },(error) =>{
          this.conversionOutput="Error occurred:Please check your connection";
        });
      }
}  ngOnInit(): void {
  }

}
