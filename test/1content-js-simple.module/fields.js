import { initModule } from '../../lib/init.js'
import { fi } from '../../fields.js'
import { group, styleGroup } from '../../lib/group.js' // eslint-disable-line
import { pa } from '../../partials.js' // eslint-disable-line

initModule(
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
)
