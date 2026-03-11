import { defineType, defineField } from 'sanity'

export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'localeString',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'publishedAt',
            title: 'Published At',
            description: 'Displayed in order: newest first',
            type: 'datetime',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'If checked, the project will be featured on the homepage',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'localeText',
            description: 'Short description of the project',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
            description: 'Select one or more categories for this project',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'image',
            options: { hotspot: true },
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'projectImages',
            title: 'Project Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            description: 'All images for this project.',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'localeBlock' }],
            description: 'Main content of the project',
            validation: (rule) => rule.required(),
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
            titleCa: 'title.ca',
            titleEs: 'title.es',
            titleEn: 'title.en',
            media: 'thumbnail',
            publishedAt: 'publishedAt',
            categories0: 'categories.0.title',
            categories1: 'categories.1.title',
            categories2: 'categories.2.title',
        },
        prepare({ titleCa, titleEs, titleEn, media, publishedAt, categories0, categories1, categories2 }) {
            const title = titleCa || titleEs || titleEn || 'Untitled'

            const subtitleCategories = [categories0, categories1, categories2].filter(Boolean).join(', ')
            const subtitleDate = publishedAt ? ` • ${new Date(publishedAt).toLocaleDateString()}` : ''
            const subtitle = `${subtitleCategories}${subtitleDate}`

            return { title, media, subtitle }
        }
    }
})