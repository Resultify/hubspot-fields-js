/// <reference path="./types/types.js" />
// *************
// Only Style Tab fields
// *************

/**
 * #### Alignment field
 * `only_style_tab`
 * @example
 * fi.alignment('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|ALIGNMENT_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function alignment (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'alignment' }
  }
}

/**
 * #### backgroundimage field
 * `only_style_tab`
 * @example
 * fi.backgroundimage('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|BACKGROUND_IMAGE_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function backgroundimage (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'backgroundimage' }
  }
}

/**
 * #### border field
 * `only_style_tab`
 * @example
 * fi.border('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|BORDER_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function border (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'border' }
  }
}

/**
 * #### gradient field
 * `only_style_tab`
 * @example
 * fi.gradient('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|GRADIENT_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function gradient (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'gradient' }
  }
}

/**
 * #### spacing field
 * `only_style_tab`
 * @example
 * fi.spacing('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|SPACING_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function spacing (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'spacing' }
  }
}

/**
 * #### textalignment field
 * `only_style_tab`
 * @example
 * fi.textalignment('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|TEXT_ALIGNMENT_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function textalignment (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'textalignment' }
  }
}

export { alignment, spacing, gradient, backgroundimage, border, textalignment }
