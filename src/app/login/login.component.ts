import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private AuthService:AuthService) {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
     }

  ngOnInit(): void {
    
  }
  onLogin() {
    console.log(this.loginForm.value);
    if(this.loginForm.value.email == 'admin' && this.loginForm.value.password == 'admin'){
      this.AuthService.setAuthStatus(true);
      this.router.navigate(['/contacts']);
    }else{
      alert("Please provide correct login details")
    }
  }
}
