import { group } from '../lib/group.js'
import * as contentTabFields from '../lib/content-tab-fields.js'
import * as styleTabFields from '../lib/style-tab-fields.js'
import * as fields from '../lib/fields.js'
const fi = { ...contentTabFields, ...styleTabFields, ...fields }

function link () {

}

function linkGroup () {
  return (

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

  )
}

export { link, linkGroup }
