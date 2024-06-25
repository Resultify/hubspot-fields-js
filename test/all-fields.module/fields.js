/* eslint-disable no-unused-vars */
import {
  group,
  styleGroup,
  init,
  moduleFields as fi
} from '../../index.js'

init(
  fi.audioplayer('Audio Player', 'audioplayer'),
  fi.blog('Blog', 'blog'),
  fi.boolean('Boolean', 'boolean'),
  fi.choice('Choices', 'choices'),
  fi.date('Date', 'date'),
  fi.datetime('Datetime', 'datetime'),
  fi.email('Email', 'email'),
  fi.embed('Embed', 'embed'),
  fi.file('File', 'file'),
  fi.font('Font', 'font'),
  fi.form('Form', 'form'),
  fi.html('HTML', 'html'),
  fi.crmobject('CRM Object', 'crmobject', {
    object_type: 'COMPANY'
  }),
  fi.crmobjectproperty('CRM Object Property', 'crmobjectproperty', {
    object_type: 'COMPANY'
  }),
  fi.cta('CTA', 'cta'),
  fi.hubl('HubL', 'hubl'),
  // fi.hubdbrow('HubDB Row', 'hubdbrow', {
  //   table_name_or_id: 'test'
  // }),
  fi.hubdbtable('HubDB Table', 'hubdbtable'),
  fi.icon('Icon', 'icon'),
  fi.image('Image', 'image'),
  fi.link('Link', 'link'),
  fi.logo('Logo', 'logo'),
  fi.meeting('Meeting', 'meeting'),
  fi.menu('Menu', 'menu'),
  fi.number('Number', 'number'),
  fi.page('Page', 'page'),
  fi.payment('Payment', 'payment'),
  fi.podcast('Podcast', 'podcast'),
  fi.richtext('Rich Text', 'richtext'),
  fi.simplemenu('Simple Menu', 'simplemenu'),
  group('Group', 'group', {},
    fi.tag('Tag', 'tag'),
    fi.text('Text', 'text'),
    fi.url('URL', 'url')
  ),
  group('Group2', 'group2', {},
    fi.video('Video', 'video')
  ),
  styleGroup(
    fi.alignment('Aligment', 'alignment'),
    fi.color('Color', 'color'),
    fi.backgroundimage('Background Image', 'backgroundimage'),
    fi.border('Border', 'border'),
    fi.gradient('Gradient', 'gradient'),
    fi.spacing('Spacing', 'spacing'),
    fi.textalignment('Text Alignment', 'textalignment')
  )
)
