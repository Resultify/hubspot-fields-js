import * as TYPES from './types/types.js' // eslint-disable-line
import { initField } from './utils/initField.js'

/**
 * @ignore
 * @typedef {TYPES.EDITOR_OPTIONS} EDITOR_OPTIONS {@link EDITOR_OPTIONS}
 * @typedef {TYPES.DISPLAY_CONDITIONS} DISPLAY_CONDITIONS {@link DISPLAY_CONDITIONS}
 * @typedef {TYPES.REPEATER_OPTIONS} REPEATER_OPTIONS {@link REPEATER_OPTIONS}
 * @typedef {TYPES.REPEATER_OPTIONS_DEFAULT} REPEATER_OPTIONS_DEFAULT {@link REPEATER_OPTIONS_DEFAULT}
 * @typedef {TYPES.COMMON_FIELDS} COMMON_FIELDS {@link COMMON_FIELDS}
 */

// *************
// Only Content Tab fields
// *************

/**
 * #### Text fields provide content creators a simple text editing experience with no rich text functionality. Text fields initially show as a single line, but can actually expand to be textareas, supporting multiple lines.
 * `only_content_tab`
 *
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.text('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {string} [fields.validation_regex] Regex pattern to validate the input
 * @param {boolean} [fields.allow_new_line=false] `false` Allows new line
 * @param {boolean} [fields.show_emoji_picker] `false` Shows emoji picker
 * @param {string} [fields.placeholder] Placeholder text
 * @param {string} [fields.default] Text string --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @returns {COMMON_FIELDS}
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
 * @typedef {Object} LINK_DEFAULT
 * @property {Object} [url] Default URL object
 * @property {?string} [url.content_id] Default URL content ID
 * @property {'EXTERNAL'|'CONTENT'|'FILE'|'EMAIL_ADDRESS'|'BLOG'|'CALL_TO_ACTION'|'PHONE_NUMBER'|'WHATSAPP_NUMBER'} [url.type] Default URL type
 * @property {string} [url.href] Default URL href
 * @property {boolean} [open_in_new_tab] Default open_in_new_tab value
 * @property {boolean} [no_follow] Default no_follow value
 * @property {boolean} [sponsored] Default sponsored value
 * @property {boolean} [user_generated_content] Default user_generated_content value
 */

/**
 * @typedef {'EXTERNAL'|'CONTENT'|'FILE'|'EMAIL_ADDRESS'|'BLOG'|'CALL_TO_ACTION'|'PHONE_NUMBER'|'WHATSAPP_NUMBER'} LINK_SUPPORTED_TYPES
 */

/**
 * #### Link fields provide an easy interface for content creators to provide links to URLs and email addresses.
 * `only_content_tab`
 *
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.link('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {Array<LINK_SUPPORTED_TYPES>} [fields.supported_types=all] `all` list of the types of links this field allows content creators to select
 * @param {boolean} [fields.show_advanced_rel_options=false] `false` Whether content creators can see advanced rel options
 * @param {LINK_DEFAULT} [fields.default] Default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @returns {COMMON_FIELDS}
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
 * #### Rich Text fields provide content creators with a WYSIWYG text editor experience.
 * `only_content_tab`
 *
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.richtext('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {Array<string>} [fields.enabled_features] An array of items that allows you to configure the Rich Text Editor Toolbar and what options are available for content editors.
 * @param {string} [fields.default] String of content to be displayed supports HTML --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @returns {COMMON_FIELDS}
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
 * #### URL fields provide a similar experience to link fields. Providing a UI for content creators to add links. URL fields, however, do not show a UI for open in a new window, nor tell search engines not to follow. Use this field when you as a developer want to dictate the values for that.
 * `only_content_tab`
 *
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.url('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {Array<LINK_SUPPORTED_TYPES>} [fields.supported_types=all] `all` list of the types of links this field allows content creators to select.
 * @param {Object} [fields.default] Default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {string} [fields.default.content_id] Default content id
 * @param {'EXTERNAL'|'CONTENT'|'FILE'|'EMAIL_ADDRESS'|'BLOG'|'CALL_TO_ACTION'|'PHONE_NUMBER'|'WHATSAPP_NUMBER'} fields.default.type Default URL type
 * @param {string} [fields.default.href] Default href
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @returns {COMMON_FIELDS}
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

/**
 * #### Video fields provide content editors with a place to add HubSpot Video to their module content without the need of using rich text fields.
 * `only_content_tab`
 *
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.video('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {boolean} [fields.resizable=true] `true` Whether the video is resizable
 * @param {boolean} [fields.show_preview=true] `true` Whether the video is previewable
 * @param {boolean} [fields.show_advanced_options=true] `true` Whether the video is advanced options
 * @param {Object} [fields.default] Default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @returns {COMMON_FIELDS}
 */
function video (label, name, fields) {
  const contentOptions = {}
  contentOptions.resizable = fields?.resizable ?? true
  contentOptions.show_preview = fields?.show_preview ?? true
  contentOptions.show_advanced_options = fields?.show_advanced_options ?? true
  contentOptions.default = fields?.default ?? {}

  const otherOptions = initField(label, name, 'videoplayer', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * #### Embed fields allow the user to add a URL from an oEmbed-enabled site or paste in an embed code from another site.
 * `only_content_tab`
 *
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.embed('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {Array<'oembed'|'html'>} [fields.supported_source_types=all] `all` Array of source types that are supported by the field.
 * @param {Array<'photo'|'video'|'link'|'rich'>} [fields.supported_oembed_types=all] `all` Array of oEmbed types that are supported by the field.
 * @param {boolean} [fields.resizable=true] `true` Whether the embed is resizable
 * @param {boolean} [fields.show_preview=true] `true` Whether the embed is previewable
 * @param {Array<string>} [fields.supported_media_bridge_providers] Array of provider IDs that determine which Media Bridge providers are available to select content from.
 * @param {Object} [fields.default] Default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @returns {COMMON_FIELDS}
 */
function embed (label, name, fields) {
  const contentOptions = {}
  contentOptions.supported_source_types = fields?.supported_source_types ?? ['oembed', 'html']
  contentOptions.supported_oembed_types = fields?.supported_oembed_types ?? ['photo', 'video', 'link', 'rich']
  contentOptions.resizable = fields?.resizable ?? true
  contentOptions.show_preview = fields?.show_preview ?? true
  contentOptions.supported_media_bridge_providers = fields?.supported_media_bridge_providers ?? []
  const defaultObj = {
    source_type: 'oembed'
  }
  contentOptions.default = { ...defaultObj, ...fields?.default }

  const otherOptions = initField(label, name, 'embed', fields)
  return { ...contentOptions, ...otherOptions }
}

export { text, link, richtext, url, video, embed }
