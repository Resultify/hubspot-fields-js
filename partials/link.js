/* eslint-disable no-unused-vars */
import {
  group,
  styleGroup,
  moduleFields as fi
} from '../index.js'

const linkGroup = [
  group('Link', 'link', {},
    fi.text('Text', 'text'),
    fi.link('Link', 'link'),
    fi.boolean('Accessible link', 'accessible_link', {
      default: true,
      editor_options: {
        help_text: 'Accessible link. Inform when a link opens a new window.'
      }
    }),
    group('Icon', 'icon',
      {
        display_conditions: {
          visibility: {
            controlling_field_path: 'link.text',
            operator: 'NOT_EMPTY'
          }
        }
      },
      fi.icon('Icon', 'icon'),
      fi.choice('Icon position', 'icon_position', {
        choices: [
          ['left', 'Left'],
          ['right', 'Right']
        ],
        default: 'left',
        editor_options: {
          required: true
        },
        display_conditions: {
          visibility: {
            controlling_field_path: 'link.icon.icon',
            operator: 'NOT_EMPTY',
            property: 'name'
          }
        }
      })
    )
  )
]

export { linkGroup }
