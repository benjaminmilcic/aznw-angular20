import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { IonSpinner } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { AuthResponseData } from '../auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    IonSpinner,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.css',
})
export class AuthLoginComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;
  @ViewChild('emailInput2') emailInput2: ElementRef;
  @ViewChild('passwordInput2') passwordInput2: ElementRef;
  @ViewChild('confirmInput') confirmInput: ElementRef;
  passwordError: string = null;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}

  onSwitchMode() {
    this.error = null;
    this.passwordError = null;
    this.isLoginMode = !this.isLoginMode;
  }

  onLogin(form: NgForm) {
    if (form.controls['email'].invalid) {
      this.emailInput.nativeElement.focus();
      this.emailInput.nativeElement.blur();
    }
    if (form.controls['password'].invalid) {
      this.passwordInput.nativeElement.focus();
      this.passwordInput.nativeElement.blur();
    }
  }

  onSignUp(form: NgForm) {
    this.passwordError = null;
    if (form.controls['email'].invalid) {
      this.emailInput2.nativeElement.focus();
      this.emailInput2.nativeElement.blur();
    }
    if (form.controls['password'].invalid) {
      this.passwordInput2.nativeElement.focus();
      this.passwordInput2.nativeElement.blur();
      this.passwordError='Das Password muss mindestens 6 Zeichen lang sein'
    }
    if (form.controls['confirmPassword'].invalid) {
      this.confirmInput.nativeElement.focus();
      this.confirmInput.nativeElement.blur();
    }
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      if (password === confirmPassword) {
        authObs = this.authService.signup(email, password);
      } else {
        this.error = 'Passwoerter stimmen nicht ueberein!';
        this.isLoading = false;
        return;
      }
    }
    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/gimmicks/auth/main']);
      },
      (errorMessage) => {
        console.log('Error', errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    form.reset();
  }
}
