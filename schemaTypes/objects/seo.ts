import {defineType, defineField} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',

  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string'
    }),

    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text'
    }),

    defineField({
      name: 'shareImage',
      title: 'Share image',
      type: 'image'
    })
  ]
})