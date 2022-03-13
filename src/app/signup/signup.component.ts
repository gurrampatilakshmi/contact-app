import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup
  isFormValid:boolean = false;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private configService:ConfigService) {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      secret: ['', Validators.required]
    });
  }


  ngOnInit(): void {

  }

  /**
   * Having only exp in Front End , Commented the API Reuest
   */
  onSignup() {
    if(this.signupForm.valid){
      this.isFormValid = true;
      alert("Signup Successful ! Please login")
      this.router.navigate(['/login']);
      // this.configService.signup(this.signupForm.value).subscribe(
      //   (res) => {
      //     this.router.navigate(['/login']);
      //   },
      //   (err) => {
      //     this.router.navigate(['/signup']);
      //   }
      // );
    }else{
      this.isFormValid = false;
    }
    console.log(this.signupForm.value)
  }
}
