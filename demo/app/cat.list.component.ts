import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CatService } from './cat.service';

@Component({
    selector: 'catList',
    template: `
    <ul>
      <li *ngFor="let cat of cats">
        {{cat.name}}
      </li>
    </ul>
    `,
    providers: [ CatService ]
})
export class CatListComponent {
  cats:Array<any>
  // constructor() {
  //   this.cats = [
  //     { name: "Danger Moog!!" },
  //     { name: "Pippa T. Floof" },
  //     { name: "Sniff Weasel" }
  //   ]
  // }

  constructor(catService:CatService) {
    this.cats = catService.get();
  }
}
