import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'euphoria',

  projectId: 'dti1wt09',
  dataset: 'products_euphoria',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
