import { init } from '../lib/init.js'
import { fi } from '../fields.js'
import { text, textStyle } from '../partials.js'
import { group, styleGroup } from '../lib/group.js'

init(
  styleGroup(
    group('text_style_wrp', 'Text style wrapper', {},
      textStyle()
    )
  ),
  text(),
  fi.text('text2', 'Text2', {
    allow_new_line: true
  })
)
