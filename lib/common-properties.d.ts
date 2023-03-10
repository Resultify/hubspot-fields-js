/**
 * @constructor
 * @summary HubSpot common properties
 * @description Properties used by all fields (content tab fields, style fields, group fields)
 * @param {T.COMMON_FIELDS} fields
 * @returns {Object}
 */
export function CommonFields(fields: T.COMMON_FIELDS): Object;
export class CommonFields {
    /**
     * @constructor
     * @summary HubSpot common properties
     * @description Properties used by all fields (content tab fields, style fields, group fields)
     * @param {T.COMMON_FIELDS} fields
     * @returns {Object}
     */
    constructor(fields: T.COMMON_FIELDS);
    name: string | undefined;
    label: string | undefined;
    type: string | undefined;
    id: string;
    required: boolean;
    locked: boolean;
    inline_help_text: string | undefined;
    help_text: string | undefined;
    display_width: "half_width" | null;
    visibility_rules: string | undefined;
    visibility: {
        controlling_field?: string | undefined;
        controlling_value_regex?: string | undefined;
        operator?: "NOT_EQUAL" | "EQUAL" | "EMPTY" | "NOT_EMPTY" | "MATCHES_REGEX" | undefined;
        property?: string | undefined;
    } | undefined;
    advanced_visibility: {
        boolean_operator?: "OR" | "AND" | undefined;
        criteria?: {
            controlling_field?: string | undefined;
            controlling_value_regex?: string | undefined;
            operator?: "NOT_EQUAL" | "EQUAL" | "EMPTY" | "NOT_EMPTY" | "MATCHES_REGEX" | undefined;
        }[] | undefined;
    } | undefined;
}
/**
 * @summary HubSpot common group properties
 * @description Properties used by all group fields on top of common fields
 * @param {T.COMMON_GROUP_FIELDS} [fields]
 * @returns {Object}
 */
export function CommonGroupFields(fields?: T.COMMON_GROUP_FIELDS | undefined): Object;
export class CommonGroupFields {
    /**
     * @summary HubSpot common group properties
     * @description Properties used by all group fields on top of common fields
     * @param {T.COMMON_GROUP_FIELDS} [fields]
     * @returns {Object}
     */
    constructor(fields?: T.COMMON_GROUP_FIELDS | undefined);
    expanded: boolean;
    children: Object[];
    tab: string | undefined;
    occurrence: {
        min?: number | null | undefined;
        max?: number | null | undefined;
        sorting_label_field?: string | null | undefined;
        default?: number | null | undefined;
    } | undefined;
}
/**
 * @summary HubSpot common content-tab properties
 * @description Properties used by all fields in content tab on top of common fields
 * @param {T.COMMON_CONTENT_FIELDS} [fields]
 * @returns {Object}
 */
export function CommonContentFields(fields?: T.COMMON_CONTENT_FIELDS | undefined): Object;
export class CommonContentFields {
    /**
     * @summary HubSpot common content-tab properties
     * @description Properties used by all fields in content tab on top of common fields
     * @param {T.COMMON_CONTENT_FIELDS} [fields]
     * @returns {Object}
     */
    constructor(fields?: T.COMMON_CONTENT_FIELDS | undefined);
    occurrence: {
        min?: number | null | undefined;
        max?: number | null | undefined;
        sorting_label_field?: string | null | undefined;
        default?: number | null | undefined;
    } | undefined;
}
import * as T from "./config/types.js";
//# sourceMappingURL=common-properties.d.ts.map