export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', type: 'text' },
    { name: 'thumbnail', type: 'image' },
    { name: 'tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'techStack', type: 'array', of: [{ type: 'string' }] },
    { name: 'liveUrl', type: 'url' },
    { name: 'githubUrl', type: 'url' },
    { name: 'featured', type: 'boolean' },
    { name: 'order', type: 'number' },
  ]
};
