/**
 * #### Required module/group fields
 * @typedef {Object} COMMON_FIELDS
 * @property {string} name
 * @property {string} label
 * @property {string} type
 * @property {string} [tab]
 * @property {Array<COMMON_FIELDS>} [children]
 */

/**
 * #### CSS unit
 * @typedef {'px'|'pt'|'em'|'rem'|'%'|'ex'|'ch'|'vh'|'vmax'|'vmin'|'vw'} CSS_UNIT
 */

/**
 * #### Hidden subfields properties
 * @memberof Types
 * @typedef {Object} HIDDEN_SUBFIELDS
 * @property {boolean} [margin]
 * @property {boolean} [padding]
 * @property {boolean} [bold]
 * @property {boolean} [italic]
 * @property {boolean} [underline]
 * @property {boolean} [color]
 * @property {boolean} [size]
 */

/**
 * #### Advanced visibility criteria
 * @memberof Types
 * @typedef {Object} ADVANCED_VISIBILITY_CRITERIA
 * @property {string} [controlling_field_path] Path of the field that controls the display condition
 * @property {'NOT_EQUAL'|'EQUAL'|'EMPTY'|'NOT_EMPTY'|'MATCHES_REGEX'} operator
 * @property {string} [controlling_value_regex] The regular expression in the controlling field that needs to be present for the field to display.
 * @property {string} [property] Sets visibility based on a specific property (`src`, `name`)
 */

/**
 * #### Advanced visibility
 * @memberof Types
 * @typedef {Object} ADVANCED_VISIBILITY
 * @property {'AND'|'OR'} boolean_operator `OR` The boolean operator for the conditional criteria. Can be `AND` or `OR`
 * @property {Array<ADVANCED_VISIBILITY_CRITERIA>} [advanced_visibility.criteria] An array of visibility objects that defines the conditional criteria that needs to be met for the field to display.
 * @property {Array<ADVANCED_VISIBILITY>} [advanced_visibility.children]
 */

/**
 * #### Base field properties
 * @memberof Types
 * @typedef {Object} BASE_FIELDS
 * @property {'half_width'} [display_width] Side by side fields
 * @property {string} [help_text] Display help text
 * @property {?string} [inline_help_text] Display help text inline
 * @property {boolean} [required] Make the field required
 * @property {boolean} [locked] Hide the field from the user
 * @property {Object} [inherited_value] Inherited value options
 * @property {string} [inherited_value.default_value_path]
 * @property {Object} [inherited_value.property_value_paths]
 * @property {string} [inherited_value.property_value_paths.color]
 * @property {Object} [occurrence] Repeated fields options
 * @property {number} [occurrence.min] Minimum number of repeated fields
 * @property {?number} [occurrence.max] Maximum number of repeated fields
 * @property {string} [occurrence.sorting_label_field] Field to sort the repeated fields
 * @property {?number} [occurrence.default] Default number of repeated fields
 * @property {Object} [visibility] Display conditions
 * @property {?string} [visibility.controlling_field_path] Path of the field that controls the display condition
 * @property {?string} [visibility.controlling_value_regex] The regular expression in the controlling field that needs to be present for the field to display.
 * @property {'NOT_EQUAL'|'EQUAL'|'EMPTY'|'NOT_EMPTY'|'MATCHES_REGEX'|null} [visibility.operator]
 * @property {?string} [visibility.property] Sets visibility based on a specific property (`src`, `name`)
 * @property {HIDDEN_SUBFIELDS} [visibility.hidden_subfields] Hide subfields of a field. For example, you can hide the margin from spacing field and show only the padding. Ony works for Theme settings fields.
 * @property {'ADVANCED'} [visibility_rules]
 * @property {ADVANCED_VISIBILITY} [advanced_visibility] To include multiple criteria with multiple operators, as well as order of operations, you can use advanced_visibility.
 */

/**
 * #### Group field properties
 * @memberof Types
 * @typedef {Object} GROUP_FIELD
 * @property {boolean} [expanded] Show the group expanded
 * @property {Array<any>|Object} [default]
 */

// ========================
// General module fields
// ========================
/**
 * #### boolean field properties
 * @memberof Types
 * @typedef {Object} BOOLEAN_FIELD
 * @property {boolean} [default]
 * @property {'toggle'|'checkbox'} [display]
 */

/**
 * #### choice field properties
 * @memberof Types
 * @typedef {Object} CHOICE_FIELD
 * @property {Array<string[]>} choices
 * @property {string|number|Array<string|number>} [default]
 * @property {'radio'|'select'|'checkbox'} [display]
 * @property {boolean} [multiple]
 * @property {boolean} [reordering_enabled]
 * @property {string} [placeholder]
 * @property {string} [preset] https://developers.hubspot.com/beta-docs/reference/cms/fields/module-theme-fields#choice-button-presets
 */

/**
 * #### number field properties
 * @memberof Types
 * @typedef {Object} NUMBER_FIELD
 * @property {number|number[]|null} [default]
 * @property {string} [prefix]
 * @property {string} [suffix]
 * @property {number} [min]
 * @property {number} [max]
 * @property {number} [step]
 * @property {'text'|'slider'} [display]
 * @property {'ANY'|'INTEGER'} [format]
 * @property {string} [placeholder]
*/

/**
 * #### color field properties
 * @memberof Types
 * @typedef {Object} COLOR_FIELD
 * @property {boolean} [show_opacity]
 * @property {Object|Array<Object>} [default]
 * @property {string} [default.color]
 * @property {string} [default.css]
 * @property {string} [default.hex]
 * @property {number} [default.opacity]
 * @property {string} [default.rgb]
 * @property {string} [default.rgba]
 */

/**
 * #### icon field properties
 * @memberof Types
 * @typedef {Object} ICON_FIELD
 * @property {'fontawesome-5'|'fontawesome-5.0.10'|'fontawesome-5.14.0'|'fontawesome-6.4.2'} [set]
 * @property {Object} [default]
 * @property {string} [default.name]
 * @property {'SOLID'|'REGULAR'} [default.type]
 * @property {string} [default.unicode]
 */

/**
 * #### image field properties
 * @memberof Types
 * @typedef {Object} IMAGE_FIELD
 * @property {boolean} [resizable]
 * @property {boolean} [responsive]
 * @property {boolean} [show_loading]
 * @property {Object} [default]
 * @property {string} [default.src]
 * @property {string} [default.alt]
 * @property {number} [default.width]
 * @property {number} [default.height]
 * @property {number} [default.max_width]
 * @property {number} [default.max_height]
 * @property {'auto'|'auto_custom_max'|'auto_full_width'|'exact'} [default.size_type]
 * @property {'disabled'|'eager'|'lazy'} [default.loading]
 */

/**
 * #### FontVariants field properties
 * @memberof Types
 * @typedef {'100'|'100i'|'200'|'200i'|'300'|'300i'|'400'|'400i'|'500'|'500i'|'600'|'600i'|'700'|'700i'|'800'|'800i'|'900'|'900i'} FONT_VARIANTS_FIELD
 */

/**
 * @typedef {Object} TEXT_STYLES
 * @property {'underline'|'none'} [`text-decoration`]
 * @property {'italic'|'normal'} [`font-style`]
 * @property {'bold'|'normal'} [`font-weight`]
 */

/**
 * #### font field properties
 * @memberof Types
 * @typedef {Object} FONT_FIELD
 * @property {boolean} [load_external_fonts]
 * @property {Object} [default]
 * @property {string} default.font
 * @property {'DEFAULT'|'GOOGLE'|'CUSTOM'} [default.font_set]
 * @property {Array<FONT_VARIANTS_FIELD>} [default.google_font_variants]
 * @property {number} [default.size]
 * @property {CSS_UNIT} [default.size_unit]
 * @property {string} [default.color]
 * @property {TEXT_STYLES} [default.styles]
 * @property {string} [default.variant]
 * @property {string} [default.fallback]
 */

// ========================
// Content module fields
// ========================
/**
 * #### Text field properties
 * @memberof Types
 * @typedef {Object} TEXT_FIELD
 * @property {string} [default]
 * @property {string} [validation_regex] Regular expression to validate the field
 * @property {string} [validation_error_message] Error message to display when the field does not match the regular expression
 * @property {string} [placeholder] Placeholder text
 * @property {boolean} [allow_new_line] Allow new line
 * @property {boolean} [show_emoji_picker] Show emoji picker
 */

/**
 * #### URL types
 * @memberof Types
 * @typedef {'EXTERNAL' | 'CONTENT' | 'FILE' | 'EMAIL_ADDRESS' | 'BLOG' | 'CALL_TO_ACTION' | 'WHATSAPP_NUMBER' | 'PHONE_NUMBER' | 'PAYMENT'} URL_TYPES
 */

/**
 * #### link field properties
 * @memberof Types
 * @typedef {Object} LINK_FIELD
 * @property {string} [placeholder]
 * @property {boolean} [show_advanced_rel_options]
 * @property {Array<URL_TYPES>} [supported_types]
 * @property {Object} [default]
 * @property {Object} [default.url]
 * @property {URL_TYPES} [default.url.type]
 * @property {number} [default.url.content_id]
 * @property {string} [default.url.href]
 * @property {boolean} [default.open_in_new_tab]
 * @property {boolean} [default.no_follow]
 * @property {boolean} [default.sponsored]
 * @property {boolean} [default.user_generated_content]
 */

/**
 * #### RichTextFeatures field properties
 * @memberof Types
 * @typedef {'block'|'font_family'|'font_size'|'bold'|'italic'|'underline'|'text_color'|'background_color'|'alignment'|'bulleted_list'|'numbered_list'|'lineheight'|'outdent'|'indent'|'strikethrough'|'superscript'|'subscript'|'code_format'|'link'|'image'|'emoji'|'personalize'|'cta'|'embed'|'video'|'table'|'charmap'|'anchor'|'hr'|'nonbreaking_space'|'source_code'|'visual_blocks'|'colors'|'fonts'|'indents'|'lists'|'standard_emphasis'|'advanced_emphasis'} RICH_TEXT_FEATURES
 */

/**
 * #### richtext field properties
 * @memberof Types
 * @typedef {Object} RICHTEXT_FIELD
 * @property {string} [default]
 * @property {Array<RICH_TEXT_FEATURES>} [enabled_features]
 */

/**
 * #### url field properties
 * @memberof Types
 * @typedef {Object} URL_FIELD
 * @property {Array<URL_TYPES>} supportedTypes
 * @property {Object} [default]
 * @property {URL_TYPES} [default.type]
 * @property {string} [default.href]
 * @property {number} [default.content_id]
 * @property {Array<URL_TYPES>} [default.supported_types]
 */

/**
 * #### video field properties
 * @memberof Types
 * @typedef {Object} VIDEO_FIELD
 * @property {boolean} [resizable]
 * @property {boolean} [show_advanced_options]
 * @property {boolean} [show_preview]
 * @property {Object} [default]
 * @property {number} [default.player_id]
 * @property {number} [default.width]
 * @property {number} [default.height]
 * @property {number} [default.max_width]
 * @property {number} [default.max_height]
 * @property {'exact'|'auto'|'auto_custom_max'|'auto_full_width'} [default.size_type]
 * @property {string} [default.player_type]
 * @property {boolean} [default.loop_video]
 * @property {boolean} [default.mute_by_default]
 * @property {boolean} [default.autoplay]
 * @property {boolean} [default.hide_controls]
 * @property {any} [default.conversion_asset]
 */

/**
 * #### Date field properties
 * @memberof Types
 * @typedef {Object} DATE_FIELD
 * @property {number} [default]
 */

/**
 * #### DataAndTime field properties
 * @memberof Types
 * @typedef {Object} DATA_AND_TIME_FIELD
 * @property {number} [default]
 * @property {number} [step]
 */

/**
 * #### Embeded field properties
 * @memberof Types
 * @typedef {Object} EMBEDED_FIELD
  * @property {Array<'oembed'|'html'|'media_bridge'>} [supported_source_types]
  * @property {Array<'photo'|'video'|'link'|'rich'>} [supported_oembed_types]
  * @property {Array<number>} [supported_media_bridge_providers]
  * @property {boolean} [resizable]
  * @property {boolean} [show_preview]
  * @property {Object} [default]
  * @property {'oembed'|'html'|'media_bridge'} [default.source_type]
  * @property {string} [default.oembed_string]
  * @property {Object} [default.oembed_response]
  * @property {'auto'|'auto_custom_max'|'auto_full_width'|'exact'} [default.size_type]
  * @property {number} [default.width]
  * @property {number} [default.height]
  * @property {number} [default.max_width]
  * @property {number} [default.max_height]
  * @property {string} [default.embed_type]
  * @property {Object} [default.media_bridge_object]
 */

/**
 * #### Simple menu field properties
 * @memberof Types
 * @typedef {Object} SIMPLE_MENU_FIELD
 * @property {Array<{}>} [default]
 */

/**
 * #### Blog field properties
 * @memberof Types
 * @typedef {Object} BLOG_FIELD
 * @property {string} [placeholder]
 * @property {number|Array<number>} [default]
 */

/**
 * #### CRMobject field properties
 * @memberof Types
 * @typedef {Object} CRM_OBJECT_FIELD
 * @property {'COMPANY'|'CONTACT'|'TICKET'|'QUOTE'|'PRODUCT'|'MARKETING EVENT'|'DEAL'} object_type
 * @property {Array<string>} [properties_to_fetch]
 * @property {string} [displayFormat]
 * @property {Array<string>} [display_properties]
 * @property {string} [placeholder]
 * @property {Object} [default]
 * @property {number} [default.id]
*/

/**
 * #### CRMobjectProperty field properties
 * @memberof Types
 * @typedef {Object} CRM_OBJECT_PROPERTY_FIELD
 * @property {'COMPANY'|'CONTACT'|'TICKET'|'QUOTE'|'PRODUCT'|'MARKETING EVENT'|'DEAL'} object_type
 * @property {string} [placeholder]
 * @property {Object} [default]
 * @property {string} [default.property]
 */

/**
 * #### EmailAddress field properties
 * @memberof Types
 * @typedef {Object} EMAIL_ADDRESS_FIELD
 * @property {Array<string>} [default]
 * @property {boolean} [allow_custom_email_addresses]
 */

/**
 * #### File field properties
 * @memberof Types
 * @typedef {Object} FILE_FIELD
 * @property {'file'|'image'|'video'|'document'|'audio'} picker
 * @property {string} [default]
 */

/**
 * #### Form field properties
 * @memberof Types
 * @typedef {Object} FORM_FIELD
 * @property {boolean} [allow_inline_form_editing]
 * @property {boolean} [disable_inline_form_editing]
 * @property {Object} [default]
 * @property {string} [default.form_id]
 * @property {'HUBSPOT'|'TICKET_FORM'} [default.form_type]
 * @property {'inline'|'redirect'} [default.response_type]
 * @property {string} [default.message]
 * @property {number} [default.redirect_id]
 * @property {string} [default.redirect_url]
 * @property {Array<number>} [default.workflow_id]
 */

/**
 * #### HubDbRow field properties
 * @memberof Types
 * @typedef {Object} HUBDB_ROW_FIELD
 * @property {string|number} table_name_or_id
 * @property {Array<string>} [columns_to_fetch]
 * @property {string} [display_format]
 * @property {Array<string>} [display_columns]
 * @property {string} [placeholder]
 * @property {Object} [default]
 * @property {number} [default.id]
 */

/**
 * #### HubDbTable field properties
 * @memberof Types
 * @typedef {Object} HUBDB_TABLE_FIELD
 * @property {string} [placeholder]
 * @property {string|number} [default]
 */

/**
 * #### Logo field properties
 * @memberof Types
 * @typedef {Object} LOGO_FIELD
 * @property {Object} [default]
 * @property {string} [default.src]
 * @property {string} [default.alt]
 * @property {number} [default.width]
 * @property {number} [default.height]
 * @property {boolean} [default.override_inherited_src]
 * @property {string} [default.loading]
 * @property {boolean} [default.suppress_company_name]
 * @property {boolean} show_loading
 */

/**
 * #### Meeting field properties
 * @memberof Types
 * @typedef {Object} MEETING_FIELD
 * @property {boolean} [embeddable]
 * @property {string} [placeholder]
 * @property {string} [default]
 */

/**
 * #### Menu field properties
 * @memberof Types
 * @typedef {Object} MENU_FIELD
 * @property {string} [placeholder]
 * @property {number|string} [default]
 */

/**
 * #### Page field properties
 * @memberof Types
 * @typedef {Object} PAGE_FIELD
 * @property {string} [placeholder]
 * @property {number|number[]} [default]
 */

/**
 * #### Payment field properties
 * @memberof Types
 * @typedef {Object} PAYMENT_FIELD
 * @property {Object} [default]
 * @property {number} [default.id]
 */

/**
 * #### podcast field properties
 * @memberof Types
 * @typedef {Object} PODCAST_FIELD
 * @property {Object} [default]
 * @property {number} [default.episode_id]
 * @property {number} [default.show_id]
 */

/**
 * #### Product field properties
 * @memberof Types
 * @typedef {Object} PRODUCT_FIELD
 */

/**
 * #### Tag field properties
 * @memberof Types
 * @typedef {Object} TAG_FIELD
 * @property {'SLUG'|'NAME'|'ID'|'ALL'} tagValue
 * @property {string|number|{slug: string, id: string, name: string}} [default]
 */

/**
 * #### HUBL field properties
 * @memberof Types
 * @typedef {Object} HUBL_FIELD
 * @property {string} [default]
 */

/**
 * #### HTML field properties
 * @memberof Types
 * @typedef {Object} HTML_FIELD
 * @property {string} [default]
 */

/**
 * #### cta field properties
 * @memberof Types
 * @typedef {Object} CTA_FIELD
 * @property {string} [default]
 */

/**
 * #### Audio field properties
 * @memberof Types
 * @typedef {Object} AUDIO_FIELD
 * @property {Object} [default]
 * @property {number} [default.file_id]
 * @property {number} [default.file_duration]
 * @property {string} [default.file_extension]
 * @property {string} [default.file_url]
 * @property {string} [default.title]
 */

// ========================
// Style module fields
// ========================
/**
 * #### alignment field properties
 * @memberof Types
 * @typedef {Object} ALIGNMENT_FIELD
 * @property {'HORIZONTAL'|'VERTICAL'|'BOTH'} [alignment_direction]
 * @property {Object} [default]
 * @property {'LEFT'|'CENTER'|'RIGHT'} [default.horizontal_align]
 * @property {'TOP'|'MIDDLE'|'BOTTOM'} [default.vertical_align]
 */

/**
 * #### SpacingValueType field properties
 * @memberof Types
 * @typedef {Object} SPACING_VALUE_TYPE
 * @property {number} value
 * @property {CSS_UNIT} units
 */

/**
 * #### SpacingLimitType field properties
 * @memberof Types
 * @typedef {Object} SPACING_LIMIT_TYPE
 * @property {number} min
 * @property {number} max
 * @property {Array<CSS_UNIT>} units
 */

/**
 * #### spacing field properties
 * @memberof Types
 * @typedef {Object} SPACING_FIELD
 * @property {Object} [limits]
 * @property {Object} [limits.padding]
 * @property {SPACING_LIMIT_TYPE} [limits.padding.top]
 * @property {SPACING_LIMIT_TYPE} [limits.padding.right]
 * @property {SPACING_LIMIT_TYPE} [limits.padding.bottom]
 * @property {SPACING_LIMIT_TYPE} [limits.padding.left]
 * @property {Object} [limits.margin]
 * @property {SPACING_LIMIT_TYPE} [limits.margin.top]
 * @property {SPACING_LIMIT_TYPE} [limits.margin.right]
 * @property {SPACING_LIMIT_TYPE} [limits.margin.bottom]
 * @property {SPACING_LIMIT_TYPE} [limits.margin.left]
 * @property {Object} [default]
 * @property {Object} [default.padding]
 * @property {SPACING_LIMIT_TYPE} [default.padding.top]
 * @property {SPACING_LIMIT_TYPE} [default.padding.right]
 * @property {SPACING_LIMIT_TYPE} [default.padding.bottom]
 * @property {SPACING_LIMIT_TYPE} [default.padding.left]
 * @property {Object} [default.margin]
 * @property {SPACING_LIMIT_TYPE} [default.margin.top]
 * @property {SPACING_LIMIT_TYPE} [default.margin.right]
 * @property {SPACING_LIMIT_TYPE} [default.margin.bottom]
 * @property {SPACING_LIMIT_TYPE} [default.margin.left]
 */

/**
 * #### GradientColorType field properties
 * @memberof Types
 * @typedef {Object} GRADIENT_COLOR_TYPE
 * @property {Object} color
 * @property {string} color.r
 * @property {string} color.g
 * @property {string} color.b
 * @property {number} color.a
 */

/**
 * #### gradient field properties
 * @memberof Types
 * @typedef {Object} GRADIENT_FIELD
 * @property {Object} [default]
 * @property {Object} [default.side_or_corner]
 * @property {'TOP'|'BOTTOM'} [default.side_or_corner.verticalSide]
 * @property {'LEFT'|'RIGHT'} [default.side_or_corner.horizontalSide]
 * @property {Array<GRADIENT_COLOR_TYPE>} [default.colors]
 */

/**
 * #### backgroundimage field properties
 * @memberof Types
 * @typedef {Object} BACKGROUND_IMAGE_FIELD
 * @property {Object} [default]
 * @property {string} [default.src]
 * @property {'TOP_LEFT'|'TOP_CENTER'|'TOP_RIGHT'|'MIDDLE_LEFT'|'MIDDLE_CENTER'|'MIDDLE_RIGHT'|'BOTTOM_LEFT'|'BOTTOM_CENTER'|'BOTTOM_RIGHT'} [default.background_position]
 * @property {'COVER'|'CONTAIN'|'AUTO'} [default.background_size]
 */

/**
 * #### border field properties
 * @memberof Types
 * @typedef {Object} BORDER_SIDE_TYPE
 * @property {Object} [width]
 * @property {number} width.value
 * @property {CSS_UNIT} width.units
 * @property {number} [opacity]
 * @property {'none'|'solid'|'dashed'|'double'|'groove'|'ridge'|'inset'|'outset'} [style]
 * @property {string} [color]
 */

/**
 * #### border field properties
 * @memberof Types
 * @typedef {Object} BORDER_FIELD
 * @property {boolean} [allow_custom_border_sides]
 * @property {Object} [default]
 * @property {Object} [default.border_radius]
 * @property {number} default.border_radius.value
 * @property {CSS_UNIT} default.border_radius.units
 * @property {BORDER_SIDE_TYPE} [default.top]
 * @property {BORDER_SIDE_TYPE} [default.right]
 * @property {BORDER_SIDE_TYPE} [default.bottom]
 * @property {BORDER_SIDE_TYPE} [default.left]
 */

/**
 * #### textalignment field properties
 * @memberof Types
 * @typedef {Object} TEXT_ALIGNMENT_FIELD
 * @property {Object} [default]
 * @property {'LEFT'|'CENTER'|'RIGHT'|'JUSTIFY'} [default.text_align]
 */

/**
 * #### textalignment field properties
 * @memberof Types
 * @typedef {Array<COMMON_FIELDS|COMMON_FIELDS[]|COMMON_FIELDS[][]|Array<COMMON_FIELDS|COMMON_FIELDS[]>>} CHILDRENS
 */
