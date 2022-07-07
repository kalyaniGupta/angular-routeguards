import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  invalidCredentialMsg: string;
  username: string;
  password: string;
  returnUrl: string = 'home';

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.returnUrl = params.get('returnUrl');
      console.log('LoginComponent/ngOnInit ' + this.returnUrl);
    });
  }

  onFormSubmit(loginForm) {
    this.authService
      .login(loginForm.value.username, loginForm.value.password)
      .subscribe((data) => {
        console.log('return to ' + this.returnUrl);
        if (this.returnUrl != null) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.router.navigate(['home']);
        }
      });
  }
}
