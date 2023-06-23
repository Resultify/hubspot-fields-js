/* eslint-disable no-unused-vars */
import {
  group,
  styleGroup,
  init,
  moduleFields as fi,
  writeJson
} from '../../index.js'

writeJson(init(
  group('Group', 'group', {},
    fi.text('Text', 'text_field'),
    group('Group2', 'group2', {},
      fi.text('Text', 'text_field')
    )
  )
))
