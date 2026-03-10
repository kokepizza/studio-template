import { defineType, defineField } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',

  fields: [
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

  preview: {
    select: {
      media: 'favicon'
    },
    prepare() {
      return {
        title: 'Settings',
        media: undefined
      }
    }
  }
})