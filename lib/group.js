import * as T from './config/types.js' // eslint-disable-line
import { EditorOptions, DisplayConditions, RepeaterOptions, RepeaterOptionsDefault } from './common-properties.js'

// *************
// Group Fields
// *************

/**
 * #### Field groups. When fields are related to each other often it makes sense for them to be displayed visually grouped.
 * @example
 * group('Group', 'group', {group_options},
 *    fi.text('Text_label1', 'text__name1'),
 *    fi.text('Text_label2', 'text__name2'),
 *    group('Group2', 'group2', {group2_options},
 *        fi.text('Text_label3', 'text_name3')
 *    )
 * )
 * @param {T.FIELD_LABEL} label
 * @param {T.FIELD_NAME} name
 * @param {T.FAKE_FIELDS_MAP & GROUP_FIELDS} [fields]
 * @param {Array<T.BASE_GROUP_FIELDS | T.BASE_FIELDS>} childrens
 * @returns {T.BASE_GROUP_FIELDS & GROUP_FIELDS}
 * @typedef {Object} GROUP_FIELDS
 * @property {boolean} [expanded] `false` Field groups can be set to be expanded by default by setting the expanded boolean property to true
 */
function group (label, name, fields, ...childrens) {
  /** @type {T.REQUIRED_GROUP_FIELDS} */
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
      requiredFields.children.push(...element)
    } else {
      requiredFields.children.push(element)
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
 * @param {Array<any>} childrens
 * @returns {any}
 */
function styleGroup (...childrens) {
  /** @type {T.STYLE_GROUP_FIELDS} */
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
      baseFields.children.push(...element)
    } else {
      baseFields.children.push(element)
    }
  })
  return { ...baseFields }
}

export { group, styleGroup }
