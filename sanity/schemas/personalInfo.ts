export default {
  name: 'personalInfo',
  title: 'Personal Info',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'role', type: 'string' },
    { name: 'tagline', type: 'string' },
    { name: 'bio', type: 'text' },
    { name: 'yearsOfExperience', type: 'number' },
    { name: 'avatar', type: 'image' },
    { name: 'resumeUrl', type: 'url' },
    { name: 'email', type: 'string' },
    { name: 'github', type: 'url' },
    { name: 'linkedin', type: 'url' },
    { name: 'twitter', type: 'url' },
    { name: 'discord', type: 'string', description: 'Discord username or invite link' },
    { name: 'leetcode', type: 'url' },
    { 
      name: 'visibleSections', 
      title: 'Visible Sections',
      type: 'object', 
      fields: [
        { name: 'hero', title: 'Hero', type: 'boolean', initialValue: true },
        { name: 'about', title: 'About', type: 'boolean', initialValue: true },
        { name: 'skills', title: 'Skills', type: 'boolean', initialValue: true },
        { name: 'projects', title: 'Projects', type: 'boolean', initialValue: true },
        { name: 'experience', title: 'Experience', type: 'boolean', initialValue: true },
        { name: 'contributions', title: 'Contributions', type: 'boolean', initialValue: true },
        { name: 'contact', title: 'Contact', type: 'boolean', initialValue: true }
      ],
      options: { collapsible: true, collapsed: false }
    }
  ]
};
