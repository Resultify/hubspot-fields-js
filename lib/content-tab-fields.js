/// <reference path="./types/types.js" />
// *************
// Only Content Tab fields
// *************

/**
 * #### Text fields provide content creators a simple text editing experience with no rich text functionality. Text fields initially show as a single line, but can actually expand to be textareas, supporting multiple lines.
 * `only_content_tab`
 * @example
 * fi.text('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|TEXT_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function text (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'text' }
  }
}

/**
 * #### Audioplayer field
 * `only_content_tab`
 * @example
 * fi.audioplayer('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|AUDIO_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function audioplayer (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'audioplayer' }
  }
}

/**
 * #### Blog field
 * `only_content_tab`
 * @example
 * fi.blog('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|BLOG_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function blog (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'blog' }
  }
}

/**
 * #### crmobject field
 * `only_content_tab`
 * @example
 * fi.crmobject('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|CRM_OBJECT_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function crmobject (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'crmobject' }
  }
}

/**
 * #### crmobjectproperty field
 * `only_content_tab`
 * @example
 * fi.crmobjectproperty('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|CRM_OBJECT_PROPERTY_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function crmobjectproperty (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'crmobjectproperty' }
  }
}

/**
 * #### cta field
 * `only_content_tab`
 * @example
 * fi.cta('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|CTA_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function cta (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'cta' }
  }
}

/**
 * #### date field
 * `only_content_tab`
 * @example
 * fi.date('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|DATE_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function date (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'date' }
  }
}

/**
 * #### datetime field
 * `only_content_tab`
 * @example
 * fi.datetime('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|DATA_AND_TIME_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function datetime (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'datetime' }
  }
}

/**
 * #### email field
 * `only_content_tab`
 * @example
 * fi.email('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|EMAIL_ADDRESS_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function email (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'email' }
  }
}

/**
 * #### embed field
 * `only_content_tab`
 * @example
 * fi.embed('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|EMBEDED_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function embed (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'embed' }
  }
}

/**
 * #### file field
 * `only_content_tab`
 * @example
 * fi.file('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|FILE_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function file (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'file' }
  }
}

/**
 * #### form field
 * `only_content_tab`
 * @example
 * fi.form('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|FORM_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function form (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'form' }
  }
}

/**
 * #### html field
 * `only_content_tab`
 * @example
 * fi.html('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|HTML_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function html (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'html' }
  }
}

/**
 * #### hubdbrow field
 * `only_content_tab`
 * @example
 * fi.hubdbrow('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|HUBDB_ROW_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function hubdbrow (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'hubdbrow' }
  }
}

/**
 * #### hubdbtable field
 * `only_content_tab`
 * @example
 * fi.hubdbtable('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|HUBDB_TABLE_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function hubdbtable (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'hubdbtable' }
  }
}

/**
 * #### hubl field
 * `only_content_tab`
 * @example
 * fi.hubl('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|HUBL_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function hubl (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'hubl' }
  }
}

/**
 * #### menu field
 * `only_content_tab`
 * @example
 * fi.menu('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|MENU_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function menu (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'menu' }
  }
}

/**
 * #### meeting field
 * `only_content_tab`
 * @example
 * fi.meeting('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|MEETING_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function meeting (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'meeting' }
  }
}

/**
 * #### logo field
 * `only_content_tab`
 * @example
 * fi.logo('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|LOGO_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function logo (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'logo' }
  }
}

/**
 * #### link field
 * `only_content_tab`
 * @example
 * fi.link('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|LINK_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function link (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'link' }
  }
}

/**
 * #### richtext field
 * `only_content_tab`
 * @example
 * fi.richtext('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|RICHTEXT_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function richtext (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'richtext' }
  }
}

/**
 * #### simplemenu field
 * `only_content_tab`
 * @example
 * fi.simplemenu('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|SIMPLE_MENU_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function simplemenu (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'simplemenu' }
  }
}

/**
 * #### podcast field
 * `only_content_tab`
 * @example
 * fi.podcast('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|PODCAST_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function podcast (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'podcast' }
  }
}

/**
 * #### payment field
 * `only_content_tab`
 * @example
 * fi.payment('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|PAYMENT_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function payment (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'payment' }
  }
}

/**
 * #### page field
 * `only_content_tab`
 * @example
 * fi.page('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|PAGE_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function page (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'page' }
  }
}

/**
 * #### tag field
 * `only_content_tab`
 * @example
 * fi.tag('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|TAG_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function tag (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'tag' }
  }
}

/**
 * #### videoplayer field
 * `only_content_tab`
 * @example
 * fi.videoplayer('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|VIDEO_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function video (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'videoplayer' }
  }
}

/**
 * #### url field
 * `only_content_tab`
 * @example
 * fi.url('label', 'name', {...options if needed})
 * @memberof Fields
 * @param {string} label Field label
 * @param {string} name Field name (HubL variable name)
 * @param {BASE_FIELDS|URL_FIELD} [fields]
 * @returns {COMMON_FIELDS}
 */
function url (label, name, fields) {
  return {
    label,
    name,
    ...fields,
    ...{ type: 'url' }
  }
}

export {
  text,
  link,
  richtext,
  url,
  video,
  cta,
  audioplayer,
  blog,
  crmobject,
  crmobjectproperty,
  date,
  datetime,
  email,
  embed,
  file,
  form,
  html,
  hubdbrow,
  hubdbtable,
  hubl,
  menu,
  meeting,
  logo,
  simplemenu,
  podcast,
  payment,
  page,
  tag
}
