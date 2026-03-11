import { defineType, defineField } from 'sanity'

const supportedLanguages = [
  { id: 'ca', title: 'Catalan', isDefault: true },
  { id: 'es', title: 'Spanish' },
  { id: 'en', title: 'English' }
]

export const localeText = defineType({
  name: 'localeText',
  title: 'Localized Text',
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
      type: 'text',
      rows: 4,
      ...(lang.isDefault ? {} : { fieldset: 'translations' })
    })
  )
})