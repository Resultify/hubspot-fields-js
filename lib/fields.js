/// <reference path="./types/types.js" />
// *************
// General fields.
// Fields for content and style tab
// *************

/**
 * #### Boolean field
 * @example
 * fi.boolean('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|BOOLEAN_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function boolean (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'boolean' }
  }
}

/**
 * #### Choice field
 * @example
 * fi.choice('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|CHOICE_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function choice (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'choice' }
  }
}

/**
 * #### font field
 * @example
 * fi.font('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|FONT_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function font (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'font' }
  }
}

/**
 * #### Color field
 * @example
 * fi.color('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|COLOR_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function color (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'color' }
  }
}

/**
 * #### image field
 * @example
 * fi.image('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|IMAGE_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function image (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'image' }
  }
}

/**
 * #### icon field
 * @example
 * fi.icon('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|ICON_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function icon (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'icon' }
  }
}

/**
 * #### number field
 * @example
 * fi.number('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|NUMBER_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function number (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'number' }
  }
}

export { boolean, choice, number, color, icon, image, font }
