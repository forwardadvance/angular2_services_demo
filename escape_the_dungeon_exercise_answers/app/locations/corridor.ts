import {LocationModel} from '../location.model'
import {cell} from './cell'
import {exit} from './exit'

export var corridor = new LocationModel();

corridor.name = "A gloomy corridor"
corridor.description = "Smoke swirls around your feet as you make your way down a twisting corridor."
corridor.south = cell
corridor.north = exit
