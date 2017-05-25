import {LocationModel} from '../location.model'
import {corridor} from './corridor'

var loc = new LocationModel();
loc.name = "A Dark Cell"
loc.description = "A dark and dingy dungeon, littered with bones. A glimmer of light is visible to the north."
loc.north = corridor


export var cell = loc