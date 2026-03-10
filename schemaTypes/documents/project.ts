import { defineType, defineField } from 'sanity'
import { seo } from '../objects/seo'
import { richText } from '../objects/richText'

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
      description: 'Short description of the project',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Select the category for this project',
      options: { disableNew: false },
    }),

    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'All images for this project.',
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'richText',
      description: 'Main content of the project',
    }),

    defineField({
      name: 'seo',
      title: 'Project SEO',
      type: 'seo',
      description: 'If empty, global SEO will be used.',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      subtitle: 'category.title',
    },
  },
})