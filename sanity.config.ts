import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './sanity/schema';

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Nirav Portfolio',

  plugins: [structureTool()],
  schema: {
    types: schema.types,
  },
});
