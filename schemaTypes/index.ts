import { settings } from './documents/settings'
import { page } from './documents/page'
import { project } from './documents/project'
import { category } from './documents/category'
import { services } from './documents/services'

import { seo } from './objects/seo'
import { link } from './objects/link'
import { localeString } from './objects/localeString'
import { localeBlock } from './objects/localeBlock'
import { localeText } from './objects/localeText'

export const schemaTypes = [
  settings,
  page,
  project,
  category,
  services,
  seo,
  link,
  localeString,
  localeBlock,
  localeText
]