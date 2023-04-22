import { initModule } from '../../lib/init.js'
import { fi } from '../../fields.js'
import { group, styleGroup } from '../../lib/group.js' // eslint-disable-line
import { pa } from '../../partials.js' // eslint-disable-line

initModule(
  styleGroup(
    fi.alignment('Alignment', 'alignment_field'),
    fi.backgroundimage('Background image', 'backgroundimage_field'),
    fi.boolean('Boolean', 'boolean_field'),
    fi.border('Border', 'border_field'),
    fi.choice('Choice', 'choice_field'),
    fi.color('Color', 'color_field'),
    fi.font('Font', 'font_field'),
    fi.gradient('Gradient', 'gradient_field'),
    fi.icon('Icon', 'icon_field'),
    fi.image('Image', 'image_field'),
    fi.number('Number', 'number_field'),
    fi.spacing('Spacing', 'spacing_field'),
    fi.textalignment('Text alignment', 'textalignment_field')
  )
)
