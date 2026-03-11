import { defineType, defineField } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',

  fields: [

    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Settings',
      hidden: true,
    }),

    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Global icon for the website. Must be square PNG image.',
      options: { hotspot: false }
    }),

    defineField({
      name: 'seo',
      title: 'Global SEO',
      type: 'seo',
      description: 'SEO settings applied globally across the site'
    })
  ],
})