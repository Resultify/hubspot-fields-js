import * as T from './config/types.js' // eslint-disable-line
import { initField } from './utils/initField.js'

// *************
// General fields.
// Fields for content and style tab
// *************

/**
 * #### Number fields provide an easy interface for content creators to enter in or adjust numerical values and options. This can be used for creating percentage based items or anything where numbers are needed for input.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.number('label', 'name', {...options if needed})
 * @param {T.FIELD_LABEL} label
 * @param {T.FIELD_NAME} name
 * @param {NUMBER_CONTENT_OPTIONS & T.FAKE_FIELDS_MAP} [fields]
 * @returns {T.BASE_FIELDS}
 * @typedef {Object} NUMBER_CONTENT_OPTIONS
 * @property {'slider'|'text'} [display] `text` The display type for the number field.
 * @property {number} [step] The step value for the number field.
 * @property {number} [min] Minimum value for the number field.
 * @property {number} [max] Maximum value for the number field.
 * @property {string} [prefix] Added as a prefix to the number field.
 * @property {string} [suffix] Added as a suffix to the number field.
 * @property {string} [placeholder] Adds a placeholder value to the field.
 * @property {number|null} [default] A default number to be used --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 */
function number (label, name, fields) {
  const contentOptions = {}
  contentOptions.display = fields?.display ?? 'text'
  contentOptions.step = fields?.step ?? 1
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    if ('min' in fields) contentOptions.min = fields.min
    if ('max' in fields) contentOptions.max = fields.max
    if ('prefix' in fields) contentOptions.prefix = fields.prefix
    if ('suffix' in fields) contentOptions.suffix = fields.suffix
    if ('placeholder' in fields) contentOptions.placeholder = fields.placeholder
    if ('default' in fields) contentOptions.default = fields.default
  }

  const otherOptions = initField(label, name, 'number', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * #### This field provides a way for content editors to enable/disable functionality.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.boolean('label', 'name', {...options if needed})
 * @param {T.FIELD_LABEL} label
 * @param {T.FIELD_NAME} name
 * @param {BOOLEAN_CONTENT_OPTIONS & T.FAKE_FIELDS_MAP} [fields]
 * @returns {T.BASE_FIELDS}
 * @typedef {Object} BOOLEAN_CONTENT_OPTIONS
 * @property {'toggle'|'checkbox'} [display] `checkbox` Choose the visual display style for the field. Can appear as either a toggle or a checkbox.
 * @property {boolean} [default] `false` A default boolean value
 */
function boolean (label, name, fields) {
  const contentOptions = {}
  contentOptions.display = fields?.display ?? 'checkbox'
  contentOptions.default = fields?.default ?? false

  const otherOptions = initField(label, name, 'boolean', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * #### Image fields provide an easy interface for content creators to add images to a module or theme.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.image('label', 'name', {...options if needed})
 * @param {T.FIELD_LABEL} label
 * @param {T.FIELD_NAME} name
 * @param {IMAGE_CONTENT_OPTIONS & T.FAKE_FIELDS_MAP} [fields]
 * @returns {T.BASE_FIELDS}
 * @typedef {Object} IMAGE_CONTENT_OPTIONS
 * @property {boolean} [responsive] `true` Determines if the image is to act responsively or have a fixed height and width.
 * @property {boolean} [show_loading] `false` Determines if the controls for choosing to lazy load the image are shown in the page editor.
 * @property {boolean} [resizable] `true` Determines if the image is resizable in the page editor.
 * @property {Object} [default] Default image properties --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @property {'auto'|'auto_custom_max'|'exact'} [default.size_type] `auto` Whether the image is automatically or manually sized. `auto`: HubSpot will automatically adjust the size of the image based on its original dimensions. `auto_custom_max`: HubSpot will automatically adjust the size of the image with maximum dimensions set using the `max_height` and `max_width` properties. `exact`: HubSpot will size the image based on the dimensions set using the `height` and `width` properties.
 * @property {string} [default.src] The URL of the default image. Must be an absolute path to an image
 * @property {string} [default.alt] The image's default alt-text.
 * @property {string} [default.loading] `lazy` The image's lazy loading options
 * @property {number} [default.width] The width of the image
 * @property {number} [default.height] The height of the image
 * @property {number} [default.max_width] The maximum width of the image
 * @property {number} [default.max_height] The maximum height of the image
 */
function image (label, name, fields) {
  const contentOptions = {}
  contentOptions.responsive = fields?.responsive ?? true
  contentOptions.resizable = fields?.resizable ?? true
  contentOptions.show_loading = fields?.show_loading ?? false
  const defaultObj = {
    size_type: 'auto',
    src: '',
    alt: null,
    loading: 'lazy'
  }
  contentOptions.default = fields?.default ?? defaultObj

  const otherOptions = initField(label, name, 'image', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * #### Icon fields provide an icon picker UI to make it easier for content creators to add icons to your modules.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.icon('label', 'name', {...options if needed})
 * @param {T.FIELD_LABEL} label
 * @param {T.FIELD_NAME} name
 * @param {ICON_CONTENT_OPTIONS & T.FAKE_FIELDS_MAP} [fields]
 * @returns {T.BASE_FIELDS}
 * @typedef {Object} ICON_CONTENT_OPTIONS
 * @property {'fontawesome-5.14.0'|'fontawesome-5.0.10'} [icon_set] `fontawesome-5.14.0` The FontAwesome icon set to use.
 * @property {Object} [default] Defaout icon object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @property {string} [default.name] The name of the icon
 * @property {string} [default.unicode] The unicode of the icon
 * @property {'REGULAR'|'SOLID'} [default.type] The type of the icon
 */
function icon (label, name, fields) {
  const contentOptions = {}
  contentOptions.icon_set = fields?.icon_set ?? 'fontawesome-5.14.0'
  contentOptions.default = fields?.default ?? {}

  const otherOptions = initField(label, name, 'icon', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * #### Choice fields allow a content creator to select one or more items from a list of options, either within a dropdown menu, radio select, or checkboxes.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.choice('label', 'name', {...options if needed})
 * @param {T.FIELD_LABEL} label
 * @param {T.FIELD_NAME} name
 * @param {CHOICE_CONTENT_OPTIONS & T.FAKE_FIELDS_MAP} [fields]
 * @returns {T.BASE_FIELDS}
 * @typedef {Object} CHOICE_CONTENT_OPTIONS
 * @property {boolean} [multiple] `false` Optional. To allow multiple options to be selected, set the value to true.
 * @property {boolean} [reordering_enabled] `true` Enables reordering of the choices in the editor.
 * @property {'select'|'radio'|'checkbox'} [display] `select` Set the field's appearance. When not including multiple, you can set this as either `radio` or `select`. When multiple is set to true, you can set this as either `checkbox` or `select`.
 * @property {Array<Object>} [choices] Array of value and label pairs. Values listed first.
 * @property {string} [placeholder] Placeholder text to display when no value is selected.
 * @property {string} [default] Sets the default selected value from the choice array.
 */
function choice (label, name, fields) {
  const contentOptions = {}
  contentOptions.multiple = fields?.multiple ?? false
  contentOptions.reordering_enabled = fields?.reordering_enabled ?? true
  contentOptions.display = fields?.display ?? 'select'
  contentOptions.choices = fields?.choices ?? [['value 1', 'Label 1'], ['value 2', 'Label 2']]
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    if ('default' in fields) contentOptions.default = fields?.default
    if ('placeholder' in fields) contentOptions.placeholder = fields?.placeholder
  }

  const otherOptions = initField(label, name, 'choice', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * #### Color fields provide a color picker interface for content creators. They support solid colors as well as transparency.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.color('label', 'name', {...options if needed})
 * @param {T.FIELD_LABEL} label
 * @param {T.FIELD_NAME} name
 * @param {COLOR_CONTENT_OPTIONS & T.FAKE_FIELDS_MAP} [fields]
 * @returns {T.BASE_FIELDS}
 * @typedef {Object} COLOR_CONTENT_OPTIONS
 * @property {Boolean} [show_opacity] `true` Sets whether opacity input is shown. true: the opacity input is shown. false: the opacity input is hidden. If left undefined, opacity input will not display in email modules, but will display in other module types.
 * @property {Object} [default] Sets the default selected color and opacity --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer.
 * @property {String} [default.color] The default color
 * @property {Number} [default.opacity] The default opacity
 */
function color (label, name, fields) {
  const contentOptions = {}
  contentOptions.show_opacity = fields?.show_opacity ?? undefined
  const defaultObj = {
    color: null,
    opacity: null
  }
  contentOptions.default = { ...defaultObj, ...fields?.default }

  const otherOptions = initField(label, name, 'color', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * @typedef {Object} TEXT_STYLES
 * @property {'underline'|'none'} [`text-decoration`]
 * @property {'italic'|'normal'} [`font-style`]
 * @property {'bold'|'normal'} [`font-weight`]
 */

/**
 * #### Font fields provide content creators basic font styling controls.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.font('label', 'name', {...options if needed})
 * @param {T.FIELD_LABEL} label
 * @param {T.FIELD_NAME} name
 * @param {FONT_CONTENT_OPTIONS & T.FAKE_FIELDS_MAP} [fields]
 * @returns {T.BASE_FIELDS}
 * @typedef {Object} FONT_CONTENT_OPTIONS
 * @property {Boolean} [load_external_fonts] `true` HubSpot automatically loads the selected web font to the page if the font is selected and referenced by HubL in a stylesheet or in a module. Set this to false, if you are already loading the font to the page, that way the font won't load twice.
 * @property {Object} [default] Font default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @property {String} default.font Default family name of the font
 * @property {'sans-serif'|'serif'|null} [default.fallback] Default fallback font
 * @property {'100'|'200'|'300'|'regular'|'500'|'600'|'700'|'800'|'900'|'100italic'|'200italic'|'300italic'|'400italic'|'500italic'|'600italic'|'700italic'|'800italic'|'900italic'|null} [default.variant] Font variant
 * @property {'GOOGLE'|'DEFAULT'} default.font_set Default font set
 * @property {TEXT_STYLES} [default.styles] Default text styles
 * @property {Number} [default.size] Default font size
 * @property {String} [default.color] Default font color
 * @property {'rem'|'px'|'em'|'rem'|'%'|'ex'|'ch'} [default.size_unit] Default font size unit
 */
function font (label, name, fields) {
  const contentOptions = {}
  contentOptions.load_external_fonts = fields?.load_external_fonts ?? true
  contentOptions.default = fields?.default ?? {}

  const otherOptions = initField(label, name, 'font', fields)
  return { ...contentOptions, ...otherOptions }
}

export { boolean, choice, number, color, icon, image, font }
