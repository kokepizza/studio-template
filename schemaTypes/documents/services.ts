import { defineType, defineField } from 'sanity'
import { DashboardIcon } from '@sanity/icons'

export const services = defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  icon: DashboardIcon,
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
      options: { source: 'title' }
    }),
  ],
  preview: {
      select: {
        titleCa: 'title.ca',
        titleEs: 'title.es',
        titleEn: 'title.en'
      },
      prepare({ titleCa, titleEs, titleEn }) {
        const title = titleCa || titleEs || titleEn || 'Untitled'
        return { title }
      }
  }
})