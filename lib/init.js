import * as T from './config/types.js' // eslint-disable-line
import fsPromises from 'fs/promises'

/**
 * @ignore
 * @typedef {T.REQUIRED_GROUP_FIELDS} REQUIRED_GROUP_FIELDS {@link REQUIRED_GROUP_FIELDS}
 * @typedef {T.REQUIRED_FIELDS} REQUIRED_FIELDS {@link REQUIRED_FIELDS}
 */

/**
 * @summary Add a real id to fields
 * @private
 * @param {Array<REQUIRED_GROUP_FIELDS | REQUIRED_FIELDS>} array array of objects
 * @param {string} [prefix] prefix
 * @returns {Array<Object>} portal name|names
 */
function addIdToObjects (array, prefix = '') {
  array.forEach(obj => {
    const id = prefix ? `${prefix}.${obj.name}` : obj.name
    obj.id = id
    if ('children' in obj && Array.isArray(obj.children)) {
      addIdToObjects(obj.children, id)
    }
  })
  return array
}

/**
 * #### Init the fields process
 * Combine all the fields and groups into one array, add an id and write it to a file fields.json
 * @param {Array<any>} childrens
 * @returns undefined
 * @async
 * @example
 *  initModule(
 *    styleGroup(
 *      fi.alignment('Alignment', 'alignment')
 *    ),
 *    group('Group', 'group', {},
 *     fi.text('Text', 'text')
 *    ),
 *    fi.link('Link', 'link')
 *  )
 */
async function initModule (...childrens) {
  const jsonPath = `${process.argv[1].slice(0, -3)}.json`
  const childrensWithId = addIdToObjects(childrens)
  await fsPromises.writeFile(jsonPath, JSON.stringify(childrensWithId, null, 2), { encoding: 'utf8' })
}

export { initModule }
