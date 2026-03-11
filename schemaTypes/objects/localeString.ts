import { defineType, defineField } from 'sanity'

const supportedLanguages = [
  { id: 'ca', title: 'Catalan', isDefault: true },
  { id: 'es', title: 'Spanish' },
  { id: 'en', title: 'English' }
]

export const localeString = defineType({
  name: 'localeString',
  title: 'Localized String',
  type: 'object',
  fieldsets: [
    {
      name: 'translations',
      title: 'Translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: 'string',
      ...(lang.isDefault ? {} : { fieldset: 'translations' })
    })
  )
})