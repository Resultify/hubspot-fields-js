import { initModule } from '../../lib/init.js'
import { fi } from '../../fields.js'
import { group, styleGroup } from '../../lib/group.js' // eslint-disable-line
import { pa } from '../../partials.js' // eslint-disable-line

initModule(
  styleGroup(
    fi.alignment('Alignment', 'alignment_field', {
      alignment_direction: 'BOTH',
      default: {
        horizontal_align: 'RIGHT',
        vertical_align: 'BOTTOM'
      },
      editor_options: {
        required: true
      }
    }),
    fi.backgroundimage('Background image', 'backgroundimage_field', {
      editor_options: {
        inline_help_text: 'Inline'
      }
    }),
    fi.boolean('Boolean', 'boolean_field', {
      default: true
    }),
    fi.border('Border', 'border_field', {
      allow_custom_border_sides: true,
      default: {
        bottom: {
          color: '#FF0201',
          opacity: 100,
          style: 'solid',
          width: {
            units: 'px',
            value: 4
          }
        },
        left: {
          color: '#FF0201',
          opacity: 100,
          style: 'solid',
          width: {
            units: 'px',
            value: 4
          }
        },
        right: {
          color: '#FF0201',
          opacity: 100,
          style: 'solid',
          width: {
            units: 'px',
            value: 4
          }
        }
      }
    }),
    fi.choice('Choice', 'choice_field'),
    fi.color('Color', 'color_field', {
      display_conditions: {
        visibility: {
          controlling_field_path: 'style.number_field',
          operator: 'NOT_EMPTY'
        }
      }
    }),
    fi.font('Font', 'font_field', {
      default: {
        font: 'arial',
        size: 30,
        font_set: 'DEFAULT',
        styles: {
          'font-style': 'italic'
        }
      }
    }),
    fi.gradient('Gradient', 'gradient_field', {
      default: {
        side_or_corner: {
          verticalSide: 'TOP',
          horizontalSide: null
        },
        colors: [
          { color: { r: 0, g: 255, b: 255, a: 1 } },
          { color: { r: 105, g: 168, b: 79, a: 0.8 } }
        ]
      }
    }),
    fi.icon('Icon', 'icon_field', {
      editor_options: {
        locked: true,
        help_text: 'Tooltip'
      }
    }),
    fi.image('Image', 'image_field', {
      show_loading: true,
      editor_options: {
        inline_help_text: 'Inline'
      }
    }),
    fi.number('Number', 'number_field', {
      suffix: 'px',
      step: 5,
      max: 100
    }),
    fi.spacing('Spacing', 'spacing_field', {
      default: {
        margin: {
          top: {
            value: 38,
            units: 'px'
          }
        },
        padding: {
          top: {
            units: 'px',
            value: 20
          }
        }
      }
    }),
    fi.textalignment('Text alignment', 'textalignment_field', {
      default: {
        text_align: 'JUSTIFY'
      },
      display_conditions: {
        visibility: {
          controlling_field_path: 'style.color_field',
          operator: 'EQUAL',
          property: 'color',
          controlling_value_regex: '#FFFFFF'
        }
      }
    })
  )
)
