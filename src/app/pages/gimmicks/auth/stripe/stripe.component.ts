import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import {
  injectStripe,
  NgxStripeModule,
  StripePaymentElementComponent,
} from 'ngx-stripe';
import {
  StripeElementsOptions,
  StripePaymentElementOptions,
} from '@stripe/stripe-js';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-stripe',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    NgxStripeModule,
    MatInputModule,
  ],
  templateUrl: './stripe.component.html',
  styleUrl: './stripe.component.css',
})
export class StripeComponent implements OnInit {
  @ViewChild(StripePaymentElementComponent)
  paymentElement!: StripePaymentElementComponent;

  @ViewChild('nameInput') nameInput: ElementRef;
  nameError = false;
  @ViewChild('emailInput') emailInput: ElementRef;
  emailError = false;
  @ViewChild('streetInput') streetInput: ElementRef;
  streetError = false;
  @ViewChild('zipCodeInput') zipCodeInput: ElementRef;
  zipCodeError = false;
  @ViewChild('cityInput') cityInput: ElementRef;
  cityError = false;

  private readonly fb = inject(UntypedFormBuilder);

  paymentElementForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    address: ['', [Validators.required]],
    zipcode: ['', [Validators.required]],
    city: ['', [Validators.required]],
    amount: [1498, [Validators.required, Validators.pattern(/\d+/)]],
  });

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
    clientSecret: null,
    appearance: {
      theme: 'flat',
    },
  };

  paymentElementOptions: StripePaymentElementOptions = {
    layout: {
      type: 'tabs',
      defaultCollapsed: false,
      radios: false,
      spacedAccordionItems: false,
    },
  };

  // Replace with your own public key
  stripe = injectStripe(
    'pk_test_51P05azL6Qm22ltjdlDi75OKMXcdkImE9eB6U7pS709irbBgVW1OuvSEho05cYC3OdwAt4nJh2Zfike65t3OKhviN00RWkBd4Qa'
  );
  paying = signal(false);

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    const items = [{ id: 'xl-tshirt' }];

    try {
      const { clientSecret } = await lastValueFrom(
        this.http.post<{ clientSecret: string }>(
          'http://localhost:80/create.php',
          JSON.stringify({ items })
        )
      );
      this.elementsOptions.clientSecret = clientSecret;
    } catch (error) {
      console.log('clientSecret not fetched');
      console.log(error);
    }
  }

  pay() {
    this.nameError = false;
    this.emailError = false;
    this.streetError = false;
    this.zipCodeError = false;
    this.cityError = false;
    if (this.paymentElementForm.invalid) {
      if (this.paymentElementForm.controls['name'].invalid) {
        this.nameInput.nativeElement.focus();
        this.nameInput.nativeElement.blur();
        this.nameError = true;
      }
      if (this.paymentElementForm.controls['email'].invalid) {
        this.emailInput.nativeElement.focus();
        this.emailInput.nativeElement.blur();
        this.emailError = true;
      }
      if (this.paymentElementForm.controls['address'].invalid) {
        this.streetInput.nativeElement.focus();
        this.streetInput.nativeElement.blur();
        this.streetError = true;
      }
      if (this.paymentElementForm.controls['zipcode'].invalid) {
        this.zipCodeInput.nativeElement.focus();
        this.zipCodeInput.nativeElement.blur();
        this.zipCodeError = true;
      }
      if (this.paymentElementForm.controls['city'].invalid) {
        this.cityInput.nativeElement.focus();
        this.cityInput.nativeElement.blur();
        this.cityError = true;
      }
      return;
    }

    if (this.paying()) return;
    this.paying.set(true);

    const { name, email, address, zipcode, city } =
      this.paymentElementForm.getRawValue();

    this.stripe
      .confirmPayment({
        elements: this.paymentElement.elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: name as string,
              email: email as string,
              address: {
                line1: address as string,
                postal_code: zipcode as string,
                city: city as string,
              },
            },
          },
          return_url: 'http://localhost:4200/#/gimmicks/auth/login',
        },
        redirect: 'if_required',
      })
      .subscribe((result) => {
        console.log(result);

        this.paying.set(false);
        if (result.error) {
          // Show error to your customer (e.g., insufficient funds)
          alert({ success: false, error: result.error.message });
          console.log(result.error.message);
        } else {
          // The payment has been processed!
          if (result.paymentIntent.status === 'succeeded') {
            // Show a success message to your customer
            alert({ success: true });
            console.log('succeed');
          }
        }
      });
  }
}
