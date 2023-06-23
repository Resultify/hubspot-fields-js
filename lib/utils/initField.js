import * as TYPES from '../types/types.js' // eslint-disable-line
import { EditorOptions, DisplayConditions, RepeaterOptions, RepeaterOptionsDefault } from './common-properties.js'

/**
 * @ignore
 * @typedef {TYPES.EDITOR_OPTIONS} EDITOR_OPTIONS {@link EDITOR_OPTIONS}
 * @typedef {TYPES.DISPLAY_CONDITIONS} DISPLAY_CONDITIONS {@link DISPLAY_CONDITIONS}
 * @typedef {TYPES.REPEATER_OPTIONS} REPEATER_OPTIONS {@link REPEATER_OPTIONS}
 * @typedef {TYPES.REPEATER_OPTIONS_DEFAULT} REPEATER_OPTIONS_DEFAULT {@link REPEATER_OPTIONS_DEFAULT}
 * @typedef {TYPES.COMMON_FIELDS} COMMON_FIELDS {@link COMMON_FIELDS}
 */

/**
 * @ignore
 * @summary Extra General module content fields structure
 * @description This is an Extra structure to help developers distinguish between the different types of fields that can be used in a module. This is not a real HubSpot structure and should not be used in any way other than with `hubspot-fields-js`.
 * @typedef {Object} EXTRA_FIELDS_MAP
 * @property {EDITOR_OPTIONS} [editor_options] Editor options
 * @property {DISPLAY_CONDITIONS} [display_conditions] Display conditions, keep `visibility` object empty to just enable a feature - `display_conditions: {visibility: {}}`
 * @property {REPEATER_OPTIONS} [repeater_options] Repeater options, keep `occurrence` object empty to just enable a feature - `repeater_options: {occurrence: {}}`
 * @property {REPEATER_OPTIONS_DEFAULT} [repeater_options_default] Repeater options with more than `0` repeated fields and `default` values for each field
 */

/**
 * Initialize a field with common properties
 * @ignore
 * @param {string} label
 * @param {string} name
 * @param {string} type
 * @param {EXTRA_FIELDS_MAP} [fields]
 * @returns {COMMON_FIELDS}
 */
function initField (label, name, type, fields) {
  /** @type {COMMON_FIELDS} */
  const requiredFields = {
    id: '',
    name,
    label,
    type
  }
  const editorOptions = new EditorOptions({ ...fields?.editor_options })
  const displayConditions = new DisplayConditions({ ...fields?.display_conditions })
  const repeaterOptions = new RepeaterOptions({ ...fields?.repeater_options })
  let repeaterOptionsDefault
  if (fields?.repeater_options_default) {
    repeaterOptionsDefault = new RepeaterOptionsDefault({ ...fields.repeater_options_default })
  }
  return {
    ...requiredFields,
    ...editorOptions,
    ...displayConditions,
    ...repeaterOptions,
    ...repeaterOptionsDefault
  }
}

export { initField }
