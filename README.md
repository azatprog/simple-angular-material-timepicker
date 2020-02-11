# Timepicker

Simple lightwieght timepicker for Angular Material 7.2+

## Prerequisites
1. Angular 7.2+
2. Angular Material 7.3+

## Demo
https://azatprog.dev/demos/timepicker

## npm
https://www.npmjs.com/package/ngmat-timepicker

## Getting started

Install timepicker through npm:
```angular2html
npm install --save ngmat-timepicker
```
Next import the timepicker module into your app's module:
```typescript
import { NgModule } from '@angular/core';
import { TimepickerModule } from 'ngmat-timepicker';

@NgModule({
  imports: [TimepickerModule]
})
export class AppModule {}
```
Finally connect the timepicker to an input via a template property:
```angular2html
<ngmat-timepicker [(time)]="myTime"></ngmat-timepicker>
```
In your *component.ts*
```typescript
export class AppComponent {
    myTime='14:30';
}
```

## License

MIT