import * as T from './config/types.js' // eslint-disable-line
import fsPromises from 'fs/promises'

/**
 * @summary Add a real id to fields
 * @private
 * @param {Array<T.COMMON_FIELDS & T.COMMON_GROUP_FIELDS>} array - array of objects
 * @param {string} [prefix] - prefix
 * @returns {Array<T.COMMON_FIELDS & T.COMMON_GROUP_FIELDS>} portal name|names
 */
function addIdToObjects (array, prefix = '') {
  array.forEach(obj => {
    const id = prefix ? `${prefix}.${obj.name}` : obj.name
    obj.id = id
    if (obj.children) {
      addIdToObjects(obj.children, id)
    }
  })
  return array
}

/**
 * `@hubspot-fields-js`
 * #### Init the fields process
 * Combine all the fields and groups into one array, add a real id and write it to a file fields.json
 * @param {Array<T.COMMON_FIELDS & T.COMMON_GROUP_FIELDS>} childrens
 * @returns undefined
 * @example
 *  init(
 *    styleGroup(
 *      fi.alignment('alignment', 'Alignment')
 *    ),
 *    group('group', 'Group', {},
 *     fi.text('text', 'Text')
 *    ),
 *    fi.link('link', 'Link')
 *  )
 */
async function init (...childrens) {
  const jsonPath = `${process.argv[1].slice(0, -3)}.json`
  const childrensWithId = addIdToObjects(childrens)
  await fsPromises.writeFile(jsonPath, JSON.stringify(childrensWithId, null, 2), { encoding: 'utf8' })
}

export { init }
