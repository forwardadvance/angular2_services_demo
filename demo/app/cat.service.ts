import {Injectable} from '@angular/core';

@Injectable()
export class CatService {
  cats:Array<any>
  constructor() {
    this.cats = [
      { name: "Danger Moog: " + Math.random() },
      { name: "Pippa T. Floof" },
      { name: "Sniff Weasel" }
    ]
  }
  get() {
      return this.cats;
  }
}
