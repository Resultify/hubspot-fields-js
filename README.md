# hubspot-fields-js
**Generate HubSpot module `fields.json` from `fields.js`**

[![Run tests](https://github.com/Resultify/hubspot-fields-js/actions/workflows/test.yml/badge.svg)](https://github.com/Resultify/hubspot-fields-js/actions/workflows/test.yml)
![node-current](https://img.shields.io/node/v/@resultify/hubspot-fields-js)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![JSDoc](https://img.shields.io/badge/API\%20documentation-JSDoc-yellow)

[**Documentation**](https://resultify.github.io/hubspot-fields-js)

## Table of contents

- [Why?](#why)
- [Main features and advantages to other solutions](#main-features-and-advantages-to-other-solutions)
- [General recommendations](#general-recommendations)
- [Quick start](#quick-start)
- [field.js structure](#fieldjs-structure)
- [Example](#example)
- [Content tab fields vs Style tab fields](#content-tab-fields-vs-style-tab-fields)
- [Changelog](CHANGELOG.md)


## Why?
- When you create and maintain `fields.json` files for modules, they can easily become long, challenging to read, and hard to update as time goes by. `hubspot-fields-js` provides a convenient way to work with these files in your HubSpot modules. This tool ensures ease of use and simplifies the process of updating these files over time.
- One of the biggest advantages is the ability to abstract fields into partials. This allows for the creation of a library of field groups that can be reused across all modules. This leads to a more consistent organization and naming of options, making it easier for users to establish muscle memory and have a positive overall experience.
- Developers can now fully implement the module in their local development environment, which is the final step in bringing HubSpot CMS development to their local setup. This provides developers with extensive opportunities to enhance their work.
- No issues with module `IDs` in the version control system (`git`) when using multiple HubSpot accounts in development. For example, a few developer sandboxes and a production HubSpot account.
- There is great potential for automation and code generation. Using `JS` you can easily automate any task you desire.

## Main features and advantages to other solutions
- All fields have thorough documentation both [externally](https://resultify.github.io/hubspot-fields-js/) and within the code.
- The fields in fields.js come with predefined default values (same as in HubSpot), which helps reduce the amount of code needed. If you're happy with a default value, you can simply skip adding it.
- All fields are fully documented with `JSDoc` syntax, providing complete support for **code completion** and **documentation in code editors**. You no longer need to refer to HubSpot documentation to comprehend field meanings or available options/values. `hubspot-fields-js` includes all necessary information within your code editor.
- The API abstraction is kept to a minimum, using JSON-like JavaScript. If you are already familiar with HubSpot's fields.json, you do not need to learn much more as the main field structure is essentially the same.
- You don't need any additional dependencies such as some JS task runners to start. All you need is `Node.js` to compile your `fields.js` files. But for more convenience, you can use our [hubspot-cms-lib](#general-recommendations) or any other task runner on your choice.

## General recommendations
- Add `modules/../fields.json` to `.gitignore`
- Create modules on your local environment, not in HubSpot design tools
- Ignore adding any module `id` in `meta.json` from the start. Keep it simple:
```json
{
  "global" : false,
  "host_template_types" : [ "PAGE", "BLOG_POST", "BLOG_LISTING" ],
  "is_available_for_new_content" : true
}
```
- Check our [hubspot-cms-lib](https://github.com/Resultify/hubspot-cms-lib) to get the full potential of `hubspot-fields-js` and much more benefits:
    - "Watch" process for all HubSpot CMS theme files plus compiling `felds.js` and uploading `fields.json`.
    - JS`ES6`/CSS/SASS compilers with the possibility to configure any options on a theme base.
    - HubSpot CLI `upload`, `fetch` and `watch` commands integrated with other scripts.
    - Custom HubSpot multi-account authentication for easier work with multiple accounts.

## Quick start
1. Install `hubspot-fields-js` package
```js
npm install hubspot-fields-js
```
2. Create a new module
3. Create `fields.js` file in the module folder
4. Add fields to `fields.js` file
5. Compile `fields.js` to `fields.json` by running command `node path/to/module/fields.js`
6. Upload module to HubSpot



## `field.js` structure
Each field or group with some exceptions consists of:
- Label
- Name
- Content options (unique options per field)
- Editor options
- Display conditions
- Repeater options

```js
import { initModule } from '@resultify/hubspot-fields-js/lib/init.js'
import { fi } from '@resultify/hubspot-fields-js/fields.js'
import { group, styleGroup } from '@resultify/hubspot-fields-js/lib/group.js'

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
import { initModule } from '@resultify/hubspot-fields-js/lib/init.js'
import { fi } from '@resultify/hubspot-fields-js/fields.js'
import { group, styleGroup } from '@resultify/hubspot-fields-js/lib/group.js'

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

## Example

```js
import { initModule } from '@resultify/hubspot-fields-js/lib/init.js'
import { fi } from '@resultify/hubspot-fields-js/fields.js'
import { group, styleGroup } from '@resultify/hubspot-fields-js/lib/group.js'

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
Check more examples in `partials` folder.

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
