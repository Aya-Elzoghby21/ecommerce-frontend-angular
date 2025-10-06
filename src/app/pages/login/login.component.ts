import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';
  loading = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) { this.loginForm.markAllAsTouched(); return; }
    this.errorMessage = '';
    this.loading = true;

    const body = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.auth.login(body).subscribe({
      next: () => { this.loading = false; this.router.navigate(['/products']); },
      error: err => {
        console.error(err);
        this.loading = false;
        this.errorMessage = err?.error?.title ?? 'Login failed';
      }
    });
  }
}
