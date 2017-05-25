import {LocationModel} from '../location.model'
import {corridor} from './corridor'

var loc = new LocationModel();


loc.name = "Mountainside"
loc.description = "Well done, you have escaped!"
loc.south = corridor

export var exit = loc;