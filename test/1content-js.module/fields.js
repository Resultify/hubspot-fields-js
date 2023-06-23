/* eslint-disable no-unused-vars */
import {
  group,
  styleGroup,
  init,
  moduleFields as fi,
  writeJson
} from '../../index.js'

writeJson(init(
  fi.boolean('Boolean', 'boolean_field', {
    display: 'toggle',
    default: true,
    editor_options: {
      help_text: 'tooltip',
      required: true
    }
  }),
  fi.choice('Choice', 'choice_field', {
    default: 'value 1',
    display: 'radio',
    editor_options: {
      locked: true,
      inline_help_text: 'Inline'
    }
  }),
  fi.color('Color', 'color_field', {
    show_opacity: false,
    default: {
      color: '#FF0201'
    },
    display_conditions: {
      visibility: {
        controlling_field_path: 'boolean_field',
        operator: 'EQUAL',
        controlling_value_regex: 'true'
      }
    }
  }),
  fi.font('Font', 'font_field', {
    default: {
      font: 'Open Sans',
      fallback: 'sans-serif',
      font_set: 'GOOGLE',
      color: '#FF00FF',
      variant: '600'
    }
  }),
  fi.icon('Icon', 'icon_field'),
  fi.image('Image', 'image_field', {
    repeater_options: {
      occurrence: {
        max: 10
      }
    }
  }),
  fi.link('Link', 'link_field', {
    default: {
      url: {
        type: 'CONTENT'
      }
    },
    editor_options: {
      required: true
    },
    repeater_options: {
      occurrence: {}
    }
  }),
  fi.number('Number', 'number_field', {
    suffix: '%',
    max: 1000,
    step: 1,
    repeater_options_default: {
      occurrence: {
        min: 2,
        default: 4
      },
      default: []
    }

  }),
  fi.richtext('Rich text', 'richtext_field', {
    default: '<h1>Default rich text</h1>'
  }),
  fi.text('Text', 'text_field', {
    show_emoji_picker: true,
    default: 'Default text',
    placeholder: 'Placeholder',
    repeater_options_default: {
      occurrence: {
        default: 5
      },
      default: ['Default text', 'Default text', 'Default text', 'Default text', 'Default text']
    }
  }),
  fi.url('URL', 'url_field', {
    default: {
      type: 'BLOG'
    }
  })
))
