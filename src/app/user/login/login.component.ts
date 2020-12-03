import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registrationFailed = false;
  form: FormGroup;
  error = '';
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
    const {required, minLength, email} = Validators;

    this.form = this.fb.group({
      email: ['', [email, required, minLength(6)]],
      password: ['', [minLength(5), required]]
    });
  }

  ngOnInit(): void {
  }

  login(): void{
    this.userService.login(this.form.value).subscribe(
      data => {
        this.router.navigate(['/']);
      }, error => {
        this.registrationFailed = true;
        this.error = error;
      }
    );
  }

}
