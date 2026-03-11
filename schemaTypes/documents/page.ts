import {defineType, defineField} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',

  fields: [

    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
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
  ],
  preview: {
    select: {
      titleCa: 'title.ca',
      titleEs: 'title.es',
      titleEn: 'title.en'
    },
    prepare({ titleCa, titleEs, titleEn }) {
      return {
        title: titleCa || titleEs || titleEn || 'Untitled'
      }
    }
  }
})