import * as TYPES from './types/types.js' // eslint-disable-line
import { EditorOptions, DisplayConditions, RepeaterOptions, RepeaterOptionsDefault } from './utils/common-properties.js'

/**
 * @ignore
 * @typedef {TYPES.EDITOR_OPTIONS} EDITOR_OPTIONS {@link EDITOR_OPTIONS}
 * @typedef {TYPES.DISPLAY_CONDITIONS} DISPLAY_CONDITIONS {@link DISPLAY_CONDITIONS}
 * @typedef {TYPES.REPEATER_OPTIONS} REPEATER_OPTIONS {@link REPEATER_OPTIONS}
 * @typedef {TYPES.REPEATER_OPTIONS_DEFAULT} REPEATER_OPTIONS_DEFAULT {@link REPEATER_OPTIONS_DEFAULT}
 * @typedef {TYPES.COMMON_FIELDS} COMMON_FIELDS {@link COMMON_FIELDS}
 * @typedef {TYPES.NESTED_COMMON_FIELDS} NESTED_COMMON_FIELDS {@link NESTED_COMMON_FIELDS}
 */

// *************
// Group Fields
// *************

/**
 * #### Fields group. When fields are related to each other often it makes sense for them to be displayed visually grouped.
 * @example
 * group('Group', 'group', {group_options},
 *    fi.text('Text_label1', 'text__name1'),
 *    fi.text('Text_label2', 'text__name2'),
 *    group('Group2', 'group2', {group2_options},
 *        fi.text('Text_label3', 'text_name3')
 *    )
 * )
 * @param {string} label The text the content creator sees describing the group. May contain spaces.
 * @param {string} name Group field/HubL variable name, which you'll reference when incorporating the group field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {boolean} [fields.expanded=false] `false` Field groups can be set to be expanded by default by setting the expanded boolean property to true
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @param {Array<NESTED_COMMON_FIELDS>} childrens
 * @returns {COMMON_FIELDS}
 */
function group (label, name, fields, ...childrens) {
  /** @type {COMMON_FIELDS} */
  const requiredFields = { type: 'group', id: '', name, label, children: [] }
  const editorOptions = new EditorOptions({ ...fields?.editor_options })
  const displayConditions = new DisplayConditions({ ...fields?.display_conditions })
  const repeaterOptions = new RepeaterOptions({ ...fields?.repeater_options })
  let repeaterOptionsDefault
  if (fields?.repeater_options_default) {
    repeaterOptionsDefault = new RepeaterOptionsDefault({ ...fields.repeater_options_default })
  }
  const groupOptions = {}
  groupOptions.expanded = fields?.expanded ?? false
  childrens.forEach(element => {
    if (Array.isArray(element)) {
      requiredFields.children?.push(...element.flat(3))
    } else {
      requiredFields.children?.push(element)
    }
  })

  return {
    ...requiredFields,
    ...groupOptions,
    ...editorOptions,
    ...displayConditions,
    ...repeaterOptions,
    ...repeaterOptionsDefault
  }
}

/**
 * #### Main high-level Style group wrapper. Use only once to wrap all style fields.
 * @example
 * styleGroup(
 *    fi.alignment('alignment', 'Alignment')
 * )
 * @param {Array<NESTED_COMMON_FIELDS>} childrens
 * @returns {COMMON_FIELDS}
 */
function styleGroup (...childrens) {
  /** @type {COMMON_FIELDS} */
  const baseFields = {
    id: 'style',
    name: 'style',
    label: 'Style',
    locked: false,
    children: [],
    tab: 'STYLE',
    type: 'group'
  }
  childrens.forEach(element => {
    if (Array.isArray(element)) {
      baseFields.children?.push(...element.flat(3))
    } else {
      baseFields.children?.push(element)
    }
  })
  return { ...baseFields }
}

export { group, styleGroup }
