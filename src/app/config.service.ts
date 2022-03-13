import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000"

  signup(data:any){
    console.log(data)
    return this.http.post(this.url+"/signup", data);
  }
  login(data:any){
    console.log(data)

    return this.http.post(this.url+"/login", data)
  }
  getContactsList(){
    // return this.http.get(this.url+"/contacts");
    let contacts = [
      {
        name:"v",
        phonenum:"1234567890",
        email:"email@email.com"
      },
      {
        name:"v",
        phonenum:"1234567890",
        email:"email@email.com"
      }
    ]
  
    return contacts;
  }
  
}
