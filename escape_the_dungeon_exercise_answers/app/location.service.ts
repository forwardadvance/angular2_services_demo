import {Injectable} from '@angular/core';

import {LocationModel} from './location.model'

@Injectable()
export class LocationService {
  currentLocation:LocationModel
  moveNorth() {
    if (this.currentLocation.north) {
      this.currentLocation = this.currentLocation.north
    }
  }
  moveSouth() {
    if (this.currentLocation.south) {
      this.currentLocation = this.currentLocation.south
    }
  }
  moveEast() {
    if (this.currentLocation.east) {
      this.currentLocation = this.currentLocation.east
    }
  }
  moveWest() {
    if (this.currentLocation.west) {
      this.currentLocation = this.currentLocation.west
    }
  }
}
