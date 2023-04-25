import { group } from '../lib/group.js'
import * as contentTabFields from '../lib/content-tab-fields.js'
import * as styleTabFields from '../lib/style-tab-fields.js'
import * as fields from '../lib/fields.js'
const fi = { ...contentTabFields, ...styleTabFields, ...fields }

function button () {

}

function buttonGroup () {
  return (

    group('Button', 'button', {},
      fi.text('Text', 'text'),
      fi.link('Link', 'link'),
      fi.text('Accessible link label', 'accessible_link_label', {
        placeholder: 'Accessible link label',
        editor_options: {
          help_text: 'If the link title is added at the end of repeated blocks of text, for example “Read more” links at the end of short teasers for blog posts, then you can provide more descriptive link text specifically for screen reader users using Accessible link label. It will be visually hidden for a normal view.'
        }
      }),
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
              controlling_field_path: 'button.text',
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
              controlling_field_path: 'button.icon.icon',
              operator: 'NOT_EMPTY',
              property: 'name'
            }
          }
        })
      )
    )

  )
}

export { button, buttonGroup }
