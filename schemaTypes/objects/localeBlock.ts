import { defineType, defineField } from 'sanity'

const supportedLanguages = [
  { id: 'ca', title: 'Catalan', isDefault: true },
  { id: 'es', title: 'Spanish' },
  { id: 'en', title: 'English' }
]

export const localeBlock = defineType({
  name: 'localeBlock',
  title: 'Localized Block',
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
      type: 'array',
      of: [{type: 'block',}],
      ...(lang.isDefault ? {} : { fieldset: 'translations' })
    })
  )
})