import { group } from '../lib/group.js'
import * as contentTabFields from '../lib/content-tab-fields.js'
import * as styleTabFields from '../lib/style-tab-fields.js'
import * as fields from '../lib/fields.js'
const fi = { ...contentTabFields, ...styleTabFields, ...fields }

function richtext () {

}

function richtextGroup () {
  return (

    group('Rich text', 'richtext', {},
      fi.richtext('Rich text', 'rich_text', {
        enabled_features: [
          'bulleted_list',
          'emoji',
          'underline',
          'indent',
          'superscript',
          'font_size',
          'lineheight',
          'link',
          'hr',
          'video',
          'charmap',
          'italic',
          'cta',
          'outdent',
          'nonbreaking_space',
          'block', 'strikethrough',
          'embed',
          'table',
          'image',
          'code_format',
          'subscript',
          'visual_blocks',
          'bold',
          'personalize',
          'numbered_list',
          'background_color',
          'anchor',
          'font_family',
          'text_color',
          'alignment',
          'source_code'
        ]
      }),
      fi.number('Truncate', 'truncate',
        {
          editor_options: {
            help_text: 'Number of characters to truncate the text'
          },
          display_conditions: {
            visibility: {
              controlling_field_path: 'richtext.rich_text',
              operator: 'NOT_EMPTY'
            }
          }
        }
      )
    )

  )
}

export { richtext, richtextGroup }
