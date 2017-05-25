import {LocationModel} from '../location.model'
import {cell} from './cell'
import {exit} from './exit'

var loc = new LocationModel();

loc.name = "A gloomy corridor"
loc.description = "Smoke swirls around your feet as you make your way down a twisting corridor."
loc.south = cell
loc.north = exit

export var corridor = loc