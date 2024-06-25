import { init } from './lib/init.js'
import { group, styleGroup } from './lib/group.js'
import * as styleTabFields from './lib/style-tab-fields.js'
import * as fields from './lib/fields.js'
import * as contentTabFields from './lib/content-tab-fields.js'

/**
 * #### Module fields entry point
 * @ignore
 * @constant
 */
const moduleFields = {
  ...contentTabFields,
  ...styleTabFields,
  ...fields
}

/**
 * #### Theme fields entry point
 * @ignore
 * @constant
*/
const themeFields = {
  ...fields,
  ...styleTabFields.spacing,
  ...styleTabFields.border
}

export { moduleFields, themeFields, group, styleGroup, init }
