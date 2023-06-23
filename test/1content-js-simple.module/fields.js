/* eslint-disable no-unused-vars */
import {
  group,
  styleGroup,
  init,
  moduleFields as fi,
  writeJson
} from '../../index.js'

writeJson(init(
  fi.boolean('Boolean', 'boolean_field'),
  fi.choice('Choice', 'choice_field'),
  fi.color('Color', 'color_field'),
  fi.font('Font', 'font_field'),
  fi.icon('Icon', 'icon_field'),
  fi.image('Image', 'image_field'),
  fi.link('Link', 'link_field'),
  fi.number('Number', 'number_field'),
  fi.richtext('Rich text', 'richtext_field'),
  fi.text('Text', 'text_field'),
  fi.url('URL', 'url_field')
))
