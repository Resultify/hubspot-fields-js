import { group } from '../lib/group.js'
import * as contentTabFields from '../lib/content-tab-fields.js'
import * as styleTabFields from '../lib/style-tab-fields.js'
import * as fields from '../lib/fields.js'
const fi = { ...contentTabFields, ...styleTabFields, ...fields }

function image () {
  return fi.image('Image', 'image')
}

function imageGroup () {
  return (
    group('Image', 'image', {},
      fi.image('Image', 'image'),
      group('Caption', 'caption',
        {
          display_conditions: {
            visibility: {
              controlling_field_path: 'image.image',
              operator: 'NOT_EMPTY',
              property: 'src'
            }
          }
        },
        fi.richtext('Rich text', 'rich_text', {
          enabled_features: [
            'code_format',
            'subscript',
            'emoji',
            'underline',
            'superscript',
            'font_size',
            'link',
            'visual_blocks',
            'hr',
            'bold',
            'charmap',
            'italic',
            'personalize',
            'cta',
            'background_color',
            'anchor',
            'nonbreaking_space',
            'font_family',
            'text_color',
            'strikethrough',
            'alignment',
            'source_code'
          ]
        })
      ),
      group('Link', 'link',
        {
          display_conditions: {
            visibility: {
              controlling_field_path: 'image.image',
              operator: 'NOT_EMPTY',
              property: 'src'
            }
          }
        },
        fi.link('Link', 'link')
      )
    )
  )
}

export { image, imageGroup }
