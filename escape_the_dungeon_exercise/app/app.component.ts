import {Component} from '@angular/core';

import {HeroModel} from './hero.model';
import {InventoryModel} from './inventory.model';
import {LocationModel} from './location.model';

import {cell} from './locations/cell';

@Component({
    selector: "app",
    template:
    `
    <div>
      <a class="button" (click)="editMode = !editMode">
        <span *ngIf="!editMode">Edit</span>
        <span *ngIf="editMode">Done</span>
      </a>
    </div>
    <div *ngIf="!editMode">
      <div class="row">
        <div >
          <hero [hero]="hero"></hero>
        </div>
      </div>
      <div class="row">
        <div >
          <inventory [inventory]="inventory"></inventory>
        </div>
      </div>
      <div class="row">
        <location [location]="locationService.currentLocation" (pickUpItem)="handlePickUpItem($event)"></location>
      </div>
      <div class="row">

      </div>
    </div>


    <div class="row" *ngIf="editMode">
      <heroEditor [hero]="hero" (done)="editMode=false"></heroEditor>
    </div>
    `
  })
  export class AppComponent {
    editMode:boolean = false;
    hero:HeroModel = new HeroModel();
    inventory:InventoryModel = new InventoryModel();

    constructor() {

    }

    handlePickUpItem(item:any) {
      console.log('item picked up', item);
      this.inventory.addItem(item);

    }
  }
