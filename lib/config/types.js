/**
 * #### HubSpot module editor options
 * @typedef {Object} EDITOR_OPTIONS
 * @property {boolean} [required=false] `false` Sets whether the field can be left blank in the editor. If true, content cannot be published without a value in the field.
 * @property {boolean} [locked=false] `false` Sets whether the field is editable in the content editor. If true, the field will not appear in the content editor.
 * @property {string} [help_text] Text that displays in the editor within a tooltip on hover to assist the content creator (limit 300 characters). Best used for information that is supplementary but not required to use the field. You can include the following HTML tags (other tags will be ignored on render): a, b, br, em, i, p, small, strong, span.
 * @property {string} [inline_help_text] Text that displays inline below field's label (limit 400 characters). Best used for information required to use the field. You can include the following HTML tags (other tags will be ignored on render): a, b, br, em, i, p, small, strong, span.
 * @property {null|'half_width'} [display_width=full_width] `full_width` By default, fields are full-width in the editor.
 */

/**
 * #### Display conditions
 * @description Occasionally, you may want to show a field or field group, but only under specfic conditions. Examples might include: `Address fields that correspond to a specific country` or `An image description that is only entered after an image is selected`
 * @typedef {Object} DISPLAY_CONDITIONS
 * @property {Object} [visibility] Sets the field's display conditions. For example, you can set a field to only display when another checkbox field has been selected
 * @property {?string} [visibility.controlling_field_path] The path of the field that controls the display condition. If the field is not nested inside a field group, use the field's name (i.e. `field_name`). For fields nested in groups, the path should match its grouping structure, separated by a period. For example: `field_group_name.field_name` or `parent_group.child_group.field_name`
 * @property {?string} [visibility.controlling_value_regex] The regular expression in the controlling field that needs to be present for the field to display. The regex must match the entire string (not a subset) and is run case-sensitively.
 * @property {'NOT_EQUAL'|'EQUAL'|'EMPTY'|'NOT_EMPTY'|'MATCHES_REGEX'} [visibility.operator=EMPTY] `EMPTY` The operator that defines how the `controlling_value_regex` value needs to be met
 * @property {?string} [visibility.property] Sets visibility based on a specific property of the target field. For example, you can enable visibility when an image field's src property is equal to a specific value. By default, if no value is provided for this field, visibility is based on the stringified value of `controlling_value_regex`.
 * @property {Object} [advanced_visibility] To include multiple criteria with multiple operators, as well as order of operations, you can use advanced_visibility.
 * @property {'OR'|'AND'} [advanced_visibility.boolean_operator=OR] `OR` The boolean operator for the conditional criteria. Can be `AND` or `OR`
 * @property {Object[]} [advanced_visibility.criteria] An array of visibility objects that defines the conditional criteria that needs to be met for the field to display.
 * @property {string} [advanced_visibility.criteria[].controlling_field_path] The path of the field that controls the display condition.
 * @property {string} [advanced_visibility.criteria[].controlling_value_regex] The value in the controlling field that needs to be met to display the field.
 * @property {'NOT_EQUAL'|'EQUAL'|'EMPTY'|'NOT_EMPTY'|'MATCHES_REGEX'} [advanced_visibility.criteria[].operator] The operator that defines how the `controlling_value_regex` value needs to be met.
 */

/**
 * #### Repeater options
 * @description Repeaters are fields and groups that can create multiple objects and display them using a for loop. Examples might include: `A gallery of multiple slides`, `A collection of testimonials`, `A group of staff head shots`
 * @typedef {Object} REPEATER_OPTIONS
 * @property {Object} [occurrence] To make the editing experience better and prevent content editors from providing values that you have not programmatically accommodated for, we allow you to set minimum and maximum values for how many items content creators can add to a repeating field or repeating group. Keep `occurrence` object empty to just enable a feature - `repeater_options: {occurrence: {}}`
 * @property {?number} [occurrence.min] Minimum number of occurrences of this field group. Prevents users from having less than this number of items in the UI.
 * @property {?number} [occurrence.max] Maximum number of occurrences of this group. Prevents the content creator from adding more than this number of items in the UI.
 */

/**
 * #### Repeater options with defaults
 * @description Repeaters are fields and groups that can create multiple objects and display them using a for loop. Examples might include: `A gallery of multiple slides`, `A collection of testimonials`, `A group of staff head shots`
 * @typedef {Object} REPEATER_OPTIONS_DEFAULT
 * @property {Object} occurrence To make the editing experience better and prevent content editors from providing values that you have not programmatically accommodated for, we allow you to set minimum and maximum values for how many items content creators can add to a repeating field or repeating group
 * @property {?number} [occurrence.min] Minimum number of occurrences of this field group. Prevents users from having less than this number of items in the UI.
 * @property {?number} [occurrence.max] Maximum number of occurrences of this group. Prevents the content creator from adding more than this number of items in the UI.
 * @property {?number} occurrence.default The default number of items to show in the UI when the field is first added to the module.
 * @property {Array<number|string|Object>} default default group values. If `occurrence.default` defined this should be an array of objects|strings|numbers
 */

/**
 * #### Required module fields
 * @typedef {Object} REQUIRED_FIELDS
 * @property {string} id
 * @property {string} name
 * @property {string} label
 * @property {string} type
 */

/**
 * #### Required group module fields
 * @typedef {Object} REQUIRED_GROUP_FIELDS
 * @property {string} id
 * @property {string} name
 * @property {string} label
 * @property {string} type
 * @property {string} [tab]
 * @property {Array<REQUIRED_GROUP_FIELDS>} children
 */

/**
 * #### Style group fields
 * @typedef {Object} REQUIRED_STYLE_GROUP_FIELDS
 * @property {string} id
 * @property {string} name
 * @property {string} label
 * @property {boolean} locked
 * @property {'STYLE'} [tab]
 * @property {'group'} [type]
 * @property {Array<Object>} children
 */

export default {}
