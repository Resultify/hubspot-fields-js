import * as T from './config/types.js' // eslint-disable-line
import { initField } from './utils/initField.js'

/**
 * @ignore
 * @typedef {T.EDITOR_OPTIONS} EDITOR_OPTIONS {@link EDITOR_OPTIONS}
 * @typedef {T.DISPLAY_CONDITIONS} DISPLAY_CONDITIONS {@link DISPLAY_CONDITIONS}
 * @typedef {T.REPEATER_OPTIONS} REPEATER_OPTIONS {@link REPEATER_OPTIONS}
 * @typedef {T.REPEATER_OPTIONS_DEFAULT} REPEATER_OPTIONS_DEFAULT {@link REPEATER_OPTIONS_DEFAULT}
 * @typedef {T.COMMON_FIELDS} COMMON_FIELDS {@link COMMON_FIELDS}
 */

// *************
// General fields.
// Fields for content and style tab
// *************

/**
 * #### Number fields provide an easy interface for content creators to enter in or adjust numerical values and options. This can be used for creating percentage based items or anything where numbers are needed for input.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.number('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {'slider'|'text'} [fields.display=text] `text` The display type for the number field.
 * @param {number} [fields.step=1] `1` The step value for the number field.
 * @param {number} [fields.min] Minimum value for the number field.
 * @param {number} [fields.max] Maximum value for the number field.
 * @param {string} [fields.prefix] Added as a prefix to the number field.
 * @param {string} [fields.suffix] Added as a suffix to the number field.
 * @param {string} [fields.placeholder] Adds a placeholder value to the field.
 * @param {?number} [fields.default] A default number to be used --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @returns {COMMON_FIELDS}
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
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {'toggle'|'checkbox'} [fields.display=checkbox] `checkbox` Choose the visual display style for the field. Can appear as either a toggle or a checkbox.
 * @param {boolean} [fields.default=false] `false` A default boolean value
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @returns {COMMON_FIELDS}
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
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {boolean} [fields.responsive=true] `true` Determines if the image is to act responsively or have a fixed height and width.
 * @param {boolean} [fields.show_loading=false] `false` Determines if the controls for choosing to lazy load the image are shown in the page editor.
 * @param {boolean} [fields.resizable=true] `true` Determines if the image is resizable in the page editor.
 * @param {Object} [fields.default] Default image properties --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {'auto'|'auto_custom_max'|'exact'} [fields.default.size_type=auto] `auto` Whether the image is automatically or manually sized. `auto`: HubSpot will automatically adjust the size of the image based on its original dimensions. `auto_custom_max`: HubSpot will automatically adjust the size of the image with maximum dimensions set using the `max_height` and `max_width` properties. `exact`: HubSpot will size the image based on the dimensions set using the `height` and `width` properties.
 * @param {string} [fields.default.src] The URL of the default image. Must be an absolute path to an image
 * @param {string} [fields.default.alt] The image's default alt-text.
 * @param {string} [fields.default.loading=lazy] `lazy` The image's lazy loading options
 * @param {number} [fields.default.width] The width of the image
 * @param {number} [fields.default.height] The height of the image
 * @param {number} [fields.default.max_width] The maximum width of the image
 * @param {number} [fields.default.max_height] The maximum height of the image
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @returns {COMMON_FIELDS}
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
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {'fontawesome-5.14.0'|'fontawesome-5.0.10'} [fields.icon_set='fontawesome-5.14.0'] `fontawesome-5.14.0` The FontAwesome icon set to use.
 * @param {Object} [fields.default] Defaout icon object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {string} [fields.default.name] The name of the icon
 * @param {string} [fields.default.unicode] The unicode of the icon
 * @param {'REGULAR'|'SOLID'} [fields.default.type] The type of the icon
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @returns {COMMON_FIELDS}
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
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {boolean} [fields.multiple=false] `false` Optional. To allow multiple options to be selected, set the value to true.
 * @param {boolean} [fields.reordering_enabled=true] `true` Enables reordering of the choices in the editor.
 * @param {'select'|'radio'|'checkbox'} [fields.display=select] `select` Set the field's appearance. When not including multiple, you can set this as either `radio` or `select`. When multiple is set to true, you can set this as either `checkbox` or `select`.
 * @param {Array<Object>} [fields.choices] Array of value and label pairs. Values listed first.
 * @param {string} [fields.placeholder] Placeholder text to display when no value is selected.
 * @param {string} [fields.default] Sets the default selected value from the choice array.
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @returns {COMMON_FIELDS}
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
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {Boolean} [fields.show_opacity=true] `true` Sets whether opacity input is shown. true: the opacity input is shown. false: the opacity input is hidden. If left undefined, opacity input will not display in email modules, but will display in other module types.
 * @param {Object} [fields.default] Sets the default selected color and opacity --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer.
 * @param {String} [fields.default.color] The default color
 * @param {Number} [fields.default.opacity] The default opacity
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @returns {COMMON_FIELDS}
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
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {Boolean} [fields.load_external_fonts=true] `true` HubSpot automatically loads the selected web font to the page if the font is selected and referenced by HubL in a stylesheet or in a module. Set this to false, if you are already loading the font to the page, that way the font won't load twice.
 * @param {Object} [fields.default] Font default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {String} fields.default.font Default family name of the font
 * @param {'sans-serif'|'serif'|null} [fields.default.fallback] Default fallback font
 * @param {'100'|'200'|'300'|'regular'|'500'|'600'|'700'|'800'|'900'|'100italic'|'200italic'|'300italic'|'400italic'|'500italic'|'600italic'|'700italic'|'800italic'|'900italic'|null} [fields.default.variant] Font variant
 * @param {'GOOGLE'|'DEFAULT'} fields.default.font_set Default font set
 * @param {TEXT_STYLES} [fields.default.styles] Default text styles
 * @param {Number} [fields.default.size] Default font size
 * @param {String} [fields.default.color] Default font color
 * @param {'rem'|'px'|'em'|'rem'|'%'|'ex'|'ch'} [fields.default.size_unit] Default font size unit
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @param {REPEATER_OPTIONS} [fields.repeater_options] Repeater options. Keep `occurrence` object empty to just enable a feature. `repeater_options: {occurrence: {}}`
 * @param {REPEATER_OPTIONS_DEFAULT} [fields.repeater_options_default] Repeater options with predefined repeated fields and `default` values for each field.
 * @returns {COMMON_FIELDS}
 */
function font (label, name, fields) {
  const contentOptions = {}
  contentOptions.load_external_fonts = fields?.load_external_fonts ?? true
  contentOptions.default = fields?.default ?? {}

  const otherOptions = initField(label, name, 'font', fields)
  return { ...contentOptions, ...otherOptions }
}

export { boolean, choice, number, color, icon, image, font }
