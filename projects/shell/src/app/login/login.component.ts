import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export type ShellData = {
  username: string;
  isAuthenticated: boolean;
  loginTime: string;
  roles: string[];
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    // Listen for data requests from React
    document.addEventListener('requestData', () => {
      const storedData = localStorage.getItem('shellData');
      if (storedData) {
        const shellData = JSON.parse(storedData);
        this.emitShellData(shellData);
      }
    });
  }

  private emitShellData(data: ShellData) {
    // Store in window object
    (window as any).shellData = data;

    // Emit event for React
    document.dispatchEvent(
      new CustomEvent('shellData', {
        detail: data,
      })
    );
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // For demo purposes, we'll simulate a successful login
      const shellData: ShellData = {
        username: this.loginForm.get('username')?.value,
        isAuthenticated: true,
        loginTime: new Date().toISOString(),
        roles: ['user'], // Default role
      };

      // Store the data in localStorage for persistence
      localStorage.setItem('shellData', JSON.stringify(shellData));

      // Emit the data to React app
      this.emitShellData(shellData);

      // Navigate to React app
      this.router.navigate(['/admin']);
    }
  }

  ngOnDestroy() {
    // Clean up event listener
    document.removeEventListener('requestData', () => {});
  }
}
