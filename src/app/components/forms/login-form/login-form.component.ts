import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'edu-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);

  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  loginUser() {
    this.http
      .post('http://localhost:5500/login', this.loginForm.value)
      .subscribe((data: any) => {
        window.sessionStorage.setItem('auth-token', data.accessToken);
      });
  }
}
