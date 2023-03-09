export type ALIGNMENT_FIELDS = {
    /**
     * Determines if only horizontal, only vertical, or both alignment controls should be shown
     */
    alignment_direction?: "HORIZONTAL" | "VERTICAL" | "BOTH" | undefined;
    default?: {
        horizontal_align?: "LEFT" | "CENTER" | "RIGHT" | undefined;
        show_emoji_picker?: "LEFT" | "CENTER" | "RIGHT" | undefined;
    } | undefined;
};
export type SPACING_FIELDS = {
    /**
     * Sets the guidelines for min and max amount of spacing.
     */
    limits?: {
        padding?: Object | undefined;
        margin?: Object | undefined;
    } | undefined;
    /**
     * Sets the default spacing values.
     */
    default?: {
        padding?: Object | undefined;
    } | undefined;
    defaultmargin?: Object | undefined;
};
export type FONT_FIELDS = {
    /**
     * HubSpot automatically loads the selected web font to the page if the font is selected and referenced by HubL in a stylesheet or in a module. Set this to false, if you are already loading the font to the page, that way the font won't load twice.
     */
    load_external_fonts?: boolean | undefined;
    variant?: boolean | undefined;
    default?: {
        size?: number | undefined;
        font?: string | undefined;
        font_set?: string | undefined;
        size_unit?: string | undefined;
        color?: string | undefined;
        styles?: string | undefined;
    } | undefined;
};
/**
 * @summary Alignment field
 * @typedef {Object} ALIGNMENT_FIELDS
 * @property {'HORIZONTAL'|'VERTICAL'|'BOTH'} [alignment_direction] Determines if only horizontal, only vertical, or both alignment controls should be shown
 * @property {Object} [default]
 * @property {'LEFT'|'CENTER'|'RIGHT'} [default.horizontal_align]
 * @property {'LEFT'|'CENTER'|'RIGHT'} [default.show_emoji_picker]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & ALIGNMENT_FIELDS} [fields]
 * @returns {Object}
 */
export function alignment(name: string, label: string, fields?: (T.COMMON_FIELDS & ALIGNMENT_FIELDS) | undefined): Object;
/**
 * @summary Spacing field
 * @typedef {Object} SPACING_FIELDS
 * @property {Object} [limits] Sets the guidelines for min and max amount of spacing.
 * @property {Object} [limits.padding]
 * @property {Object} [limits.margin]
 * @property {Object} [default] Sets the default spacing values.
 * @property {Object} [default.padding]
 * @property {Object} [defaultmargin]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & SPACING_FIELDS} [fields]
 * @returns {Object}
 */
export function spacing(name: string, label: string, fields?: (T.COMMON_FIELDS & SPACING_FIELDS) | undefined): Object;
/**
 * @summary font field
 * @typedef {Object} FONT_FIELDS
 * @property {Boolean} [load_external_fonts] HubSpot automatically loads the selected web font to the page if the font is selected and referenced by HubL in a stylesheet or in a module. Set this to false, if you are already loading the font to the page, that way the font won't load twice.
 * @property {Boolean} [variant]
 * @property {Object} [default]
 * @property {Number} [default.size]
 * @property {String} [default.font]
 * @property {String} [default.font_set]
 * @property {String} [default.size_unit]
 * @property {String} [default.color]
 * @property {String} [default.styles]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & FONT_FIELDS} [fields]
 * @returns {Object}
 */
export function font(name: string, label: string, fields?: (T.COMMON_FIELDS & FONT_FIELDS) | undefined): Object;
import * as T from "./config/types.js";
//# sourceMappingURL=style-tab-fields.d.ts.map