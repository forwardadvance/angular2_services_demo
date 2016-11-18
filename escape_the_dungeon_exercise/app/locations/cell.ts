import {LocationModel} from '../location.model'
import {corridor} from './corridor'

export var cell = new LocationModel();

cell.name = "A Dark Cell"
cell.description = "A dark and dingy dungeon, littered with bones. A glimmer of light is visible to the north."
cell.north = corridor
