export const deskStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('page').title('Pages'),
      S.divider(),
      S.documentTypeListItem('settings').title('Site Settings'),
    ])