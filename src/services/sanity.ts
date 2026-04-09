import { sanityClient } from '@/lib/sanityClient';

export async function getProjects() {
  return sanityClient.fetch(`*[_type == "project"] | order(order asc)`);
}

export async function getExperiences() {
  return sanityClient.fetch(`*[_type == "experience"] | order(startDate desc)`);
}

export async function getSkills() {
  return sanityClient.fetch(`*[_type == "skill"] | order(order asc)`);
}

export async function getPersonalInfo() {
  return sanityClient.fetch(`*[_type == "personalInfo"][0]{
    ...,
    "resumeUrl": resume.asset->url
  }`);
}
