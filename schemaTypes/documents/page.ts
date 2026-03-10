import {defineType, defineField} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',

  fields: [

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
    }),

    defineField({
      name: 'seo',
      title: 'Page SEO',
      type: 'seo',
      description: 'SEO settings for this page. If empty, the global SEO from Settings should be used.'
    })

  ]
})