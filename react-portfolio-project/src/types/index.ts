/* currently unused types
export interface Project {
id: string;
title: string;
description: string;
technologies: string[];
imageUrl: string;
liveUrl: string;
githubUrl: string;
featured: boolean;
category: 'all' | 'react' | 'javascript' | 'fullstack';
}
export interface SkillCategory {
title: string;
skills: {
name: string;
category: 'languages' | 'frameworks' | 'tools';
}[];
}
export interface ContactFormData {
name: string;
email: string;
subject: string;
message: string;
}
export interface FormStatus {
state: 'idle' | 'submitting' | 'success' | 'error';
errorMessage?: string;
} */
export interface AboutCardData {
 title: string;
 description?: string;
}
export interface StrengthCardData {
strength: string;
}