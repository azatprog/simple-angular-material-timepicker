import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timepicker-tester';
  time = '13:00';
  console() {
    console.log(this.time);
  }
}
