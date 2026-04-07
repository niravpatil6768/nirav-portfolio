import { type SchemaTypeDefinition } from 'sanity';
import personalInfo from './schemas/personalInfo';
import project from './schemas/project';
import experience from './schemas/experience';
import skill from './schemas/skill';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [personalInfo, project, experience, skill],
};
