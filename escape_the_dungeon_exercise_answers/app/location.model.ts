export class LocationModel {
  name:string = ""
  description:string = ""
  items:Array<any> = []
  north:LocationModel
  south:LocationModel
  east:LocationModel
  west:LocationModel

  removeItem(item:any) {
    this.items.splice(this.items.indexOf(item), 1)
  }
  placeItem(item:any) {
    this.items.push(item)
  }
}
