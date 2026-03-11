import { defineType, defineField } from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [

    defineField({
      name: 'label',
      title: 'Label',
      type: 'localeString',
      description: 'Text to display for the link'
    }),

    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Full URL, must start with http:// or https://'
    }),

    defineField({
      name: 'openInNewTab',
      title: 'Open in new tab',
      type: 'boolean',
      description: 'If checked, the link will open in a new tab'
    })

  ]
})