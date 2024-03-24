import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonFab,
} from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { User } from '../user.model.js';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-drawer-content',
  standalone: true,
  imports: [
    IonFab,
    MatIconModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  templateUrl: './drawer-content.component.html',
  styleUrl: './drawer-content.component.css',
})
export class DrawerContentComponent implements OnInit {
  @Input() user: User;
  @Input() userNames: string[];

  originalUser: User;
  originalUserName: string;

  @Output() closeDrawer = new EventEmitter<void>();
  @Output() saveUser = new EventEmitter<User>();

  months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];

  year = '2022';

  userConsumptions = new FormArray([]);

  errorMessage: string = null;

  ngOnInit() {
    this.originalUser = JSON.parse(JSON.stringify(this.user));
    this.originalUserName = this.user.name;
    for (let index = 0; index < 12; index++) {
      this.userConsumptions.push(
        new FormGroup({
          electricity: new FormControl(0),
          water: new FormControl(0),
          gas: new FormControl(0),
        })
      );
    }
    const userByYear = this.user[this.year];
    this.userConsumptions.setValue([...userByYear]);
  }

  onChangeYear() {
    this.user[this.year] = this.userConsumptions.value;
    this.year = this.year === '2023' ? '2022' : '2023';
    const userByYear = this.user[this.year];
    this.userConsumptions.setValue([...userByYear]);
  }

  onSaveUser() {
    this.user.name = this.user.name.trim();

    if (!this.user.image) {
      this.errorMessage = 'You must upload an image';
      return;
    }
    if (!this.user.name) {
      this.errorMessage = 'You must enter a name';
      return;
    }
    if (
      this.userNames.includes(this.user.name) &&
      this.user.name !== this.originalUserName
    ) {
      this.errorMessage = 'This name already exist';
      return;
    }

    this.user[this.year] = this.userConsumptions.value;
    this.saveUser.emit(this.user);
  }

  isSaveButtonDisabled(): boolean {
    let value2022;
    let value2023;
    if (this.year === '2022') {
      value2022 = this.userConsumptions.value;
      value2023 = this.user['2023'];
    } else {
      value2022 = this.user['2022'];
      value2023 = this.userConsumptions.value;
    }
    const userToCompare: User = {
      ...this.user,
      '2022': value2022,
      '2023': value2023,
    };
    if (JSON.stringify(this.originalUser) === JSON.stringify(userToCompare)) {
      return true;
    } else {
      return false;
    }
  }

  async onFileSelected(event) {
    const file: File = event.target.files[0];
    this.user.image = URL.createObjectURL(file);
  }
}
