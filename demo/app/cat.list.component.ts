// <ul>
//       <li *ngFor="let cat of cats">
//         {{cat.name}}
//       </li>
//     </ul>

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CatService } from './cat.service';

@Component({
    selector: 'catList',
    template: `
      <h1>Cats!!!</h1>
      <ul>
        <li *ngFor="let cat of cats">
          {{cat.name}}
        </li>
      </ul>
    `,
    // providers: [ CatService ]
})
export class CatListComponent {
  cats:Array<any>
  constructor(cats:CatService) {
    this.cats = cats.get()
  }

  // constructor() {
  //   // this.cats = catService.get();
  // }
}
