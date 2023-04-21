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
function number (name, label, fields) {
  const labelAndName = { name, label }
  const commonFields = new CommonFields({ ...labelAndName, ...fields })
  commonFields.type = 'number'
  const commonContentFields = new CommonContentFields(fields)

  const specific = {}
  specific.display = fields?.display ?? 'text'
  specific.step = fields?.step ?? 1
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    if ('min' in fields) specific.min = fields.min
    if ('max' in fields) specific.max = fields.max
    if ('prefix' in fields) specific.prefix = fields.prefix
    if ('suffix' in fields) specific.suffix = fields.suffix
    if ('placeholder' in fields) specific.placeholder = fields.placeholder
    if ('default' in fields) specific.default = fields.default
  }
  return { ...commonFields, ...commonContentFields, ...specific }
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
function image (name, label, fields) {
  const labelAndName = { name, label }
  const commonFields = new CommonFields({ ...labelAndName, ...fields })
  commonFields.type = 'image'
  const commonContentFields = new CommonContentFields(fields)

  const specific = {}
  specific.responsive = fields?.responsive ?? true
  specific.resizable = fields?.resizable ?? true
  specific.show_loading = fields?.show_loading ?? false
  const defaultObj = {
    size_type: 'auto',
    src: '',
    alt: null,
    loading: 'lazy'
  }
  specific.default = fields?.default ?? defaultObj
  return { ...commonFields, ...commonContentFields, ...specific }
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
function icon (name, label, fields) {
  const labelAndName = { name, label }
  const commonFields = new CommonFields({ ...labelAndName, ...fields })
  commonFields.type = 'icon'
  const commonContentFields = new CommonContentFields(fields)

  const specific = {}
  specific.icon_set = fields?.icon_set ?? 'fontawesome-5.14.0'
  specific.default = fields?.default ?? {}
  return { ...commonFields, ...commonContentFields, ...specific }
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
function choice (name, label, fields) {
  const labelAndName = { name, label }
  const common = new CommonFields({ ...labelAndName, ...fields })
  common.type = 'choice'

  const specific = {}
  specific.multiple = fields?.multiple ?? false
  specific.reordering_enabled = fields?.reordering_enabled ?? true
  specific.display = fields?.display ?? 'select'
  specific.choices = fields?.choices ?? [['value 1', 'Label 1'], ['value 2', 'Label 2']]
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    if ('default' in fields) specific.default = fields?.default
    if ('placeholder' in fields) specific.placeholder = fields?.placeholder
  }
  return { ...common, ...specific }
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
function color (name, label, fields) {
  const labelAndName = { name, label }
  const common = new CommonFields({ ...labelAndName, ...fields })
  common.type = 'color'

  const specific = {}
  specific.show_opacity = fields?.show_opacity ?? undefined
  const defaultObj = {
    color: null,
    opacity: null
  }
  specific.default = { ...defaultObj, ...fields?.default }

  return { ...common, ...specific }
}

export { boolean, choice, number, color, icon, image }
