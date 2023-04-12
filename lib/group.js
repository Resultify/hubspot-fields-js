import * as T from './config/types.js' // eslint-disable-line
import { CommonFields, CommonGroupFields } from './common-properties.js'

// *************
// Group Fields
// *************

/**
 * #### Field groups. When fields are related to each other often it makes sense for them to be displayed visually grouped.
 * @example
 * group('group', 'Group', {group_options},
 *    text('text_name1', 'Text_label1'),
 *    text('text_name2', 'Text_label2'),
 *    group('group2', 'Group2', {group2_options},
 *        text('text_name3', 'Text_label3')
 *    )
 * )
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & T.COMMON_GROUP_FIELDS} [fields]
 * @param {Array<Object>} childrens
 * @returns {Object}
 */
function group (name, label, fields, ...childrens) {
  const labelAndName = { name, label }
  const commonFields = new CommonFields({ ...labelAndName, ...fields })
  commonFields.type = 'group'
  const commonGroupFields = new CommonGroupFields(fields)
  childrens.forEach(element => {
    if (Array.isArray(element)) {
      commonGroupFields.children.push(...element)
    } else {
      commonGroupFields.children.push(element)
    }
  })
  return { ...commonFields, ...commonGroupFields }
}

/**
 * #### Main high-level Style group wrapper. Use only once.
 * @example
 * styleGroup(
 *    fi.alignment('alignment', 'Alignment')
 * )
 * @param {Array<Object>} childrens
 * @returns {Object}
 */
function styleGroup (...childrens) {
  const labelAndName = { name: 'style', label: 'Style' }
  const commonFields = new CommonFields({ ...labelAndName })
  commonFields.type = 'group'
  const commonGroupFields = new CommonGroupFields({ tab: 'STYLE' })
  childrens.forEach(element => {
    if (Array.isArray(element)) {
      commonGroupFields.children.push(...element)
    } else {
      commonGroupFields.children.push(element)
    }
  })
  return { ...commonFields, ...commonGroupFields }
}

export { group, styleGroup }
