/* eslint-disable no-unused-vars */
import {
  group,
  styleGroup,
  init,
  moduleFields as fi,
  writeJson
} from '../../index.js'
import { pa } from '../../partials/all.js'

writeJson(init(
  fi.text('Text', 'text', { allow_new_line: true }),
  group('Group2', 'group2', {},
    fi.text('Text', 'text_field')
  ),
  pa.buttonGroup,
  pa.heading,
  pa.headingGroup,
  pa.headingStyle,
  pa.icon,
  pa.iconGroup,
  pa.iconStyle,
  pa.image,
  pa.imageGroup,
  pa.linkGroup,
  pa.richtextGroup,
  pa.secondaryButtonGroup,
  pa.secondaryLinkGroup,
  pa.subheading,
  pa.subheadingGroup,
  pa.text,
  pa.textGroup,
  pa.textStyle,
  pa.textStyle2
))

// console.log(pa.imageGroup)
