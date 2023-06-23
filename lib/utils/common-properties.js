import * as TYPES from '../types/types.js' // eslint-disable-line

/**
 * @ignore
 * @typedef {TYPES.EDITOR_OPTIONS} EDITOR_OPTIONS {@link EDITOR_OPTIONS}
 * @typedef {TYPES.DISPLAY_CONDITIONS} DISPLAY_CONDITIONS {@link DISPLAY_CONDITIONS}
 * @typedef {TYPES.REPEATER_OPTIONS} REPEATER_OPTIONS {@link REPEATER_OPTIONS}
 * @typedef {TYPES.REPEATER_OPTIONS_DEFAULT} REPEATER_OPTIONS_DEFAULT {@link REPEATER_OPTIONS_DEFAULT}
 */

// *************
// HubSpot common field properties. Properties used by all fields
// *************

/**
 * #### Editor options
 * @ignore
 * @param {EDITOR_OPTIONS} fields
 * @returns {EDITOR_OPTIONS}
 */
function EditorOptions (fields) {
  this.display_width = fields.display_width ?? null
  this.required = fields.required ?? false
  this.locked = fields.locked ?? false
  if ('help_text' in fields) {
    this.help_text = fields.help_text
  }
  if ('inline_help_text' in fields) {
    this.inline_help_text = fields.inline_help_text
  }
  return this
}

/**
 * #### Display conditions
 * @ignore
 * @param {DISPLAY_CONDITIONS} fields
 * @returns {DISPLAY_CONDITIONS}
 */
function DisplayConditions (fields) {
  // visibility
  if ('visibility' in fields) {
    this.visibility = fields.visibility ?? {}
    this.visibility.controlling_field_path = fields.visibility?.controlling_field_path ?? null
    this.visibility.controlling_value_regex = fields.visibility?.controlling_value_regex ?? null
    this.visibility.operator = fields.visibility?.operator ?? 'EMPTY'
    this.visibility.property = fields.visibility?.property ?? null
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
 * #### Repeater options
 * @ignore
 * @param {REPEATER_OPTIONS} fields
 * @returns {REPEATER_OPTIONS}
 */
function RepeaterOptions (fields) {
  if ('occurrence' in fields) {
    this.occurrence = fields.occurrence ?? {}
    this.occurrence.min = fields.occurrence?.min ?? null
    this.occurrence.max = fields.occurrence?.max ?? null
  }
  return this
}

/**
 * #### Repeater options with default
 * @ignore
 * @param {REPEATER_OPTIONS_DEFAULT} fields
 * @returns {REPEATER_OPTIONS_DEFAULT}
 */
function RepeaterOptionsDefault (fields) {
  this.occurrence = fields.occurrence
  this.occurrence.min = fields.occurrence?.min ?? null
  this.occurrence.max = fields.occurrence?.max ?? null
  this.occurrence.default = fields.occurrence?.default ?? null
  this.default = fields.default
  return this
}

export { EditorOptions, DisplayConditions, RepeaterOptions, RepeaterOptionsDefault }
