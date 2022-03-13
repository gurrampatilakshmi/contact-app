import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.scss']
})
export class ContactManagerComponent implements OnInit {

  listContacts:any;

  constructor(private authService:AuthService, private router:Router, private configService:ConfigService) { 
    this.listContacts = []
  }

  ngOnInit(): void {
    this.getContactsList();
  }

  addContact(newContact:any) {
    this.listContacts.push(newContact);
  }
  logout(){
    this.authService.setAuthStatus(false);
    this.router.navigate(['/login']);
  }
  
  /**
   * Having only exp in Front End , Commented the API Reuest
   */
  getContactsList(){
    // this.configService.getContactsList().subscribe(
    //   (res) => {
        
    //   },
    //   (err) => {
        
    //   }
    // );
    this.listContacts = this.configService.getContactsList();
  }
}
