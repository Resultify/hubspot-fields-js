/**
 * @summary HubSpot common properties
 * @description Properties used by all fields (content tab fields, style fields, group fields)
 * @exports COMMON_FIELDS
 * @typedef {Object} COMMON_FIELDS
 * @property {string} [name] `skip` The field's name, which you'll reference when incorporating the field and its values in the module or theme. Cannot contain spaces or special characters.
 * @property {string} [label] `skip` The text the content creator sees describing the field. May contain spaces.
 * @property {boolean} [required] `false` Sets whether the field can be left blank in the editor. If true, content cannot be published without a value in the field.
 * @property {string} [id] `skip` It will be added automatically based on field and parents names
 * @property {boolean} [locked] `false` Sets whether the field is editable in the content editor. If true, the field will not appear in the content editor.
 * @property {string} [type] `skip` It will be added automatically
 * @property {string} [inline_help_text] Text that displays inline below field's label (limit 400 characters). Best used for information required to use the field. You can include the following HTML tags (other tags will be ignored on render): a, b, br, em, i, p, small, strong, span.
 * @property {string} [help_text] Text that displays in the editor within a tooltip on hover to assist the content creator (limit 300 characters). Best used for information that is supplementary but not required to use the field. You can include the following HTML tags (other tags will be ignored on render): a, b, br, em, i, p, small, strong, span.
 * @property {null|'half_width'} [display_width] `full_width` By default, fields are full-width in the editor.
 * @property {'SIMPLE'|'ADVANCED'} [visibility_rules] `skip` It will be added automatically based on visibility and advanced_visibility
 * @property {Object} [visibility] Sets the field's display conditions. For example, you can set a field to only display when another checkbox field has been selected
 * @property {String} [visibility.controlling_field] The path of the field that controls the display condition.
 * @property {String} [visibility.controlling_value_regex] The regular expression in the controlling field that needs to be present for the field to display. The regex must match the entire string (not a subset) and is run case-sensitively.
 * @property {'NOT_EQUAL'|'EQUAL'|'EMPTY'|'NOT_EMPTY'|'MATCHES_REGEX'} [visibility.operator] `EMPTY` The operator that defines how the controlling_value_regex value needs to be met
 * @property {String} [visibility.property] Sets visibility based on a specific property of the target field. For example, you can enable visibility when an image field's src property is equal to a specific value. By default, if no value is provided for this field, visibility is based on the stringified value of controlling_value_regex.
 * @property {Object} [advanced_visibility] To include multiple criteria with multiple operators, as well as order of operations, you can use advanced_visibility.
 * @property {'OR'|'AND'} [advanced_visibility.boolean_operator] `OR` The boolean operator for the conditional criteria. Can be AND or OR
 * @property {Object[]} [advanced_visibility.criteria] An array of visibility objects that defines the conditional criteria that needs to be met for the field to display.
 * @property {String} [advanced_visibility.criteria[].controlling_field] The path of the field that controls the display condition.
 * @property {String} [advanced_visibility.criteria[].controlling_value_regex] The value in the controlling field that needs to be met to display the field.
 * @property {'NOT_EQUAL'|'EQUAL'|'EMPTY'|'NOT_EMPTY'|'MATCHES_REGEX'} [advanced_visibility.criteria[].operator] The operator that defines how the `controlling_value_regex` value needs to be met.
 * @memberof Global_fields
 */

/**
 * @summary HubSpot common group properties
 * @description Properties used by all group fields on top of common fields
 * @exports COMMON_GROUP_FIELDS
 * @typedef {Object} COMMON_GROUP_FIELDS
 * @property {string} [tab] `skip` It will be added automatically
 * @property {Array<Object>} [children] `skip` It will be added constructed automatically
 * @property {boolean} [expanded] `false` Field groups can be set to be expanded by default by setting the expanded boolean property to true
 * @property {Object} [occurrence] Repeating groups are field groups with the repeating option enabled. Repeating groups allow content creators to add, remove, and re-arrange groups of fields.
 * @property {null|number} [occurrence.min] Minimum number of occurrences of this field group. Prevents users from having less than this number of items in the UI.
 * @property {null|number} [occurrence.max] Maximum number of occurrences of this group. Prevents the content creator from adding more than this number of items in the UI.
 * @property {null|string} [occurrence.sorting_label_field] This is the field id, of the field to pull text from to show in the UI on the draggable cards. The default for this is the first field in the group.
 * @property {null|number} [occurrence.default]
 * @property {Object} [default]
 * @memberof Global_fields
 */

/**
 * @summary HubSpot common content-tab properties
 * @description Properties used by all fields in content tab on top of common fields
 * @exports COMMON_CONTENT_FIELDS
 * @typedef {Object} COMMON_CONTENT_FIELDS
 * @property {Object} [occurrence] To make the editing experience better and prevent content editors from providing values that you have not programmatically accommodated for, we allow you to set minimum and maximum values for how many items content creators can add to a repeating field or repeating group
 * @property {null|number} [occurrence.min] Minimum number of occurrences of this field group. Prevents users from having less than this number of items in the UI.
 * @property {null|number} [occurrence.max] Maximum number of occurrences of this group. Prevents the content creator from adding more than this number of items in the UI.
 * @property {null|string} [occurrence.sorting_label_field] This is the field id, of the field to pull text from to show in the UI on the draggable cards. The default for this is the first field in the group.
 * @property {null|number} [occurrence.default]
 * @memberof Global_fields
 */

export default {}
