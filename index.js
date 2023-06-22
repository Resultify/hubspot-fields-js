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
  url
} from './lib/content-tab-fields.js'

import * as pImage from './partials/image.js'
import * as pIcon from './partials/icon.js'
import * as pText from './partials/text.js'
import * as pHeading from './partials/heading.js'
import * as pSubheading from './partials/subheading.js'
import * as pRichtext from './partials/richtext.js'
import * as pLink from './partials/link.js'
import * as pSecondaryLink from './partials/secondary-link.js'
import * as pButton from './partials/button.js'
import * as pSecondaryButton from './partials/secondary-button.js'

/**
 * #### Partials entry point
 * @ignore
 * @constant
 */
const partials = {
  image: pImage,
  icon: pIcon,
  heading: pText,
  subheading: pHeading,
  text: pSubheading,
  richtext: pRichtext,
  link: pLink,
  secondaryLink: pSecondaryLink,
  button: pButton,
  secondaryButto: pSecondaryButton
}

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
  textalignment
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

export { moduleFields, themeFields, partials, group, styleGroup, init, writeJson }
