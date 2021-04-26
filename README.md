# NgLongPress

A Library for handle long press on desktop.

## Installation

### Import the library


```typescript
import { NgLongPressModule } from 'ng-long-press'; 

@NgModule({
  declarations: [ AppComponent ],
  imports: [ NgLongPressModule ] 
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
```
After importing the NgLongPressModule bind the longPress event on the template like this.
```html
  <div longPressDuration="200" (longPress)="longPress()">
   LongPress
  </div>
```

By default longPress event will be fired on after 1000ms, but we can change this behaviour with longPressDuration input property

## API


| option | bind  |  type  |   default    | description  |
|:-------------------|:--------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| longPressDuration      | `Input()`  | `number`    | `1000` |  the minimum delay to fire  longPress event



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




