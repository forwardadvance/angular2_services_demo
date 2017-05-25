import { Component } from '@angular/core';
import { CatService } from './cat.service';

@Component({
    selector: 'app',
    template: `
      <catList></catList>
      <catList></catList>
      <catList></catList>
      <catList></catList>
    `,
    providers: [CatService]
})
export class AppComponent {
  private name: string
  miowCount:number = 0;
  constructor() {
    this.name = 'Mikey the Cat'
  }
}
