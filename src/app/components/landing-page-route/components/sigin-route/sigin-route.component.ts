import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin-route',
  templateUrl: './sigin-route.component.html',
  styleUrls: ['./sigin-route.component.css'],
})
export class SiginRouteComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['admin@gmail.com', [Validators.required]],
      password: ['admin', [Validators.required]],
    });
  }

  submit() {
    if (
      this.loginForm.value.email === 'admin@gmail.com' &&
      this.loginForm.value.password === 'admin'
    ) {
      this.router.navigate(['/dashboard']);
    }
  }

  canSubmit(): boolean {
    return this.loginForm.valid;
  }

  getControl(controlName: string) {
    return this.loginForm.get(controlName);
  }
}
