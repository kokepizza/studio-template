import {defineType, defineField} from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site title',
      type: 'string'
    }),

    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'seo'
    }),

    defineField({
      name: 'footerText',
      title: 'Footer text',
      type: 'string'
    })
  ]
})