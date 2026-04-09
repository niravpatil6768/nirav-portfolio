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
    { name: 'heroTitlePrimary', title: 'Hero Title Primary (e.g. NIRAV)', type: 'string' },
    { name: 'heroTitleSecondary', title: 'Hero Title Secondary (e.g. ENGINEER)', type: 'string' },
    { name: 'projectsCount', title: 'Projects Count (e.g. 40+)', type: 'string' },
    { name: 'deploymentsCount', title: 'Deployments Count (e.g. 100+)', type: 'string' },
    { name: 'avatar', type: 'image' },
    { name: 'resume', title: 'Resume PDF/Doc', type: 'file' },
    { name: 'email', type: 'string' },
    { name: 'mobile', title: 'Mobile Number', type: 'string' },
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
    },
    { 
      name: 'visibleNavIcons', 
      title: 'Visible Navbar Icons',
      type: 'object', 
      fields: [
        { name: 'linkedin', title: 'LinkedIn', type: 'boolean', initialValue: true },
        { name: 'github', title: 'GitHub', type: 'boolean', initialValue: true },
        { name: 'email', title: 'Email', type: 'boolean', initialValue: true },
        { name: 'twitter', title: 'Twitter/X', type: 'boolean', initialValue: true },
        { name: 'discord', title: 'Discord', type: 'boolean', initialValue: true },
        { name: 'leetcode', title: 'LeetCode', type: 'boolean', initialValue: true }
      ],
      options: { collapsible: true, collapsed: false }
    }
  ]
};
