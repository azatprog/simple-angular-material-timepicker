import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ngmat-timepicker',
  template: `
    <form [formGroup]="form">
      <div class="content timepicker">
        <div class="input-field">
          <button mat-icon-button (click)="increaseHours()" class="time-clicker">
            <mat-icon color="primary"> expand_less </mat-icon>
          </button>
          <mat-form-field>
            <input matInput
              [(ngModel)]="hours"
              (blur)="applyHours()"
              formControlName="hours"
              maxlength="2"
              tabindex="1">
          </mat-form-field>
          <button mat-icon-button (click)="decreaseHours()" class="time-clicker">
            <mat-icon color="primary"> expand_more </mat-icon>
          </button>
        </div>
        <div class="separator primary">
          <span> : </span>
        </div>
        <div class="input-field">
          <button mat-icon-button (click)="increaseMinutes()" class="time-clicker">
            <mat-icon color="primary"> expand_less </mat-icon>
          </button>
          <mat-form-field>
            <input matInput
              [(ngModel)]="minutes"
              (blur)="applyMinutes()"
              formControlName="minutes"
              maxlength="2"
              tabindex="2">
          </mat-form-field>
          <button mat-icon-button (click)="decreaseMinutes()" class="time-clicker">
            <mat-icon color="primary"> expand_more </mat-icon>
          </button>
        </div>
      </div>
    </form>
  `,
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {

  timeValue = '00:00';

  @Output()
  timeChange = new EventEmitter<string>();

  @Input()
  get time() {
    return this.timeValue;
  }

  set time(val) {
    this.timeValue = val;
    this.timeChange.emit(this.timeValue);
  }

  hours: string;
  minutes: string;
  maxHours = 24;
  maxMinutes = 60;
  form: FormGroup;
  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      hours: new FormControl(),
      minutes: new FormControl()
    });
    const timeSplit = this.time.split(':');
    this.hours = timeSplit[0];
    this.minutes = timeSplit[1];
  }

  calc(limit: number, currentValue: number) {
    return (currentValue === limit) ? 0 : (currentValue % limit);
  }

  convertToTwoDigites(value: number): string {
    return (value < 10) ? ('0' + value) : value.toString();
  }

  increaseHours() {
    const increasedHours = this.calc(this.maxHours, parseInt(this.hours, 10) + 1);
    this.hours = this.convertToTwoDigites(increasedHours);
    this.applyHours();
  }

  increaseMinutes() {
    const increasedMinutes = this.calc(this.maxMinutes, parseInt(this.minutes, 10) + 1);
    this.minutes = this.convertToTwoDigites(increasedMinutes);
    this.applyMinutes();
  }

  decreaseHours() {
    const increasedHours = this.calc(this.maxHours, parseInt(this.hours, 10) - 1);
    this.hours = this.convertToTwoDigites(increasedHours);
    this.applyHours();
  }

  decreaseMinutes() {
    const increasedMinutes = this.calc(this.maxMinutes, parseInt(this.minutes, 10) - 1);
    this.minutes = this.convertToTwoDigites(increasedMinutes);
    this.applyMinutes();
  }

  applyMinutes() {
    const parsedMinutes = Number(this.minutes);
    this.minutes = (parsedMinutes >= 0 && parsedMinutes <= this.maxMinutes) ? this.minutes : '00';
    this.timeValue = this.hours + ':' + this.minutes;
    this.timeChange.emit(this.timeValue);
  }

  applyHours() {
    const parsedHours = Number(this.hours);
    this.hours = (parsedHours >= 0 && parsedHours <= this.maxHours) ? this.hours : '00';
    this.timeValue = this.hours + ':' + this.minutes;
    this.timeChange.emit(this.timeValue);
  }


}
