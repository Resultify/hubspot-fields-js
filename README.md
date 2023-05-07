# hubspot-fields-js
**Generate HubSpot module `fields.json` from `fields.js`**
[HubSpot Module and theme fields](https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields)

## Quick start
1. Inatall `hubspot-fields-js` package
```js
npm install hubspot-fields-js
```
2. Create a new module
3. Create `fields.js` file in the module folder
4. Add fields to `fields.js` file
5. Compile `fields.js` to `fields.json` by running command `node path/to/module/fields.js`
6. Upload module to HubSpot

## Field structure
Each field or group with some exceptions consists of:
- Label
- Name
- Content options (unique options per field)
- Editor options
- Display conditions
- Repeater options


## `field.js` structure exaple
```js
// imports ...

initModule( //initialize module
    fi.text( // add text field
        'Text', // label
        'text', // name
        {
            // content options (unique options per field)
            editor_options: {} // editor options
            display_conditions: {} // display conditions
            repeater_options: {} // repeater options
        }
    )
)
```

```js
// imports ...

initModule( //initialize module
    group( // add group
        'Group', // group label
        'group', // group name
        {
            // group options (group unique options)
            editor_options: {} // editor options
            display_conditions: {} // display conditions
            repeater_options: {} // repeater options
        },
        // add all childrens...
        fi.text( 'Text', 'text'),
        fi.image( 'Image', 'image'),
        group( 'Group2', 'group2', {},
            fi.text( 'Text2', 'text2')
        )
    )
)
```

## Example of fields.js file
```js
import { initModule } from '@resultify/hubspot-fields-js/lib/init.js'
import { fi } from '@resultify/hubspot-fields-js/fields.js'
import { group, styleGroup } from '@resultify/hubspot-fields-js/lib/group.js'
import { pa } from '@resultify/hubspot-fields-js/partials.js'

initModule(
  fi.boolean('Boolean', 'boolean_field', {
    display: 'toggle',
    default: true,
    editor_options: {
      help_text: 'tooltip',
      required: true
    }
  }),
  fi.choice('Choice', 'choice_field', {
    default: 'value 1',
    display: 'radio',
    editor_options: {
      locked: true,
      inline_help_text: 'Inline'
    }
  }),
  fi.color('Color', 'color_field', {
    show_opacity: false,
    default: {
      color: '#FF0201'
    },
    display_conditions: {
      visibility: {
        controlling_field_path: 'boolean_field',
        operator: 'EQUAL',
        controlling_value_regex: 'true'
      }
    }
  }),
  fi.font('Font', 'font_field', {
    default: {
      font: 'Open Sans',
      fallback: 'sans-serif',
      font_set: 'GOOGLE',
      color: '#FF00FF',
      variant: '600'
    }
  }),
  fi.icon('Icon', 'icon_field'),
  fi.image('Image', 'image_field', {
    repeater_options: {
      occurrence: {
        max: 10
      }
    }
  }),
  fi.link('Link', 'link_field', {
    default: {
      url: {
        type: 'CONTENT'
      }
    },
    editor_options: {
      required: true
    },
    repeater_options: {
      occurrence: {}
    }
  }),
  fi.number('Number', 'number_field', {
    suffix: '%',
    max: 1000,
    step: 1,
    repeater_options_default: {
      occurrence: {
        min: 2,
        default: 4
      },
      default: []
    }

  }),
  fi.richtext('Rich text', 'richtext_field', {
    default: '<h1>Default rich text</h1>'
  }),
  fi.text('Text', 'text_field', {
    show_emoji_picker: true,
    default: 'Default text',
    placeholder: 'Placeholder',
    repeater_options_default: {
      occurrence: {
        default: 5
      },
      default: ['Default text', 'Default text', 'Default text', 'Default text', 'Default text']
    }
  }),
  fi.url('URL', 'url_field', {
    default: {
      type: 'BLOG'
    }
  })
)
```
Check more examples in `examples` folder.

## Content tab fields vs Style tab fields
|Content tab|Style tab|Universal|
|---|---|---|
|❌ Date|✅ Gradient|✅ Boolean|
|❌ Date and time|✅ Spacing|✅ Choice|
|❌ Embed|✅ Background image|✅ Number|
|✅ Link|✅ Border|✅ Color|
|✅ Rich text|✅ Alignment|✅ Icon|
|❌ Simple menu|✅ Text alignment|✅ Image|
|✅ Text||✅ Font|
|✅ Url||
|❌ Blog||
|❌ CRM object||
|❌ CRM object property||
|❌ CTA||
|❌ Email addres||
|❌ File||
|❌ Followup email||
|❌ Form||
|❌ HubDB row||
|❌ HubDB table||
|❌ Logo||
|❌ Meeting||
|❌ Menu||
|❌ Page||
|❌ Tag||
|❌ Video||

✅ - _implemented_ / ❌ - _not implemented_
