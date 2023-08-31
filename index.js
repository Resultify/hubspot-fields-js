import { init, writeJson } from './lib/init.js'
import { group, styleGroup } from './lib/group.js'
import {
  alignment,
  spacing,
  gradient,
  backgroundimage,
  border,
  textalignment
} from './lib/style-tab-fields.js'
import {
  boolean,
  choice,
  number,
  color,
  icon,
  image,
  font
} from './lib/fields.js'
import {
  text,
  link,
  richtext,
  url,
  video,
  embed
} from './lib/content-tab-fields.js'

/**
 * #### Module fields entry point
 * @ignore
 * @constant
 */
const moduleFields = {
  text,
  link,
  richtext,
  url,
  boolean,
  choice,
  number,
  color,
  icon,
  image,
  font,
  alignment,
  spacing,
  gradient,
  backgroundimage,
  border,
  textalignment,
  video,
  embed
}
/**
 * #### Theme fields entry point
 * @ignore
 * @constant
 */
const themeFields = {
  boolean,
  choice,
  number,
  color,
  image,
  font,
  spacing,
  border
}

export { moduleFields, themeFields, group, styleGroup, init, writeJson }
