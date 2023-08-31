import * as TYPES from './types/types.js' // eslint-disable-line
import fsPromises from 'fs/promises'
import path from 'node:path'

/**
 * @ignore
 * @typedef {TYPES.COMMON_FIELDS} COMMON_FIELDS {@link COMMON_FIELDS}
 * @typedef {TYPES.NESTED_COMMON_FIELDS} NESTED_COMMON_FIELDS {@link NESTED_COMMON_FIELDS}
 */

/**
 * @summary Add a real id to fields
 * @private
 * @param {Array<COMMON_FIELDS>} array array of objects
 * @param {string} [prefix] prefix
 * @returns {Array<COMMON_FIELDS>} portal name|names
 */
// function addIdToObjects (array, prefix = '') {
//   array.forEach(obj => {
//     const id = prefix ? `${prefix}.${obj.name}` : obj.name
//     obj.id = id
//     if ('children' in obj && Array.isArray(obj.children)) {
//       addIdToObjects(obj.children, id)
//     }
//   })
//   return array
// }

/**
 * #### Initialize and return an array of fields object from fields.js
 * Combine all the fields and groups objects into one array, and return it.
 * @param {Array<NESTED_COMMON_FIELDS>} fields
 * @returns {COMMON_FIELDS[]}
 * @example
 *  \/* eslint-disable no-unused-vars *\/
 *  import {
 *    group,
 *    styleGroup,
 *    initModule,
 *    moduleFields as fi
 *  } from '@resultify/hubspot-fields-js'
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
function init (...fields) {
  /** @type {COMMON_FIELDS[]} */
  const correctedFields = []
  fields.forEach(element => {
    if (Array.isArray(element)) {
      correctedFields.push(...element.flat(3))
    } else {
      correctedFields.push(element)
    }
  })
  // correctedFields = addIdToObjects(correctedFields)
  return correctedFields
}

/**
 * #### Write fields data from fields.js to a fields.json
 * @param {Array<COMMON_FIELDS>} data
 * @returns undefined
 * @async
 * @example
 *  \/* eslint-disable no-unused-vars *\/
 *  import {
 *    group,
 *    styleGroup,
 *    initModule,
 *    moduleFields as fi
 *  } from '@resultify/hubspot-fields-js'
 *
 *  writeJson(JSON_DATA)
 *
 *  // or
 *
 *  writeJson(init(
 *    group(
 *      fi.number('Number', 'number')
 *    ),
 *    fi.number('Number', 'number')
 *  ))
 */
async function writeJson (data) {
  const filePath = path.parse(process.argv[1])
  await fsPromises.writeFile(`${filePath.dir}/${filePath.name}.json`, JSON.stringify(data, null, 2), { encoding: 'utf8' })
}

export { init, writeJson }
