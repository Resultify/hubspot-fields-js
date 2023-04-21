import * as T from '../config/types.js' // eslint-disable-line
import { EditorOptions, DisplayConditions, RepeaterOptions, RepeaterOptionsDefault } from '../common-properties.js'

/**
 * Initialize a field with common properties
 * @param {T.FIELD_LABEL} label
 * @param {T.FIELD_NAME} name
 * @param {string} type
 * @param {T.FAKE_FIELDS_MAP & T.FAKE_STYLE_FIELDS_MAP} [fields]
 * @returns {T.BASE_FIELDS}
 */
function initField (label, name, type, fields) {
  /** @type {T.REQUIRED_FIELDS} */
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
