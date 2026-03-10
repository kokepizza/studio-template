import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
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
      options: { source: 'title' },
    }),

    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'Short description of the project'
    }),

    defineField({
    name: 'category',
    title: 'Category',
    type: 'reference',
    to: [{ type: 'category' }],
    description: 'Select the category for this project',
    options: {
        disableNew: false
    }
    }),

    defineField({
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'The first image will be used as the thumbnail for the project listing page.'
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'richText',
      description: 'Main content of the project'
    }),

    defineField({
      name: 'seo',
      title: 'Project SEO',
      type: 'seo',
      description: 'SEO settings for this project. If empty, global SEO will be used.'
    })

  ],

  preview: {
    select: {
      title: 'title',
      media: 'projectImages.0',
      subtitle: 'category.title',
    }
  }
})