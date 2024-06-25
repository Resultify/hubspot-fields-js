/// <reference path="./types/types.js" />
/**
 * #### Create a group with other fields inside.
 * @param {string} label Group label
 * @param {string} name Group name (HubL variable name)
 * @param {BASE_FIELDS|GROUP_FIELD} fields Group settings
 * @param {CHILDRENS} childrens Group children fields
 * @returns {COMMON_FIELDS}
 */
function group (label, name, fields, ...childrens) {
  /** @type {Array<COMMON_FIELDS>} */
  const children = []
  childrens.forEach(element => {
    if (Array.isArray(element)) {
      children.push(...element.flat(3))
    } else {
      children.push(element)
    }
  })
  return {
    label,
    name,
    ...{ type: 'group' },
    ...fields,
    children
  }
}

/**
 * #### Create a group with other fields inside.
 * @param {CHILDRENS} childrens Group children fields
 * @returns {COMMON_FIELDS}
 */
function styleGroup (...childrens) {
  /** @type {COMMON_FIELDS} */
  const baseFields = {
    name: 'style',
    label: 'Style',
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
  return {
    ...baseFields
  }
}

export { group, styleGroup }
