import * as T from './config/types.js' // eslint-disable-line
import { initField } from './utils/initField.js'

// *************
// Only Content Tab fields
// *************

/**
 * ##### `only_content_tab`
 * #### Text fields provide content creators a simple text editing experience with no rich text functionality. Text fields initially show as a single line, but can actually expand to be textareas, supporting multiple lines.
 * ##### `only_content_tab`
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.text('label', 'name', {...options if needed})
 * @param {T.FIELD_LABEL} label
 * @param {T.FIELD_NAME} name
 * @param {TEXT_CONTENT_OPTIONS & T.FAKE_FIELDS_MAP} [fields]
 * @returns {T.BASE_FIELDS}
 * @typedef {Object} TEXT_CONTENT_OPTIONS
 * @property {string} [validation_regex] Regex pattern to validate the input
 * @property {boolean} [allow_new_line] `false` Allows new line
 * @property {boolean} [show_emoji_picker] `false` Shows emoji picker
 * @property {string} [placeholder] Placeholder text
 * @property {string} [default] Text string --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 */
function text (label, name, fields) {
  const contentOptions = {}
  contentOptions.allow_new_line = fields?.allow_new_line ?? false
  contentOptions.show_emoji_picker = fields?.show_emoji_picker ?? false
  contentOptions.validation_regex = fields?.validation_regex ?? ''
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    if ('placeholder' in fields) contentOptions.placeholder = fields.placeholder
    if ('default' in fields) contentOptions.default = fields.default
  }

  const otherOptions = initField(label, name, 'text', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * ##### `only_content_tab`
 * #### Link fields provide an easy interface for content creators to provide links to URLs and email addresses.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.link('label', 'name', {...options if needed})
 * @param {T.FIELD_LABEL} label
 * @param {T.FIELD_NAME} name
 * @param {LINK_CONTENT_OPTIONS & T.FAKE_FIELDS_MAP} [fields]
 * @returns {T.BASE_FIELDS}
 * @typedef {Object} LINK_CONTENT_OPTIONS
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
function link (label, name, fields) {
  const contentOptions = {}
  contentOptions.show_advanced_rel_options = fields?.show_advanced_rel_options ?? false
  contentOptions.supported_types = fields?.supported_types ?? ['EXTERNAL', 'CONTENT', 'FILE', 'EMAIL_ADDRESS', 'BLOG', 'CALL_TO_ACTION', 'PHONE_NUMBER', 'WHATSAPP_NUMBER']
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
  contentOptions.default = { ...defaultObj, ...fields?.default }
  contentOptions.default.url = { ...defaultObj.url, ...fields?.default?.url }

  const otherOptions = initField(label, name, 'link', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * ##### `only_content_tab`
 * #### Rich Text fields provide content creators with a WYSIWYG text editor experience.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.richtext('label', 'name', {...options if needed})
 * @param {T.FIELD_LABEL} label
 * @param {T.FIELD_NAME} name
 * @param {RICHTEXT_CONTENT_OPTIONS & T.FAKE_FIELDS_MAP} [fields]
 * @returns {T.BASE_FIELDS}
 * @typedef {Object} RICHTEXT_CONTENT_OPTIONS
 * @property {Array<string>} [enabled_features] An array of items that allows you to configure the Rich Text Editor Toolbar and what options are available for content editors.
 * @property {string} [default] String of content to be displayed supports HTML --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 */
function richtext (label, name, fields) {
  const contentOptions = {}
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    if ('enabled_features' in fields) contentOptions.enabled_features = fields.enabled_features
    if ('default' in fields) contentOptions.default = fields.default
  }

  const otherOptions = initField(label, name, 'richtext', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * ##### `only_content_tab`
 * #### URL fields provide a similar experience to link fields. Providing a UI for content creators to add links. URL fields, however, do not show a UI for open in a new window, nor tell search engines not to follow. Use this field when you as a developer want to dictate the values for that.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.url('label', 'name', {...options if needed})
 * @param {T.FIELD_LABEL} label
 * @param {T.FIELD_NAME} name
 * @param {URL_CONTENT_OPTIONS & T.FAKE_FIELDS_MAP} [fields]
 * @returns {T.BASE_FIELDS}
 * @typedef {Object} URL_CONTENT_OPTIONS
 * @property {Array<'EXTERNAL'|'CONTENT'|'FILE'|'EMAIL_ADDRESS'|'BLOG'|'CALL_TO_ACTION'|'PHONE_NUMBER'|'WHATSAPP_NUMBER'>} [supported_types] `all` list of the types of links this field allows content creators to select.
 * @property {Object} [default] Default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @property {string} [default.content_id] Default content id
 * @property {'EXTERNAL'|'CONTENT'|'FILE'|'EMAIL_ADDRESS'|'BLOG'|'CALL_TO_ACTION'|'PHONE_NUMBER'|'WHATSAPP_NUMBER'} default.type Default URL type
 * @property {string} [default.href] Default href
 */
function url (label, name, fields) {
  const contentOptions = {}
  contentOptions.supported_types = fields?.supported_types ?? ['EXTERNAL', 'CONTENT', 'FILE', 'EMAIL_ADDRESS', 'BLOG', 'CALL_TO_ACTION', 'PHONE_NUMBER', 'WHATSAPP_NUMBER']
  const defaultObj = {
    content_id: null,
    href: '',
    type: 'EXTERNAL'
  }
  contentOptions.default = { ...defaultObj, ...fields?.default }

  const otherOptions = initField(label, name, 'url', fields)
  return { ...contentOptions, ...otherOptions }
}

export { text, link, richtext, url }
