import { DocumentIcon, CaseIcon, CogIcon, TagIcon, RocketIcon, DashboardIcon } from '@sanity/icons'

export const deskStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([

      S.listItem()
        .title('Pages')
        .icon(DocumentIcon)
        .child(S.documentTypeList('page')),

      S.listItem()
        .title('Projects')
        .icon(CaseIcon)
        .child(
          S.list()
            .title('Projects')
            .items([
              S.listItem()
                .title('All Projects')
                .child(S.documentTypeList('project')),

              S.divider(),

              S.listItem()
                .title('Featured')
                .icon(RocketIcon)
                .child(
                  S.documentTypeList('project')
                    .filter('_type == "project" && featured == true')
                ),
            ])
        ),

      S.documentTypeListItem('category')
        .title('Categories')
        .icon(TagIcon),

      S.documentTypeListItem('services')
        .title('Services')
        .icon(DashboardIcon),

      S.divider(),

      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        ),
    ])