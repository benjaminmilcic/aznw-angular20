import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { Subscription, exhaustMap, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private authUserSub: Subscription;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authUserSub = this.authService.authUser.subscribe((authUser) => {
      this.isAuthenticated = !!authUser;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authUserSub.unsubscribe();
  }
}
