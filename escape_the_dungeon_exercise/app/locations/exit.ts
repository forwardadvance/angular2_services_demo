import {LocationModel} from '../location.model'
import {corridor} from './corridor'

export var exit = new LocationModel();

exit.name = "Mountainside"
exit.description = "Well done, you have escaped!"
exit.south = corridor
