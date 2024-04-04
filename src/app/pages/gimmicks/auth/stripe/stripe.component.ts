import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import {
  injectStripe,
  NgxStripeModule,
  StripeElementsDirective,
  StripePaymentElementComponent,
} from 'ngx-stripe';
import {
  StripeElementLocale,
  StripeElementsOptions,
  StripePaymentElementOptions,
} from '@stripe/stripe-js';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { IonSpinner } from '@ionic/angular/standalone';

@Component({
  selector: 'app-stripe',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    NgxStripeModule,
    MatInputModule,
    FormsModule,
    IonSpinner,
  ],
  templateUrl: './stripe.component.html',
  styleUrl: './stripe.component.css',
})
export class StripeComponent implements OnInit {
  @ViewChild(StripePaymentElementComponent)
  paymentElement!: StripePaymentElementComponent;
  @ViewChild(StripeElementsDirective) elements!: StripeElementsDirective;

  viewType: 'payment' | 'success' | 'error' = 'payment';
  error: string = null;

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('streetInput') streetInput: ElementRef;
  @ViewChild('zipCodeInput') zipCodeInput: ElementRef;
  @ViewChild('cityInput') cityInput: ElementRef;

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
    locale: <StripeElementLocale>this.translate.currentLang,
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
  stripe = injectStripe();
  paying = signal(false);

  constructor(private http: HttpClient, private translate: TranslateService) {}

  async ngOnInit() {
    this.translate.onLangChange.subscribe((lang) => {
      this.elementsOptions.locale = <StripeElementLocale>lang.lang;
      this.elements.update(this.elementsOptions);
    });

    const items = [{ items: 'book' }];

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
    if (this.paymentElementForm.invalid) {
      if (this.paymentElementForm.controls['name'].invalid) {
        this.nameInput.nativeElement.focus();
        this.nameInput.nativeElement.blur();
      }
      if (this.paymentElementForm.controls['email'].invalid) {
        this.emailInput.nativeElement.focus();
        this.emailInput.nativeElement.blur();
      }
      if (this.paymentElementForm.controls['address'].invalid) {
        this.streetInput.nativeElement.focus();
        this.streetInput.nativeElement.blur();
      }
      if (this.paymentElementForm.controls['zipcode'].invalid) {
        this.zipCodeInput.nativeElement.focus();
        this.zipCodeInput.nativeElement.blur();
      }
      if (this.paymentElementForm.controls['city'].invalid) {
        this.cityInput.nativeElement.focus();
        this.cityInput.nativeElement.blur();
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
          this.viewType = 'error';
          this.error = result.error.message;
        } else {
          // The payment has been processed!
          if (result.paymentIntent.status === 'succeeded') {
            // Show a success message to your customer
            this.viewType = 'success';
          }
        }
      });
  }

  onTryAgain() {
    this.viewType = 'payment';
    this.paymentElementForm.controls['name'].setValue('');
    this.paymentElementForm.controls['email'].setValue('');
    this.paymentElementForm.controls['address'].setValue('');
    this.paymentElementForm.controls['zipcode'].setValue('');
    this.paymentElementForm.controls['city'].setValue('');
  }
}
