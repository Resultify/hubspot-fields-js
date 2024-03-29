/* eslint-disable no-unused-vars */
import {
  group,
  styleGroup,
  moduleFields as fi
} from '../index.js'

const heading = [
  fi.text('Heading', 'heading', {
    allow_new_line: true
  })
]

const headingGroup = [
  group('Heading', 'heading', {},
    fi.text('Text', 'text', {
      allow_new_line: true
    }),
    fi.choice('Tag', 'heading_tag', {
      choices: [
        ['h1', 'Heading 1 (H1)'],
        ['h2', 'Heading 2 (H2)'],
        ['h3', 'Heading 3 (H3)'],
        ['h4', 'Heading 4 (H4)'],
        ['h5', 'Heading 5 (H5)'],
        ['h6', 'Heading 6 (H6)']
      ],
      default: 'h2',
      editor_options: {
        help_text: 'Semantic heading tag (h1-h6)'
      }
    }),
    fi.choice('Display', 'display', {
      choices: [
        ['h1', 'Heading 1'],
        ['h2', 'Heading 2'],
        ['h3', 'Heading 3'],
        ['h4', 'Heading 4'],
        ['h5', 'Heading 5'],
        ['h6', 'Heading 6'],
        ['display-1', 'Heading display 1'],
        ['display-2', 'Heading display 2'],
        ['display-3', 'Heading display 3'],
        ['display-4', 'Heading display 4'],
        ['display-5', 'Heading display 5'],
        ['display-6', 'Heading display 6']
      ],
      editor_options: {
        inline_help_text: 'Display different heading style',
        help_text: 'Display different heading styles not related to semantic heading type (tag h1-h6)'
      }
    }),
    group('Link', 'link',
      {
        display_conditions: {
          visibility: {
            controlling_field_path: 'heading.text',
            operator: 'NOT_EMPTY'
          }
        }
      },
      fi.link('Link', 'link'),
      fi.boolean('Accessible link', 'accessible_link', {
        editor_options: {
          help_text: 'Accessible link. Inform when a link opens a new window.'
        }
      })
    ),
    group('Icon', 'icon',
      {
        display_conditions: {
          visibility: {
            controlling_field_path: 'heading.text',
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
            controlling_field_path: 'heading.icon.icon',
            operator: 'NOT_EMPTY',
            property: 'name'
          }
        }
      }),
      group('Accessibility options', 'accessibility_options',
        {
          display_conditions: {
            visibility: {
              controlling_field_path: 'heading.icon.icon',
              operator: 'NOT_EMPTY',
              property: 'name'
            }
          }
        },
        fi.choice('Purpose', 'purpose', {
          choices: [
            ['decorative', 'Ignored by screen reader (Decorative images)'],
            ['semantic', 'Read by screen reader (Informative images)']
          ],
          default: 'decorative',
          editor_options: {
            required: true,
            help_text: 'Categorize the purpose of this icon for screen readers. <a href=\'https://www.w3.org/WAI/tutorials/images/\' target=\'blank\' rel=\'noopener noreferrer\'>Learn More</a>'
          }
        }),
        fi.text('Title', 'title', {
          editor_options: {
            help_text: 'This text will be read by screen readers to describe the icon.'
          },
          display_conditions: {
            visibility: {
              controlling_field_path: 'heading.icon.accessibility_options.purpose',
              operator: 'EQUAL',
              controlling_value_regex: 'semantic'
            }
          }
        })
      )
    )
  )
]

const headingStyle = [
  group('Heading', 'heading',
    {
      display_conditions: {
        visibility: {
          controlling_field_path: 'heading.text',
          operator: 'NOT_EMPTY'
        }
      }
    },
    group('Alignment', 'alignment', {},
      fi.alignment('Alignment', 'alignment')
    ),
    group('Spacing', 'spacing', {},
      fi.spacing('Spacing', 'spacing')
    ),
    group('Background', 'background', {},
      fi.color('Color', 'color')
    ),
    group('Custom theme overrides', 'custom_theme_overrides',
      {
        editor_options: {
          help_text: 'Override global theme settings for the current component'
        }
      },
      fi.spacing('Spacing', 'spacing'),
      fi.color('Color', 'color')
    ),
    group('Icon', 'icon', {},
      group('Custom theme overrides', 'custom_theme_overrides',
        {
          editor_options: {
            help_text: 'Override global theme settings for the current component'
          }
        },
        fi.spacing('Spacing', 'spacing'),
        fi.color('Background', 'background'),
        fi.color('Color', 'color'),
        fi.border('Border', 'border'),
        fi.number('Border radius', 'border_radius', {
          step: 1,
          min: 0,
          max: 100,
          prefix: '%'
        }),
        fi.number('Size', 'size', {
          min: 0,
          max: 400,
          step: 1,
          suffix: 'px'
        })
      )
    )
  )
]

export { heading, headingGroup, headingStyle }
