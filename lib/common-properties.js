import * as T from './config/types.js' // eslint-disable-line

// *************
// HubSpot common field properties. Properties used by all fields
// *************

/**
 * @constructor
 * @summary HubSpot common properties
 * @description Properties used by all fields (content tab fields, style fields, group fields)
 * @param {T.COMMON_FIELDS} fields
 * @returns {Object}
 */
function CommonFields (fields) {
  this.id = ''
  this.name = fields.name
  this.display_width = fields.display_width ?? null
  this.label = fields.label
  this.required = fields.required ?? false
  this.locked = fields.locked ?? false
  this.type = fields.type
  if ('inline_help_text' in fields) {
    this.inline_help_text = fields.inline_help_text
  }
  if ('help_text' in fields) {
    this.help_text = fields.help_text
  }

  // visibility rules
  if ('visibility_rules' in fields) {
    this.visibility_rules = fields.visibility_rules
  }
  // visibility
  if ('visibility' in fields) {
    this.visibility = fields.visibility ?? {}
    this.visibility.controlling_field = fields.visibility?.controlling_field ?? ''
    this.visibility.controlling_value_regex = fields.visibility?.controlling_value_regex ?? ''
    this.visibility.operator = fields.visibility?.operator ?? 'EMPTY'
  }
  // advanced visibility
  if ('advanced_visibility' in fields) {
    this.visibility_rules = 'ADVANCED'
    this.advanced_visibility = fields.advanced_visibility ?? {}
    this.advanced_visibility.boolean_operator = fields.advanced_visibility?.boolean_operator ?? 'OR'
    this.advanced_visibility.criteria = fields.advanced_visibility?.criteria ?? []
  }
  return this
}

/**
 * @summary HubSpot common group properties
 * @description Properties used by all group fields on top of common fields
 * @param {T.COMMON_GROUP_FIELDS} [fields]
 * @returns {Object}
 */
function CommonGroupFields (fields) {
  this.expanded = fields?.expanded ?? false
  this.children = fields?.children ?? []
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    this.tab = fields?.tab
    if ('occurrence' in fields) {
      this.occurrence = fields.occurrence ?? {}
      this.occurrence.min = fields.occurrence?.min ?? null
      this.occurrence.max = fields.occurrence?.max ?? null
      this.occurrence.sorting_label_field = fields.occurrence?.sorting_label_field ?? ''
    }
  }
  return this
}

/**
 * @summary HubSpot common content-tab properties
 * @description Properties used by all fields in content tab on top of common fields
 * @param {T.COMMON_CONTENT_FIELDS} [fields]
 * @returns {Object}
 */
function CommonContentFields (fields) {
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    if ('occurrence' in fields) {
      this.occurrence = fields.occurrence ?? {}
      this.occurrence.min = fields.occurrence?.min ?? null
      this.occurrence.max = fields.occurrence?.max ?? null
      this.occurrence.sorting_label_field = fields.occurrence?.sorting_label_field ?? ''
    }
  }
  return this
}

export { CommonFields, CommonGroupFields, CommonContentFields }
