export type TEXT_FIELDS = {
    validation_regex?: string | undefined;
    allow_new_line?: boolean | undefined;
    show_emoji_picker?: boolean | undefined;
    placeholder?: string | undefined;
    default?: string | undefined;
};
export type LINK_FIELDS = {
    supported_types?: ("EXTERNAL" | "CONTENT" | "FILE" | "EMAIL_ADDRESS" | "BLOG" | "CALL_TO_ACTION")[] | undefined;
    show_advanced_rel_options?: boolean | undefined;
    default?: {
        url?: {
            content_id?: string | undefined;
            type?: string | undefined;
            href?: string | undefined;
        } | undefined;
        open_in_new_tab?: boolean | undefined;
        no_follow?: boolean | undefined;
        sponsored?: boolean | undefined;
        user_generated_content?: boolean | undefined;
    } | undefined;
};
export type RICHTEXT_FIELDS = {
    enabled_features?: string[] | undefined;
    default?: string | undefined;
};
export type URL_FIELDS = {
    supported_types?: ("EXTERNAL" | "CONTENT" | "FILE" | "EMAIL_ADDRESS" | "BLOG" | "CALL_TO_ACTION")[] | undefined;
    default?: {
        content_id?: string | undefined;
        type?: string | undefined;
        href?: string | undefined;
    } | undefined;
};
/**
 * @summary Text field
 * @typedef {Object} TEXT_FIELDS
 * @property {string} [validation_regex]
 * @property {true|false} [allow_new_line]
 * @property {true|false} [show_emoji_picker]
 * @property {string} [placeholder]
 * @property {string} [default]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & TEXT_FIELDS | undefined} [fields]
 * @returns {Object}
 */
export function text(name: string, label: string, fields?: (T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & TEXT_FIELDS) | undefined): Object;
/**
 * @summary Link field
 * @typedef {Object} LINK_FIELDS
 * @property {Array<'EXTERNAL'|'CONTENT'|'FILE'|'EMAIL_ADDRESS'|'BLOG'|'CALL_TO_ACTION'>} [supported_types]
 * @property {true|false} [show_advanced_rel_options]
 * @property {Object} [default]
 * @property {Object} [default.url]
 * @property {string} [default.url.content_id]
 * @property {string} [default.url.type]
 * @property {string} [default.url.href]
 * @property {true|false} [default.open_in_new_tab]
 * @property {true|false} [default.no_follow]
 * @property {true|false} [default.sponsored]
 * @property {true|false} [default.user_generated_content]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & LINK_FIELDS} [fields]
 * @returns {Object}
 */
export function link(name: string, label: string, fields?: (T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & LINK_FIELDS) | undefined): Object;
/**
 * @summary richtext field
 * @typedef {Object} RICHTEXT_FIELDS
 * @property {Array<string>} [enabled_features]
 * @property {string} [default]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & RICHTEXT_FIELDS} [fields]
 * @returns {Object}
 */
export function richtext(name: string, label: string, fields?: (T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & RICHTEXT_FIELDS) | undefined): Object;
/**
 * @summary url field
 * @typedef {Object} URL_FIELDS
 * @property {Array<'EXTERNAL'|'CONTENT'|'FILE'|'EMAIL_ADDRESS'|'BLOG'|'CALL_TO_ACTION'>} [supported_types]
 * @property {Object} [default]
 * @property {string} [default.content_id]
 * @property {string} [default.type]
 * @property {string} [default.href]
 * @param {string} name
 * @param {string} label
 * @param {T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & URL_FIELDS} [fields]
 * @returns {Object}
 */
export function url(name: string, label: string, fields?: (T.COMMON_FIELDS & T.COMMON_CONTENT_FIELDS & URL_FIELDS) | undefined): Object;
import * as T from "./config/types.js";
//# sourceMappingURL=content-tab-fields.d.ts.map