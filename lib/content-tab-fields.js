import * as T from './config/types.js' // eslint-disable-line
import { CommonFields, CommonContentFields } from './common-properties.js'

// *************
// Only Content Tab fields
// *************

/**
 * ##### `only_content_tab`
 * #### Text fields provide content creators a simple text editing experience with no rich text functionality. Text fields initially show as a single line, but can actually expand to be textareas, supporting multiple lines.
 * ##### `only_content_tab`
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.text('name', 'label', {...options if needed})
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & TEXT_FIELDS | undefined} [fields]
 * @returns {Object}
 * @typedef {Object} TEXT_FIELDS
 * @property {string} [validation_regex] Regex pattern to validate the input
 * @property {boolean} [allow_new_line] `false` Allows new line
 * @property {boolean} [show_emoji_picker] `false` Shows emoji picker
 * @property {string} [placeholder] Placeholder text
 * @property {string} [default] Text string --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 */
function text (name, label, fields) {
  const labelAndName = { name, label }
  const commonFields = new CommonFields({ ...labelAndName, ...fields })
  commonFields.type = 'text'
  const commonContentFields = new CommonContentFields(fields)

  const specific = {}
  specific.allow_new_line = fields?.allow_new_line ?? false
  specific.show_emoji_picker = fields?.show_emoji_picker ?? false
  specific.validation_regex = fields?.validation_regex ?? ''
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    if ('placeholder' in fields) specific.placeholder = fields.placeholder
    if ('default' in fields) specific.default = fields.default
  }
  return { ...commonFields, ...commonContentFields, ...specific }
}

/**
 * ##### `only_content_tab`
 * #### Link fields provide an easy interface for content creators to provide links to URLs and email addresses.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.link('name', 'label', {...options if needed})
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & LINK_FIELDS} [fields]
 * @returns {Object}
 * @typedef {Object} LINK_FIELDS
 * @property {Array<'EXTERNAL'|'CONTENT'|'FILE'|'EMAIL_ADDRESS'|'BLOG'|'CALL_TO_ACTION'|'PHONE_NUMBER'|'WHATSAPP_NUMBER'>} [supported_types] `all` list of the types of links this field allows content creators to select
 * @property {boolean} [show_advanced_rel_options] `false` Whether content creators can see advanced rel options
 * @property {LINK_DEFAULT} [default] Default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @typedef {Object} LINK_DEFAULT
 * @property {Object} [url] Default URL object
 * @property {string|null} [url.content_id] Default URL content ID
 * @property {'EXTERNAL'|'CONTENT'|'FILE'|'EMAIL_ADDRESS'|'BLOG'|'CALL_TO_ACTION'|'PHONE_NUMBER'|'WHATSAPP_NUMBER'} [url.type] Default URL type
 * @property {string} [url.href] Default URL href
 * @property {boolean} [open_in_new_tab] Default open_in_new_tab value
 * @property {boolean} [no_follow] Default no_follow value
 * @property {boolean} [sponsored] Default sponsored value
 * @property {boolean} [user_generated_content] Default user_generated_content value
 */
function link (name, label, fields) {
  const labelAndName = { name, label }
  const commonFields = new CommonFields({ ...labelAndName, ...fields })
  commonFields.type = 'link'
  const commonContentFields = new CommonContentFields(fields)

  const specific = {}
  specific.show_advanced_rel_options = fields?.show_advanced_rel_options ?? false
  specific.supported_types = fields?.supported_types ?? ['EXTERNAL', 'CONTENT', 'FILE', 'EMAIL_ADDRESS', 'BLOG', 'CALL_TO_ACTION', 'PHONE_NUMBER', 'WHATSAPP_NUMBER']
  /**
   * @type {LINK_DEFAULT}
   */
  const defaultObj = {
    url: {
      content_id: null,
      type: 'EXTERNAL',
      href: ''
    },
    open_in_new_tab: false,
    no_follow: false
  }
  specific.default = { ...defaultObj, ...fields?.default }
  specific.default.url = { ...defaultObj.url, ...fields?.default?.url }
  return { ...commonFields, ...commonContentFields, ...specific }
}

/**
 * ##### `only_content_tab`
 * #### Rich Text fields provide content creators with a WYSIWYG text editor experience.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.richtext('name', 'label', {...options if needed})
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & RICHTEXT_FIELDS} [fields]
 * @returns {Object}
 * @typedef {Object} RICHTEXT_FIELDS
 * @property {Array<string>} [enabled_features] An array of items that allows you to configure the Rich Text Editor Toolbar and what options are available for content editors.
 * @property {string} [default] String of content to be displayed supports HTML --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 */
function richtext (name, label, fields) {
  const labelAndName = { name, label }
  const commonFields = new CommonFields({ ...labelAndName, ...fields })
  commonFields.type = 'richtext'
  const commonContentFields = new CommonContentFields(fields)

  const specific = {}
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    if ('enabled_features' in fields) specific.enabled_features = fields.enabled_features
    if ('default' in fields) specific.default = fields.default
  }
  return { ...commonFields, ...commonContentFields, ...specific }
}

/**
 * ##### `only_content_tab`
 * #### URL fields provide a similar experience to link fields. Providing a UI for content creators to add links. URL fields, however, do not show a UI for open in a new window, nor tell search engines not to follow. Use this field when you as a developer want to dictate the values for that.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.url('name', 'label', {...options if needed})
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & URL_FIELDS} [fields]
 * @returns {Object}
 * @typedef {Object} URL_FIELDS
 * @property {Array<'EXTERNAL'|'CONTENT'|'FILE'|'EMAIL_ADDRESS'|'BLOG'|'CALL_TO_ACTION'|'PHONE_NUMBER'|'WHATSAPP_NUMBER'>} [supported_types] `all` list of the types of links this field allows content creators to select.
 * @property {Object} [default] Default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @property {string} [default.content_id] Default content id
 * @property {'EXTERNAL'|'CONTENT'|'FILE'|'EMAIL_ADDRESS'|'BLOG'|'CALL_TO_ACTION'|'PHONE_NUMBER'|'WHATSAPP_NUMBER'} default.type Default URL type
 * @property {string} [default.href] Default href
 */
function url (name, label, fields) {
  const labelAndName = { name, label }
  const commonFields = new CommonFields({ ...labelAndName, ...fields })
  commonFields.type = 'url'
  const commonContentFields = new CommonContentFields(fields)

  const specific = {}
  specific.supported_types = fields?.supported_types ?? ['EXTERNAL', 'CONTENT', 'FILE', 'EMAIL_ADDRESS', 'BLOG', 'CALL_TO_ACTION', 'PHONE_NUMBER', 'WHATSAPP_NUMBER']
  const defaultObj = {
    content_id: null,
    href: '',
    type: 'EXTERNAL'
  }
  specific.default = { ...defaultObj, ...fields?.default }
  return { ...commonFields, ...commonContentFields, ...specific }
}

export { text, link, richtext, url }
