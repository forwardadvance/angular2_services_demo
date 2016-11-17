import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
      <catList></catList>
    `
})
export class AppComponent {
  private name: string
  miowCount:number = 0;
  constructor() {
    this.name = 'Mikey the Cat'
  }
}
