import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-asymmetric',
  templateUrl: './asymmetric.component.html',
  styleUrls: ['./asymmetric.component.css']
})
export class AsymmetricComponent implements OnInit {
  title = 'Asymmetric Encryption';
  encryptMode: boolean=true;
  publiKeyLabel:boolean;
  Modevalidator:string;
  conversionOutput: string;
  conversionOutput2: string;
  isShown:boolean = true;
  url='http://localhost:8080/EncryptDecrypt/webapi/AsymmetricString';

 
  AsymDataform = new FormGroup({
    Pass:new FormControl(''),
    Text: new FormControl(''),
    Mode: new FormControl('', Validators.required)
  });

  
  get f(){
    return this.AsymDataform.controls;
  }
  
  submit(){
    console.log(this.AsymDataform.value);
  }
  constructor(private http:HttpClient) {
    this.publiKeyLabel= false;
  }

  changeMode() {
    this.Modevalidator=this.AsymDataform.get("Mode").value;
     if(this.Modevalidator=="Encryption"){
       this.encryptMode=true;
       console.log(this.encryptMode);
     }
     else{this.encryptMode=false;}

  }
  generateKeys(){
    this.publiKeyLabel=false;
    this.isShown=true;
    interface keys{
      Public_key:string,
      Private_key:string
    }
    this.http.get<keys>(this.url).subscribe(response =>{
      this.conversionOutput=response.Public_key;
      this.conversionOutput2=response.Private_key;
      console.log(response.Public_key);
      console.log(response.Private_key);

    });
  }

  changeAlgo() {
    this.encryptMode = this.encryptMode;
  }
  convertText() {
    this.isShown = ! this.isShown;
    this.publiKeyLabel=true;

    interface Result{
      Output_String:string;
    }
    console.log(this.AsymDataform.value);
    
    

      
  if (this.AsymDataform.get("Text").value.trim() === "" || this.AsymDataform.get("Pass").value.trim() === "") {
    this.conversionOutput = "Please fill the textboxes."
    return;
  }
  else {
      this.http.post<Result>(this.url,this.AsymDataform.value).subscribe(response =>{
        this.conversionOutput=response.Output_String;
        console.log(response);
      },(error) =>{
        this.conversionOutput="Error occurred:Please check your connection";
      });
    }
   
  }


  ngOnInit(): void {
  }

}
