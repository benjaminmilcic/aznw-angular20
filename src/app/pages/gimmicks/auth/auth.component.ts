import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JokesBookComponent } from './jokes-book/jokes-book.component';
import { StripeComponent } from './stripe/stripe.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule, JokesBookComponent,StripeComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {}
