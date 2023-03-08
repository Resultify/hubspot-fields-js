import { group } from '../lib/group.js'
import * as contentTabFields from '../lib/content-tab-fields.js'
import * as styleTabFields from '../lib/style-tab-fields.js'
import * as fields from '../lib/fields.js'
const fi = { ...contentTabFields, ...styleTabFields, ...fields }

const text = fi.text('text', 'Text', { allow_new_line: true })

const textGroup = group('text', 'Text', {},
  fi.text('text', 'Text', { allow_new_line: true })
)

const textStyle = [
  group('presets', 'Presets', {},
    fi.choice('custom_preset', 'Custom preset',
      {
        help_text: 'Custom presets to globally restyle module',
        choices: [
          ['preset1', 'Preset 1'],
          ['preset2', 'Preset 2'],
          ['preset3', 'Preset 3']
        ]
      }
    )
  ),
  group('alignment', 'Alignment', {},
    fi.alignment('alignment', 'Alignment',
      {
        alignment_direction: 'HORIZONTAL'
      }
    )
  ),
  group('spacing', 'Spacing', {},
    fi.spacing('spacing', 'Spacing')
  ),
  group('background', 'Background', {},
    fi.color('color', 'Color')
  ),
  group('custom_theme_overrides', 'Custom theme overrides',
    {
      help_text: 'Override global theme settings for the current component'
    },
    fi.spacing('spacing', 'Spacing'),
    fi.color('background', 'Background'),
    fi.font('font', 'Font')
  )
]

export { text, textGroup, textStyle }
