import fsPromises from 'fs/promises'
import path from 'node:path'

/**
 * #### Initialize and write an array of fields object from fields.js to a fields.json file
 * Combine all the fields and groups objects into one array and write it to fields.json file
 * @param {CHILDRENS} fields
 * @async
 * @returns undefined
 * @example
 *  import { init, group, styleGroup, moduleFields as fi } from '@resultify/hubspot-fields-js'
 *
 *  init(
 *    styleGroup(
 *      fi.alignment('Alignment', 'alignment')
 *    ),
 *    group('Group', 'group', {},
 *     fi.text('Text', 'text')
 *    ),
 *    fi.link('Link', 'link')
 *  )
 */
async function init (...fields) {
  /** @type {Array<COMMON_FIELDS>} */
  const correctedFields = []
  fields.forEach(element => {
    if (Array.isArray(element)) {
      correctedFields.push(...element.flat(3))
    } else {
      correctedFields.push(element)
    }
  })
  const filePath = path.parse(process.argv[1])
  await fsPromises.writeFile(`${filePath.dir}/${filePath.name}.json`, JSON.stringify(correctedFields, null, 2), { encoding: 'utf8' })
}

export { init }
