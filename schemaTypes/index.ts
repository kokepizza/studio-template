import { settings } from './documents/settings'
import { page } from './documents/page'
import { project } from './documents/project'
import { category } from './documents/category'

import { seo } from './objects/seo'
import { link } from './objects/link'
import { richText } from './objects/richText'

export const schemaTypes = [
  settings,
  page,
  project,
  category,
  seo,
  link,
  richText
]