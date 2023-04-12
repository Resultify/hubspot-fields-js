import * as contentTabFields from './lib/content-tab-fields.js'
import * as styleTabFields from './lib/style-tab-fields.js'
import * as fields from './lib/fields.js'

/**
 * `@hubspot-fields-js`
 * ### Module fields entry point
 */
const fi = { ...contentTabFields, ...styleTabFields, ...fields }

export { fi }
