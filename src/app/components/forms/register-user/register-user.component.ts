import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'edu-register-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
})
export class RegisterUserComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);

  registerForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  registerUser() {
    this.http
      .post('http://localhost:5500/users', this.registerForm.value)
      .subscribe(() => {
        
      });
  }
}
