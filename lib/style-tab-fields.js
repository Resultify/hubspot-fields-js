import * as T from './config/types.js' // eslint-disable-line
import { CommonFields } from './common-properties.js'

// *************
// Only Style Tab fields
// *************

/**
 * @summary Alignment field
 * @typedef {Object} ALIGNMENT_FIELDS
 * @property {'HORIZONTAL'|'VERTICAL'|'BOTH'} [alignment_direction] Determines if only horizontal, only vertical, or both alignment controls should be shown
 * @property {Object} [default]
 * @property {'BOTTOM'|'MIDDLE'|'TOP'} [default.vertical_align]
 * @property {'LEFT'|'CENTER'|'RIGHT'} [default.horizontal_align]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & ALIGNMENT_FIELDS} [fields]
 * @returns {Object}
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
 * @summary Spacing field
 * @typedef {Object} SPACING_FIELDS
 * @property {Object} [limits] Sets the guidelines for min and max amount of spacing.
 * @property {Object} [limits.padding]
 * @property {Object} [limits.margin]
 * @property {Object} [default] Sets the default spacing values.
 * @property {Object} [default.margin]
 * @property {Object} [default.margin.top]
 * @property {number|null} default.margin.top.value
 * @property {'px'|null} default.margin.top.units
 * @property {Object} [default.margin.bottom]
 * @property {number|null} default.margin.bottom.value
 * @property {'px'|null} default.margin.bottom.units
 * @property {Object} [default.padding]
 * @property {Object} [default.padding.top]
 * @property {number|null} default.padding.top.value
 * @property {'px'|null} default.padding.top.units
 * @property {Object} [default.padding.bottom]
 * @property {number|null} default.padding.bottom.value
 * @property {'px'|null} default.padding.bottom.units
 * @property {Object} [default.padding.left]
 * @property {number|null} default.padding.left.value
 * @property {'px'|null} default.padding.left.units
 * @property {Object} [default.padding.right]
 * @property {number|null} default.padding.right.value
 * @property {'px'|null} default.padding.right.units
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & SPACING_FIELDS} [fields]
 * @returns {Object}
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
 * @typedef {Object} TEXT_STYLES
 * @property {'underline'|'none'} [`text-decoration`]
 * @property {'italic'} [`font-style`]
 * @property {'bold'} [`font-weight`]
 */

/**
 * @summary font field
 * @typedef {Object} FONT_FIELDS
 * @property {Boolean} [load_external_fonts] HubSpot automatically loads the selected web font to the page if the font is selected and referenced by HubL in a stylesheet or in a module. Set this to false, if you are already loading the font to the page, that way the font won't load twice.
 * @property {Object} [default]
 * @property {String} default.font
 * @property {'sans-serif'|'serif'|null} default.fallback
 * @property {'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'|'100italic'|'200italic'|'300italic'|'400italic'|'500italic'|'600italic'|'700italic'|'800italic'|'900italic'|null} [default.variant]
 * @property {'GOOGLE'|'DEFAULT'} default.font_set
 * @property {TEXT_STYLES} [default.styles]
 * @property {Number} [default.size]
 * @property {String} [default.color]
 * @property {'rem'|'px'|'em'|'rem'|'%'|'ex'|'ch'} default.size_unit
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & FONT_FIELDS} [fields]
 * @returns {Object}
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
 * @summary gradient field
 * @typedef {Object} GRADIENT_FIELDS
 * @property {Object} [default]
 * @property {Object} [default.side_or_corner]
 * @property {'TOP'|'BOTTOM'|null} default.side_or_corner.verticalSide
 * @property {'LEFT'|'RIGHT'|null} default.side_or_corner.horizontalSide
 * @property {Array<{color: {r: number, g: number, b: number, a: number}}>} [default.colors]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & GRADIENT_FIELDS} [fields]
 * @returns {Object}
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
 * @summary backgroundimage field
 * @typedef {Object} BACKGROUNDIMAGE_FIELDS
 * @property {Object} [default]
 * @property {string} default.src
 * @property {'TOP_LEFT'|'TOP_CENTER'|'TOP_RIGHT'|'MIDDLE_LEFT'|'MIDDLE_CENTER'|'MIDDLE_RIGHT'|'BOTTOM_LEFT'|'BOTTOM_CENTER'|"BOTTOM_RIGHT"} default.background_position
 * @property {'cover'|'contain'|'auto'} default.background_size
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & BACKGROUNDIMAGE_FIELDS} [fields]
 * @returns {Object}
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
 * @summary border field
 * @typedef {Object} BORDER_FIELDS
 * @property {boolean} [allow_custom_border_sides]
 * @property {Object} [default]
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
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & BORDER_FIELDS} [fields]
 * @returns {Object}
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
 * @summary textalignment field
 * @typedef {Object} TEXTALIGNMENT_FIELDS
 * @property {Object} [default]
 * @property {'LEFT'|'CENTER'|'RIGHT'|'JUSTIFY'} [default.text_align]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & TEXTALIGNMENT_FIELDS} [fields]
 * @returns {Object}
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
