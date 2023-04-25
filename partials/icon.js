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

export { icon, iconGroup }
