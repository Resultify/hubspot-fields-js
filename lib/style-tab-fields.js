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
// Only Style Tab fields
// *************

/**
 * #### Enables content creators to position an element within a container.
 * `only_style_tab`
 *
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.alignment('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {'HORIZONTAL'|'VERTICAL'|'BOTH'} [fields.alignment_direction=HORIZONTAL] `HORIZONTAL` Determines if only horizontal, only vertical, or both alignment controls should be shown
 * @param {Object} [fields.default] Default alignment values --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {'BOTTOM'|'MIDDLE'|'TOP'} [fields.default.vertical_align=MIDDLE] `MIDDLE` Default vertical alignment
 * @param {'LEFT'|'CENTER'|'RIGHT'} [fields.default.horizontal_align=LEFT] `LEFT` Default horizontal alignment
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @returns {COMMON_FIELDS}
 */
function alignment (label, name, fields) {
  const contentOptions = {}
  contentOptions.alignment_direction = fields?.alignment_direction ?? 'HORIZONTAL'
  if (contentOptions.alignment_direction === 'BOTH') {
    contentOptions.default = fields?.default ?? {
      horizontal_align: 'LEFT',
      vertical_align: 'MIDDLE'
    }
  } else if (contentOptions.alignment_direction === 'HORIZONTAL') {
    contentOptions.default = fields?.default ?? {
      horizontal_align: 'LEFT'
    }
  } else if (contentOptions.alignment_direction === 'VERTICAL') {
    contentOptions.default = fields?.default ?? {
      vertical_align: 'MIDDLE'
    }
  }
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    if ('default' in fields) contentOptions.default = fields?.default
  }

  const otherOptions = initField(label, name, 'alignment', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * #### This field provides a user interface (UI) for content creators to set padding and margin.
 * `only_style_tab`
 *
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.spacing('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {Object} [fields.limits] Sets the guidelines for min and max amount of spacing.
 * @param {Object} [fields.limits.padding] Padding limits object
 * @param {Object} [fields.limits.margin] Margin limits object
 * @param {Object} [fields.default] Default spacing object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {Object} [fields.default.margin] Default margin object
 * @param {Object} [fields.default.margin.top] Default top margin object
 * @param {?number} fields.default.margin.top.value Default top margin value
 * @param {?string} fields.default.margin.top.units Default top margin units
 * @param {Object} [fields.default.margin.bottom] Default bottom margin object
 * @param {?number} fields.default.margin.bottom.value Default bottom margin value
 * @param {?string} fields.default.margin.bottom.units Default bottom margin units
 * @param {Object} [fields.default.padding] Default padding object
 * @param {Object} [fields.default.padding.top] Default top padding object
 * @param {?number} fields.default.padding.top.value Default top padding value
 * @param {?string} fields.default.padding.top.units Default top padding units
 * @param {Object} [fields.default.padding.bottom] Default bottom padding object
 * @param {?number} fields.default.padding.bottom.value Default bottom padding value
 * @param {?string} fields.default.padding.bottom.units Default bottom padding units
 * @param {Object} [fields.default.padding.left] Default left padding object
 * @param {?number} fields.default.padding.left.value Default left padding value
 * @param {?string} fields.default.padding.left.units Default left padding units
 * @param {Object} [fields.default.padding.right] Default right padding object
 * @param {?number} fields.default.padding.right.value Default right padding value
 * @param {?string} fields.default.padding.right.units Default right padding units
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @returns {COMMON_FIELDS}
 */
function spacing (label, name, fields) {
  const contentOptions = {}
  contentOptions.default = fields?.default ?? {}
  if (typeof fields !== 'undefined' && fields !== null && typeof fields === 'object') {
    if ('limits' in fields) contentOptions.limits = fields?.limits
  }

  const otherOptions = initField(label, name, 'spacing', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * @typedef {Object} RGBA_COLOR
 * @property {number} r Red value
 * @property {number} g Green value
 * @property {number} b Blue value
 * @property {number} a Alpha value `0-1`
 */

/**
 * #### This field provides a way for content creators to create and configure gradients.
 * `only_style_tab`
 *
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.gradient('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {Object} [fields.default] Gradient default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {Object} [fields.default.side_or_corner] Default side or corner object
 * @param {'TOP'|'BOTTOM'|null} fields.default.side_or_corner.verticalSide Default vertical side
 * @param {'LEFT'|'RIGHT'|null} fields.default.side_or_corner.horizontalSide Default horizontal side
 * @param {Array<{color: RGBA_COLOR}>} [fields.default.colors] Default colors array
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @returns {COMMON_FIELDS}
 */
function gradient (label, name, fields) {
  const contentOptions = {}
  contentOptions.default = fields?.default ?? {}

  const otherOptions = initField(label, name, 'gradient', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * #### This field provides a background image field which has subfields for background position and background size.
 * `only_style_tab`
 *
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.backgroundimage('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {Object} [fields.default] Background image default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {string} fields.default.src Default image source
 * @param {'TOP_LEFT'|'TOP_CENTER'|'TOP_RIGHT'|'MIDDLE_LEFT'|'MIDDLE_CENTER'|'MIDDLE_RIGHT'|'BOTTOM_LEFT'|'BOTTOM_CENTER'|"BOTTOM_RIGHT"} [fields.default.background_position=MIDDLE_CENTER] `MIDDLE_CENTER` Default background position
 * @param {'cover'|'contain'|'auto'} [fields.default.background_size=cover] `cover` Default background size
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @returns {COMMON_FIELDS}
 */
function backgroundimage (label, name, fields) {
  const contentOptions = {}
  contentOptions.default = fields?.default ?? { src: '', background_position: 'MIDDLE_CENTER', background_size: 'cover' }

  const otherOptions = initField(label, name, 'backgroundimage', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * #### This field provides content creators a user interface for creating a border around an element.
 * `only_style_tab`
 *
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.border('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {boolean} [fields.allow_custom_border_sides=false] `false` Allow custom border sides
 * @param {Object} [fields.default] Border default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {Object} [fields.default.top]
 * @param {Object} fields.default.top.width
 * @param {number} fields.default.top.width.value
 * @param {'px'} fields.default.top.width.units
 * @param {number} fields.default.top.opacity
 * @param {'solid'|'double'|'dotted'|'dashed'} fields.default.top.style
 * @param {string} fields.default.top.color
 * @param {Object} [fields.default.bottom]
 * @param {Object} fields.default.bottom.width
 * @param {number} fields.default.bottom.width.value
 * @param {'px'} fields.default.bottom.width.units
 * @param {number} fields.default.bottom.opacity
 * @param {'solid'|'double'|'dotted'|'dashed'} fields.default.bottom.style
 * @param {string} fields.default.bottom.color
 * @param {Object} [fields.default.left]
 * @param {Object} fields.default.left.width
 * @param {number} fields.default.left.width.value
 * @param {'px'} fields.default.left.width.units
 * @param {number} fields.default.left.opacity
 * @param {'solid'|'double'|'dotted'|'dashed'} fields.default.left.style
 * @param {string} fields.default.left.color
 * @param {Object} [fields.default.right]
 * @param {Object} fields.default.right.width
 * @param {number} fields.default.right.width.value
 * @param {'px'} fields.default.right.width.units
 * @param {number} fields.default.right.opacity
 * @param {'solid'|'double'|'dotted'|'dashed'} fields.default.right.style
 * @param {string} fields.default.right.color
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @returns {COMMON_FIELDS}
 */
function border (label, name, fields) {
  const contentOptions = {}
  contentOptions.allow_custom_border_sides = fields?.allow_custom_border_sides ?? false
  contentOptions.default = fields?.default ?? {}

  const otherOptions = initField(label, name, 'border', fields)
  return { ...contentOptions, ...otherOptions }
}

/**
 * #### This field provides content creators a way to align text content within a container.
 * `only_style_tab`
 *
 * Some parameters have `default` values, `OMIT` such parameters if you don't want to override them.
 * @example
 * fi.textalignment('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label The text the content creator sees describing the field. May contain spaces.
 * @param {string} name Field/HubL variable name, which you'll reference when incorporating the field and its values in the module or theme. `Cannot contain spaces or special characters!`
 * @param {Object} [fields]
 * @param {Object} [fields.default] Text alignment default object --> It's generally a good idea to skip setting the `default` object, as it should be configured by the editor, not the developer
 * @param {'LEFT'|'CENTER'|'RIGHT'|'JUSTIFY'} [fields.default.text_align=LEFT] `LEFT` Default text alignment
 * @param {EDITOR_OPTIONS} [fields.editor_options] Editor options group.
 * @param {DISPLAY_CONDITIONS} [fields.display_conditions] Display conditions group.
 * @returns {COMMON_FIELDS}
 */
function textalignment (label, name, fields) {
  const contentOptions = {}
  contentOptions.default = fields?.default ?? { text_align: 'LEFT' }

  const otherOptions = initField(label, name, 'textalignment', fields)
  return { ...contentOptions, ...otherOptions }
}

export { alignment, spacing, gradient, backgroundimage, border, textalignment }
