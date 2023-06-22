import * as contentTabFields from './lib/content-tab-fields.js'
import * as styleTabFields from './lib/style-tab-fields.js'
import * as fields from './lib/fields.js'

/**
 * #### Module fields entry point
 * @constant
 * @example
 * import { initModule } from '@resultify/hubspot-fields-js/lib/init.js'
 * import { fi } from '@resultify/hubspot-fields-js/fields.js'
 * import { group, styleGroup } from '@resultify/hubspot-fields-js/lib/group.js'
 * initModule(
 *   styleGroup(
 *     fi.alignment('Alignment', 'alignment')
 *   ),
 *   fi.link('Link', 'link')
 *   fi.text('Text', 'text')
 *   fi.number('Number', 'number')
 * )
 */
const fi = { ...contentTabFields, ...styleTabFields, ...fields }

export { fi }
