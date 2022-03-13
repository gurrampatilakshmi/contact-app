import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public contactForm: FormGroup

  @Output() newItemEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      phonenum: ['', Validators.required]
    });
  }


  ngOnInit(): void {

  }
  addContact() {
    this.newItemEvent.emit(this.contactForm.value);

  }
}
