import * as T from './config/types.js' // eslint-disable-line
import { CommonFields, CommonGroupFields } from './common-properties.js'

// *************
// Group Fields
// *************

/**
 * @summary Group Field wrapper
 * @param {string} label
 * @param {string} name
 * @param {T.COMMON_FIELDS & T.COMMON_GROUP_FIELDS} [fields]
 * @param {Array<Object>} childrens
 * @returns {Object}
 */
function group (name, label, fields, ...childrens) {
  const labelAndName = { name, label }
  const commonFields = new CommonFields({ ...labelAndName, ...fields })
  commonFields.type = 'group'
  const commonGroupFields = new CommonGroupFields(fields)
  /**
   * @type {Array<any>}
   */
  const children = []
  const childrenWrp = { children }
  childrens.forEach(element => {
    childrenWrp.children.push(element)
  })
  return { ...commonFields, ...commonGroupFields, ...childrenWrp }
}

/**
 * @summary Main Style group wrapper
 * @param {Array<Object>} childrens
 * @returns {Object}
 */
function styleGroup (...childrens) {
  const labelAndName = { name: 'style', label: 'Style' }
  const commonFields = new CommonFields({ ...labelAndName })
  commonFields.type = 'group'
  const commonGroupFields = new CommonGroupFields({ tab: 'STYLE' })
  /**
   * @type {Array<Object>}
   */
  const children = []
  const childrenWrp = { children }
  childrens.forEach(element => {
    childrenWrp.children.push(element)
  })
  return { ...commonFields, ...commonGroupFields, ...childrenWrp }
}

export { group, styleGroup }
