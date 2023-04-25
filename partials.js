import * as image from './partials/image.js'
import * as icon from './partials/icon.js'
import * as text from './partials/text.js'
import * as heading from './partials/heading.js'
import * as subheading from './partials/subheading.js'
import * as richtext from './partials/richtext.js'
import * as link from './partials/link.js'
import * as secondaryLink from './partials/secondary-link.js'
import * as button from './partials/button.js'
import * as secondaryButton from './partials/secondary-button.js'

const pa = {
  ...image,
  ...icon,
  ...heading,
  ...subheading,
  ...text,
  ...richtext,
  ...link,
  ...secondaryLink,
  ...button,
  ...secondaryButton
}

export { pa }
