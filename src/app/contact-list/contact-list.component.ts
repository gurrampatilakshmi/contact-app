import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contactsList: any = [];
  constructor(private configService:ConfigService, private router:Router) {
   }

  ngOnInit(): void {

  }
 

}
