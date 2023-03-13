export type NUMBER_FIELDS = {
    display?: "text" | "slider" | undefined;
    step?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;
    prefix?: string | undefined;
    suffix?: string | undefined;
    placeholder?: string | undefined;
    default?: number | null | undefined;
};
export type BOOLEAN_FIELDS = {
    display?: "toggle" | "checkbox" | undefined;
    default?: boolean | undefined;
};
export type IMAGE_FIELDS = {
    responsive?: boolean | undefined;
    show_loading?: boolean | undefined;
    resizable?: boolean | undefined;
    default?: {
        size_type?: string | undefined;
        src?: string | undefined;
        alt?: string | undefined;
        loading?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
        max_width?: number | undefined;
        max_height?: number | undefined;
    } | undefined;
};
export type ICON_FIELDS = {
    icon_set?: "fontawesome-5.14.0" | "fontawesome-5.0.10" | undefined;
    default?: {
        name?: string | undefined;
        unicode?: string | undefined;
        type?: string | undefined;
    } | undefined;
};
export type CHOISE_FIELDS = {
    /**
     * Optional. To allow multiple options to be selected, set the value to true.
     */
    multiple?: boolean | undefined;
    reordering_enabled?: boolean | undefined;
    /**
     * Set the field's appearance. When not including multiple, you can set this as either "radio" or "select". When multiple is set to true, you can set this as either "checkbox" or "select".
     */
    display?: "checkbox" | "select" | "radio" | undefined;
    /**
     * Array of value and label pairs. Values listed first.
     */
    choices?: Object[] | undefined;
    /**
     * Sets the default selected value from the choice array.
     */
    default?: Object | undefined;
};
export type COLOR_FIELDS = {
    /**
     * Sets whether opacity input is shown. true: the opacity input is shown. false: the opacity input is hidden. If left undefined, opacity input will not display in email modules, but will display in other module types.
     */
    show_opacity?: boolean | undefined;
    /**
     * Sets the default selected color and opacity.
     */
    default?: {
        color?: string | undefined;
        opacity?: number | undefined;
    } | undefined;
};
/**
 * @summary boolean field
 * @typedef {Object} BOOLEAN_FIELDS
 * @property {'toggle'|'checkbox'} [display]
 * @property {boolean} [default]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & BOOLEAN_FIELDS} [fields]
 * @returns {Object}
 */
export function boolean(name: string, label: string, fields?: (T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & BOOLEAN_FIELDS) | undefined): Object;
/**
 * @summary Choice field
 * @typedef {Object} CHOISE_FIELDS
 * @property {boolean} [multiple] Optional. To allow multiple options to be selected, set the value to true.
 * @property {boolean} [reordering_enabled]
 * @property {'select'|'radio'|'checkbox'} [display] Set the field's appearance. When not including multiple, you can set this as either "radio" or "select". When multiple is set to true, you can set this as either "checkbox" or "select".
 * @property {Array<Object>} [choices] Array of value and label pairs. Values listed first.
 * @property {Object} [default] Sets the default selected value from the choice array.
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & CHOISE_FIELDS} [fields]
 * @returns {Object}
 */
export function choice(name: string, label: string, fields?: (T.COMMON_FIELDS & CHOISE_FIELDS) | undefined): Object;
/**
 * @summary number field
 * @typedef {Object} NUMBER_FIELDS
 * @property {'slider'|'text'} [display]
 * @property {number} [step]
 * @property {number} [min]
 * @property {number} [max]
 * @property {string} [prefix]
 * @property {string} [suffix]
 * @property {string} [placeholder]
 * @property {number|null} [default]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & NUMBER_FIELDS} [fields]
 * @returns {Object}
 */
export function number(name: string, label: string, fields?: (T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & NUMBER_FIELDS) | undefined): Object;
/**
 * @summary Color field
 * @typedef {Object} COLOR_FIELDS
 * @property {Boolean} [show_opacity] Sets whether opacity input is shown. true: the opacity input is shown. false: the opacity input is hidden. If left undefined, opacity input will not display in email modules, but will display in other module types.
 * @property {Object} [default] Sets the default selected color and opacity.
 * @property {String} [default.color]
 * @property {Number} [default.opacity]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & COLOR_FIELDS} [fields]
 * @returns {Object}
 */
export function color(name: string, label: string, fields?: (T.COMMON_FIELDS & COLOR_FIELDS) | undefined): Object;
/**
 * @summary icon field
 * @typedef {Object} ICON_FIELDS
 * @property {'fontawesome-5.14.0'|'fontawesome-5.0.10'} [icon_set]
 * @property {Object} [default]
 * @property {string} [default.name]
 * @property {string} [default.unicode]
 * @property {string} [default.type]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & ICON_FIELDS} [fields]
 * @returns {Object}
 */
export function icon(name: string, label: string, fields?: (T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & ICON_FIELDS) | undefined): Object;
/**
 * @summary image field
 * @typedef {Object} IMAGE_FIELDS
 * @property {true|false} [responsive]
 * @property {true|false} [show_loading]
 * @property {true|false} [resizable]
 * @property {Object} [default]
 * @property {string} [default.size_type]
 * @property {string} [default.src]
 * @property {string} [default.alt]
 * @property {string} [default.loading]
 * @property {number} [default.width]
 * @property {number} [default.height]
 * @property {number} [default.max_width]
 * @property {number} [default.max_height]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & IMAGE_FIELDS} [fields]
 * @returns {Object}
 */
export function image(name: string, label: string, fields?: (T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & IMAGE_FIELDS) | undefined): Object;
import * as T from "./config/types.js";
//# sourceMappingURL=fields.d.ts.map