import * as button from './button.js'
import * as secondaryButton from './secondary-button.js'
import * as heading from './heading.js'
import * as subheading from './subheading.js'
import * as icon from './icon.js'
import * as image from './image.js'
import * as link from './link.js'
import * as secondaryLink from './secondary-link.js'
import * as richtext from './richtext.js'
import * as text from './text.js'

/**
 * #### Partials entry point
 * @ignore
 * @constant
 */
const pa = {
  ...image,
  ...icon,
  ...text,
  ...heading,
  ...subheading,
  ...richtext,
  ...link,
  ...secondaryLink,
  ...button,
  ...secondaryButton
}

export { pa }
