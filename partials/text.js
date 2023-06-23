/* eslint-disable no-unused-vars */
import {
  group,
  styleGroup,
  moduleFields as fi
} from '../index.js'

const text = fi.text('Text', 'text', { allow_new_line: true })

const textGroup = [
  group('Text', 'text', {},
    fi.text('Text', 'text', {
      allow_new_line: true
    })
  )
]

const textStyle = [
  group('Presets', 'presets', {},
    fi.choice('Custom_preset', 'custom preset',
      {
        choices: [
          ['Preset1', 'preset 1'],
          ['Preset2', 'preset 2'],
          ['Preset3', 'preset 3']
        ],
        editor_options: {
          help_text: 'Custom presets to globally restyle module'
        }
      }
    )
  ),
  group('Alignment', 'alignment', {},
    fi.alignment('Alignment', 'alignment',
      {
        alignment_direction: 'HORIZONTAL'
      }
    )
  ),
  group('Spacing', 'spacing', {},
    fi.spacing('Spacing', 'spacing')
  ),
  group('Background', 'background', {},
    fi.color('Color', 'color')
  ),
  group('Custom_theme_overrides', 'custom theme overrides',
    {
      editor_options: {
        help_text: 'Override global theme settings for the current component'
      }
    },
    fi.spacing('Spacing', 'spacing'),
    fi.color('Background', 'background'),
    fi.font('Font', 'font')
  )
]

const textStyle2 = [
  group('Text', 'text',
    {
      display_conditions: {
        visibility: {
          controlling_field_path: 'text.text',
          operator: 'NOT_EMPTY'
        }
      }
    },
    group('Alignment', 'alignment', {},
      fi.alignment('Alignment', 'alignment')
    ),
    group('Spacing', 'spacing', {},
      fi.spacing('Spacing', 'spacing')
    ),
    group('Background', 'background', {},
      fi.color('Color', 'color')
    ),
    group('Custom theme overrides', 'custom_theme_overrides',
      {
        editor_options: {
          help_text: 'Override global theme settings for the current component'
        }
      },
      fi.spacing('Spacing', 'spacing'),
      fi.color('Background', 'background'),
      fi.font('Font', 'font')
    )
  )
]

export { text, textGroup, textStyle, textStyle2 }
