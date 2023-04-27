import { group } from '../lib/group.js'
import * as contentTabFields from '../lib/content-tab-fields.js'
import * as styleTabFields from '../lib/style-tab-fields.js'
import * as fields from '../lib/fields.js'
const fi = { ...contentTabFields, ...styleTabFields, ...fields }

function text () {
  return fi.text('Text', 'text', { allow_new_line: true })
}

function textGroup () {
  return (
    group('Text', 'text', {},
      fi.text('Text', 'text', {
        allow_new_line: true
      })
    )
  )
}

function textStyle () {
  return [
    group('Presets', 'presets', {},
      fi.choice('Custom_preset', 'custom preset',
        {
          // help_text: 'Custom presets to globally restyle module',
          choices: [
            ['Preset1', 'preset 1'],
            ['Preset2', 'preset 2'],
            ['Preset3', 'preset 3']
          ]
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
        // help_text: 'Override global theme settings for the current component'
      },
      fi.spacing('Spacing', 'spacing'),
      fi.color('Background', 'background'),
      fi.font('Font', 'font')
    )
  ]
}

function textStyle2 () {
  return [
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
}

export { text, textGroup, textStyle, textStyle2 }
