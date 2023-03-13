export type ALIGNMENT_FIELDS = {
    /**
     * Determines if only horizontal, only vertical, or both alignment controls should be shown
     */
    alignment_direction?: "HORIZONTAL" | "VERTICAL" | "BOTH" | undefined;
    default?: {
        vertical_align?: "BOTTOM" | "MIDDLE" | "TOP" | undefined;
        horizontal_align?: "LEFT" | "CENTER" | "RIGHT" | undefined;
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
        margin?: {
            top?: {
                value: number | null;
                units: 'px' | null;
            } | undefined;
            bottom?: {
                value: number | null;
                units: 'px' | null;
            } | undefined;
        } | undefined;
        padding?: {
            top?: {
                value: number | null;
                units: 'px' | null;
            } | undefined;
            bottom?: {
                value: number | null;
                units: 'px' | null;
            } | undefined;
            left?: {
                value: number | null;
                units: 'px' | null;
            } | undefined;
            right?: {
                value: number | null;
                units: 'px' | null;
            } | undefined;
        } | undefined;
    } | undefined;
};
export type TEXT_STYLES = {
    "text-decoration"?: "underline" | "none" | undefined;
    "font-style"?: "italic" | undefined;
    "font-weight"?: "bold" | undefined;
};
export type FONT_FIELDS = {
    /**
     * HubSpot automatically loads the selected web font to the page if the font is selected and referenced by HubL in a stylesheet or in a module. Set this to false, if you are already loading the font to the page, that way the font won't load twice.
     */
    load_external_fonts?: boolean | undefined;
    default?: {
        font: string;
        fallback: 'sans-serif' | 'serif' | null;
        variant?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "100italic" | "200italic" | "300italic" | "400italic" | "500italic" | "600italic" | "700italic" | "800italic" | "900italic" | null | undefined;
        font_set: 'GOOGLE' | 'DEFAULT';
        styles?: TEXT_STYLES | undefined;
        size?: number | undefined;
        color?: string | undefined;
        size_unit: 'rem' | 'px' | 'em' | 'rem' | '%' | 'ex' | 'ch';
    } | undefined;
};
export type GRADIENT_FIELDS = {
    default?: {
        side_or_corner?: {
            verticalSide: 'TOP' | 'BOTTOM' | null;
            horizontalSide: 'LEFT' | 'RIGHT' | null;
        } | undefined;
        colors?: {
            color: {
                r: number;
                g: number;
                b: number;
                a: number;
            };
        }[] | undefined;
    } | undefined;
};
export type BACKGROUNDIMAGE_FIELDS = {
    default?: {
        src: string;
        background_position: 'TOP_LEFT' | 'TOP_CENTER' | 'TOP_RIGHT' | 'MIDDLE_LEFT' | 'MIDDLE_CENTER' | 'MIDDLE_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_CENTER' | "BOTTOM_RIGHT";
        background_size: 'cover' | 'contain' | 'auto';
    } | undefined;
};
export type BORDER_FIELDS = {
    allow_custom_border_sides?: boolean | undefined;
    default?: {
        top?: {
            width: {
                value: number;
                units: 'px';
            };
            opacity: number;
            style: 'solid' | 'double' | 'dotted' | 'dashed';
            color: string;
        } | undefined;
        bottom?: {
            width: {
                value: number;
                units: 'px';
            };
            opacity: number;
            style: 'solid' | 'double' | 'dotted' | 'dashed';
            color: string;
        } | undefined;
        left?: {
            width: {
                value: number;
                units: 'px';
            };
            opacity: number;
            style: 'solid' | 'double' | 'dotted' | 'dashed';
            color: string;
        } | undefined;
        right?: {
            width: {
                value: number;
                units: 'px';
            };
            opacity: number;
            style: 'solid' | 'double' | 'dotted' | 'dashed';
            color: string;
        } | undefined;
    } | undefined;
};
export type TEXTALIGNMENT_FIELDS = {
    default?: {
        text_align?: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFY" | undefined;
    } | undefined;
};
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
export function alignment(name: string, label: string, fields?: (T.COMMON_FIELDS & ALIGNMENT_FIELDS) | undefined): Object;
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
export function spacing(name: string, label: string, fields?: (T.COMMON_FIELDS & SPACING_FIELDS) | undefined): Object;
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
export function font(name: string, label: string, fields?: (T.COMMON_FIELDS & FONT_FIELDS) | undefined): Object;
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
export function gradient(name: string, label: string, fields?: (T.COMMON_FIELDS & GRADIENT_FIELDS) | undefined): Object;
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
export function backgroundimage(name: string, label: string, fields?: (T.COMMON_FIELDS & BACKGROUNDIMAGE_FIELDS) | undefined): Object;
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
export function border(name: string, label: string, fields?: (T.COMMON_FIELDS & BORDER_FIELDS) | undefined): Object;
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
export function textalignment(name: string, label: string, fields?: (T.COMMON_FIELDS & TEXTALIGNMENT_FIELDS) | undefined): Object;
import * as T from "./config/types.js";
//# sourceMappingURL=style-tab-fields.d.ts.map