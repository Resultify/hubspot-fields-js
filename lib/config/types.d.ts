declare const _default: {};
export default _default;
export type COMMON_FIELDS = {
    /**
     * The field's name, which you'll reference when incorporating the field and its values in the module or theme. Cannot contain spaces or special characters.
     */
    name?: string | undefined;
    /**
     * The text the content creator sees describing the field. May contain spaces.
     */
    label?: string | undefined;
    /**
     * Sets whether the field can be left blank in the editor. If true, content cannot be published without a value in the field.
     */
    required?: boolean | undefined;
    id?: string | undefined;
    /**
     * Sets whether the field is editable in the content editor. If true, the field will not appear in the content editor.
     */
    locked?: boolean | undefined;
    /**
     * The type of field. Field types are unique per field and can be found within the documentation for each field below.
     */
    type?: string | undefined;
    /**
     * Text that displays inline below field's label (limit 400 characters). Best used for information required to use the field. You can include the following HTML tags (other tags will be ignored on render): a, b, br, em, i, p, small, strong, span.
     */
    inline_help_text?: string | undefined;
    /**
     * Text that displays in the editor within a tooltip on hover to assist the content creator (limit 300 characters). Best used for information that is supplementary but not required to use the field. You can include the following HTML tags (other tags will be ignored on render): a, b, br, em, i, p, small, strong, span.
     */
    help_text?: string | undefined;
    display_width?: "half_width" | null | undefined;
    visibility_rules?: "SIMPLE" | "ADVANCED" | undefined;
    /**
     * Sets the field's display conditions. For example, you can set a field to only display when another checkbox field has been selected
     */
    visibility?: {
        controlling_field?: string | undefined;
        controlling_value_regex?: string | undefined;
        operator?: "NOT_EQUAL" | "EQUAL" | "EMPTY" | "NOT_EMPTY" | "MATCHES_REGEX" | undefined;
        property?: string | undefined;
    } | undefined;
    advanced_visibility?: {
        boolean_operator?: "OR" | "AND" | undefined;
        criteria?: {
            controlling_field?: string | undefined;
            controlling_value_regex?: string | undefined;
            operator?: "NOT_EQUAL" | "EQUAL" | "EMPTY" | "NOT_EMPTY" | "MATCHES_REGEX" | undefined;
        }[] | undefined;
    } | undefined;
};
export type COMMON_GROUP_FIELDS = {
    tab?: string | undefined;
    children?: Object[] | undefined;
    expanded?: boolean | undefined;
    occurrence?: {
        min?: number | null | undefined;
        max?: number | null | undefined;
        sorting_label_field?: string | null | undefined;
        default?: number | null | undefined;
    } | undefined;
    default?: Object | undefined;
};
export type COMMON_CONTENT_FIELDS = {
    occurrence?: {
        min?: number | null | undefined;
        max?: number | null | undefined;
        sorting_label_field?: string | null | undefined;
        default?: number | null | undefined;
    } | undefined;
};
//# sourceMappingURL=types.d.ts.map