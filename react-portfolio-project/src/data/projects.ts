export interface ProjectItem {
    id?: string;
    title: string;
    thumbnailImage?: string;
    imageAlt?: string;
    description: string;
    techTags: string[];
    demoUrl: string;
    repoUrl: string;
    category: `All` | `React` | `Javascript`
}

export const PROJECTS_DATA: ProjectItem[] = [
    {
        id: `portfolio`,
        title: `Personal developer portfolio`,
        thumbnailImage: `/developer-portfolio.png`,
        imageAlt: `A preview image of the developer portfolio project`,
        description: `Responsive portfolio built with React 19, TypeScript, and CSS3 modules.`,
        techTags: ['React, ', 'Typescript, ', 'Vite, ', 'CSS Modules'],
        demoUrl: `https://miguelbaldacchino.dev`,
        repoUrl: `https://github.com/miggggggggg/react-portfolio-project`,
        category: `React`
    },
    {
        id: `task-app`,
        title: `Interactive Kanban Task Board`,
        imageAlt: `A placeholder image`,
        description: `Drag-and-drop task management with LocalStorage persistence.`,
        techTags: [`React, `, `TypeScript, `, `HTML5 Drag & Drop`],
        demoUrl: `https://task-board-demo.vercel`,
        repoUrl: `https://github.com/miggggggggg/kanban-board`,
        category: `React`
    }
]