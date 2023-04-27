import { group } from '../lib/group.js'
import * as contentTabFields from '../lib/content-tab-fields.js'
import * as styleTabFields from '../lib/style-tab-fields.js'
import * as fields from '../lib/fields.js'
const fi = { ...contentTabFields, ...styleTabFields, ...fields }

function icon () {
  fi.icon('Icon', 'icon')
}

function iconGroup () {
  return (

    group('Icon', 'icon', {},
      fi.icon('Icon', 'icon'),
      group('Accessibility options', 'accessibility_options',
        {
          display_conditions: {
            visibility: {
              controlling_field_path: 'icon.icon',
              operator: 'NOT_EMPTY',
              property: 'name'
            }
          }
        },
        fi.choice('Purpose', 'purpose', {
          choices: [
            ['decorative', 'Ignored by screen reader (Decorative images)'],
            ['semantic', 'Read by screen reader (Informative images)']
          ],
          default: 'decorative',
          editor_options: {
            help_text: 'Categorize the purpose of this icon for screen readers. <a href=\'https://www.w3.org/WAI/tutorials/images/\' target=\'blank\' rel=\'noopener noreferrer\'>Learn More</a>'
          }
        }),
        fi.text('Title', 'title', {
          editor_options: {
            help_text: 'This text will be read by screen readers to describe the icon.'
          },
          display_conditions: {
            visibility: {
              controlling_field_path: 'icon.accessibility_options.purpose',
              operator: 'EQUAL',
              controlling_value_regex: 'semantic'
            }
          }
        })
      )
    )

  )
}

function iconStyle () {
  return [
    group('Icon', 'icon',
      {
        display_conditions: {
          visibility: {
            controlling_field_path: 'icon.icon',
            operator: 'NOT_EMPTY',
            property: 'name'
          }
        }
      },
      group('Presets', 'presets', {},
        fi.choice('Icon color', 'icon_color', {
          default: 'primary',
          choices: [
            ['primary', 'Primary'],
            ['secondary', 'Secondary']
          ],
          editor_options: {
            required: true
          }
        }),
        fi.choice('Icon size', 'icon_size', {
          default: 'regular',
          choices: [
            ['small', 'Small'],
            ['regular', 'Regular'],
            ['large', 'Large']
          ],
          editor_options: {
            required: true
          }
        }),
        fi.choice('Icon shape', 'icon_shape', {
          default: 'circle',
          choices: [
            ['circle', 'Circle'],
            ['square', 'Square']
          ],
          editor_options: {
            required: true
          }
        })
      ),
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
        fi.color('Color', 'color'),
        fi.border('Border', 'border'),
        fi.number('Border radius', 'border_radius', {
          min: 0,
          max: 100,
          step: 1,
          suffix: '%'
        }),
        fi.number('Size', 'size', {
          step: 1,
          min: 0,
          max: 100,
          prefix: '%'
        })
      )
    )
  ]
}

export { icon, iconGroup, iconStyle }
