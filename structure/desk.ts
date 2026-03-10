import { DocumentIcon, RocketIcon, WrenchIcon, TagIcon } from '@sanity/icons'
import * as Icons from '@sanity/icons'

console.log(Object.keys(Icons))

export const deskStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('page')
        .title('Pages')
        .icon(DocumentIcon),
      S.documentTypeListItem('project')
        .title('Projects')
        .icon(RocketIcon),
      S.documentTypeListItem('category')
        .title('Categories')
        .icon(TagIcon),
      S.divider(),
      S.documentTypeListItem('settings')
        .title('Settings')
        .icon(WrenchIcon),
    ])