import * as T from './config/types.js' // eslint-disable-line
import { CommonFields } from './common-properties.js'

// *************
// Only Style Tab fields
// *************

/**
 * ##### `only_style_tab`
 * #### Enables content creators to position an element within a container.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.alignment('name', 'label', {...options if needed})
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & ALIGNMENT_FIELDS} [fields]
 * @returns {Object}
 * @example
 * @typedef {Object} ALIGNMENT_FIELDS
 * @property {'HORIZONTAL'|'VERTICAL'|'BOTH'} [alignment_direction] `HORIZONTAL` Determines if only horizontal, only vertical, or both alignment controls should be shown
 * @property {Object} [default] Default alignment values --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @property {'BOTTOM'|'MIDDLE'|'TOP'} [default.vertical_align] Default vertical alignment
 * @property {'LEFT'|'CENTER'|'RIGHT'} [default.horizontal_align] Default horizontal alignment
 */
function alignment (name, label, fields) {
  const labelAndName = { name, label }
  const common = new CommonFields({ ...labelAndName, ...fields })
  common.type = 'alignment'

  const specific = {}
  specific.alignment_direction = fields?.alignment_direction ?? 'HORIZONTAL'
  if (specific.alignment_direction === 'BOTH') {
    specific.default = fields?.default ?? {
      horizontal_align: 'LEFT',
      vertical_align: 'CENTER'
    }
  } else if (specific.alignment_direction === 'HORIZONTAL') {
    specific.default = fields?.default ?? {
      horizontal_align: 'LEFT'
    }
  } else if (specific.alignment_direction === 'VERTICAL') {
    specific.default = fields?.default ?? {
      vertical_align: 'CENTER'
    }
  }
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    if ('default' in fields) specific.default = fields?.default
  }
  return { ...common, ...specific }
}

/**
 * ##### `only_style_tab`
 * #### This field provides a user interface (UI) for content creators to set padding and margin.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.spacing('name', 'label', {...options if needed})
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & SPACING_FIELDS} [fields]
 * @returns {Object}
 * @typedef {Object} SPACING_FIELDS
 * @property {Object} [limits] Sets the guidelines for min and max amount of spacing.
 * @property {Object} [limits.padding] Padding limits object
 * @property {Object} [limits.margin] Margin limits object
 * @property {Object} [default] Default spacing object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @property {Object} [default.margin] Default margin object
 * @property {Object} [default.margin.top] Default top margin object
 * @property {number|null} default.margin.top.value Default top margin value
 * @property {'string'|null} default.margin.top.units Default top margin units
 * @property {Object} [default.margin.bottom] Default bottom margin object
 * @property {number|null} default.margin.bottom.value Default bottom margin value
 * @property {'string'|null} default.margin.bottom.units Default bottom margin units
 * @property {Object} [default.padding] Default padding object
 * @property {Object} [default.padding.top] Default top padding object
 * @property {number|null} default.padding.top.value Default top padding value
 * @property {'string'|null} default.padding.top.units Default top padding units
 * @property {Object} [default.padding.bottom] Default bottom padding object
 * @property {number|null} default.padding.bottom.value Default bottom padding value
 * @property {'string'|null} default.padding.bottom.units Default bottom padding units
 * @property {Object} [default.padding.left] Default left padding object
 * @property {number|null} default.padding.left.value Default left padding value
 * @property {'string'|null} default.padding.left.units Default left padding units
 * @property {Object} [default.padding.right] Default right padding object
 * @property {number|null} default.padding.right.value Default right padding value
 * @property {'string'|null} default.padding.right.units Default right padding units
 */
function spacing (name, label, fields) {
  const labelAndName = { name, label }
  const common = new CommonFields({ ...labelAndName, ...fields })
  common.type = 'spacing'

  const specific = {}
  specific.default = fields?.default ?? {}
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    if ('limits' in fields) specific.limits = fields?.limits
  }
  return { ...common, ...specific }
}

/**
 * ##### `only_style_tab`
 * @typedef {Object} TEXT_STYLES
 * @property {'underline'|'none'} [`text-decoration`]
 * @property {'italic'} [`font-style`]
 * @property {'bold'} [`font-weight`]
 */

/**
 * #### Font fields provide content creators basic font styling controls.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.font('name', 'label', {...options if needed})
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & FONT_FIELDS} [fields]
 * @returns {Object}
 * @typedef {Object} FONT_FIELDS
 * @property {Boolean} [load_external_fonts] `true` HubSpot automatically loads the selected web font to the page if the font is selected and referenced by HubL in a stylesheet or in a module. Set this to false, if you are already loading the font to the page, that way the font won't load twice.
 * @property {Object} [default] Font default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @property {String} default.font Default family name of the font
 * @property {'sans-serif'|'serif'|null} default.fallback Default fallback font
 * @property {'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'|'100italic'|'200italic'|'300italic'|'400italic'|'500italic'|'600italic'|'700italic'|'800italic'|'900italic'|null} [default.variant] Font variant
 * @property {'GOOGLE'|'DEFAULT'} default.font_set Default font set
 * @property {TEXT_STYLES} [default.styles] Default text styles
 * @property {Number} [default.size] Default font size
 * @property {String} [default.color] Default font color
 * @property {'rem'|'px'|'em'|'rem'|'%'|'ex'|'ch'} default.size_unit Default font size unit
 */
function font (name, label, fields) {
  const labelAndName = { name, label }
  const common = new CommonFields({ ...labelAndName, ...fields })
  common.type = 'font'

  const specific = {}
  specific.load_external_fonts = fields?.load_external_fonts ?? true
  specific.default = fields?.default ?? {}
  return { ...common, ...specific }
}

/**
 * ##### `only_style_tab`
 * #### This field provides a way for content creators to create and configure gradients.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.gradient('name', 'label', {...options if needed})
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & GRADIENT_FIELDS} [fields]
 * @returns {Object}
 * @typedef {Object} GRADIENT_FIELDS
 * @property {Object} [default] Gradient default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @property {Object} [default.side_or_corner] Default side or corner object
 * @property {'TOP'|'BOTTOM'|null} default.side_or_corner.verticalSide Default vertical side
 * @property {'LEFT'|'RIGHT'|null} default.side_or_corner.horizontalSide Default horizontal side
 * @property {Array<{color: {r: number, g: number, b: number, a: number}}>} [default.colors] Default colors array
 */
function gradient (name, label, fields) {
  const labelAndName = { name, label }
  const common = new CommonFields({ ...labelAndName, ...fields })
  common.type = 'gradient'

  const specific = {}
  specific.default = fields?.default ?? {}
  return { ...common, ...specific }
}

/**
 * ##### `only_style_tab`
 * #### This field provides a background image field which has subfields for background position and background size.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.backgroundimage('name', 'label', {...options if needed})
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & BACKGROUNDIMAGE_FIELDS} [fields]
 * @returns {Object}
 * @typedef {Object} BACKGROUNDIMAGE_FIELDS
 * @property {Object} [default] Background image default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @property {string} default.src Default image source
 * @property {'TOP_LEFT'|'TOP_CENTER'|'TOP_RIGHT'|'MIDDLE_LEFT'|'MIDDLE_CENTER'|'MIDDLE_RIGHT'|'BOTTOM_LEFT'|'BOTTOM_CENTER'|"BOTTOM_RIGHT"} default.background_position Default background position
 * @property {'cover'|'contain'|'auto'} default.background_size Default background size
 */
function backgroundimage (name, label, fields) {
  const labelAndName = { name, label }
  const common = new CommonFields({ ...labelAndName, ...fields })
  common.type = 'backgroundimage'

  const specific = {}
  specific.default = fields?.default ?? { src: '', background_position: 'MIDDLE_CENTER', background_size: 'cover' }
  return { ...common, ...specific }
}

/**
 * ##### `only_style_tab`
 * #### This field provides content creators a user interface for creating a border around an element.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.border('name', 'label', {...options if needed})
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & BORDER_FIELDS} [fields]
 * @returns {Object}
 * @typedef {Object} BORDER_FIELDS
 * @property {boolean} [allow_custom_border_sides] `false` Allow custom border sides
 * @property {Object} [default] Border default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @property {Object} [default.top]
 * @property {Object} default.top.width
 * @property {number} default.top.width.value
 * @property {'px'} default.top.width.units
 * @property {number} default.top.opacity
 * @property {'solid'|'double'|'dotted'|'dashed'} default.top.style
 * @property {string} default.top.color
 * @property {Object} [default.bottom]
 * @property {Object} default.bottom.width
 * @property {number} default.bottom.width.value
 * @property {'px'} default.bottom.width.units
 * @property {number} default.bottom.opacity
 * @property {'solid'|'double'|'dotted'|'dashed'} default.bottom.style
 * @property {string} default.bottom.color
 * @property {Object} [default.left]
 * @property {Object} default.left.width
 * @property {number} default.left.width.value
 * @property {'px'} default.left.width.units
 * @property {number} default.left.opacity
 * @property {'solid'|'double'|'dotted'|'dashed'} default.left.style
 * @property {string} default.left.color
 * @property {Object} [default.right]
 * @property {Object} default.right.width
 * @property {number} default.right.width.value
 * @property {'px'} default.right.width.units
 * @property {number} default.right.opacity
 * @property {'solid'|'double'|'dotted'|'dashed'} default.right.style
 * @property {string} default.right.color
 */
function border (name, label, fields) {
  const labelAndName = { name, label }
  const common = new CommonFields({ ...labelAndName, ...fields })
  common.type = 'border'

  const specific = {}
  specific.allow_custom_border_sides = fields?.allow_custom_border_sides ?? false
  specific.default = fields?.default ?? {}
  return { ...common, ...specific }
}

/**
 * ##### `only_style_tab`
 * #### This field provides content creators a way to align text content within a container.
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.textalignment('name', 'label', {...options if needed})
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & TEXTALIGNMENT_FIELDS} [fields]
 * @returns {Object}
 * @typedef {Object} TEXTALIGNMENT_FIELDS
 * @property {Object} [default] Text alignment default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @property {'LEFT'|'CENTER'|'RIGHT'|'JUSTIFY'} [default.text_align] `LEFT` Default text alignment
 */
function textalignment (name, label, fields) {
  const labelAndName = { name, label }
  const common = new CommonFields({ ...labelAndName, ...fields })
  common.type = 'textalignment'

  const specific = {}
  specific.default = fields?.default ?? { text_align: 'LEFT' }
  return { ...common, ...specific }
}

export { alignment, spacing, font, gradient, backgroundimage, border, textalignment }
