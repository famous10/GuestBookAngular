import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fg:FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),

    });
  }

  onSubmit() {
    if (this.validate()){
       this.postData()
    }
    else{
      alert("Required Field(s) is missing!");
    }
  }


  validate(): Boolean {

    let valid = true;
    if (this.fg.controls.name.value == "")
      valid = false;

    if (this.fg.controls.email.value == "")
      valid = false;

    if (this.fg.controls.phone.value == "")
      valid = false;

    console.log(valid);
    return valid;
  }


 postData() {
   const data = {
     name:this.fg.controls.name.value,
     email:this.fg.controls.email.value,
     phone:this.fg.controls.phone.value
   };
   const options = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   };
      this.http.post("http://localhost:3000/guest", data, options).subscribe(response => {
        console.log(response);
     
//      alert(response)
          window.location.reload();

   });
 }
}
                                   