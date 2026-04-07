export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    { name: 'company', type: 'string' },
    { name: 'role', type: 'string' },
    { name: 'startDate', type: 'date' },
    { name: 'endDate', type: 'date' },
    { name: 'current', type: 'boolean' },
    { name: 'description', title: 'Work Details (Use bullet points for more details)', type: 'array', of: [{ type: 'block' }] },
    { name: 'techStack', title: 'Technologies/Key Skills', type: 'array', of: [{ type: 'string' }] },
    { name: 'logo', title: 'Company Logo', type: 'image' },
  ]
};
