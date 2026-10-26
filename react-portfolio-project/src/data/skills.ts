export interface SkillsItem{
    id?: number;
    title: string;
    description: string;
    category: `Languages` | `Frameworks` | `Tools`;
}

export const SKILLS_DATA: SkillsItem[] = [
    {
        id: 1,
        title: `HTML`,
        description: `Semantic & accessible page structure`,
        category: `Languages`
    },
    {
        id: 2,
        title: `CSS`,
        description: `Responsive and polished visual design`,
        category: `Languages`
    },
    {
        id: 3,
        title: `Javascript`,
        description: `Dynamic and interactive web applications`,
        category: `Languages`
    },
    {
        id: 4,
        title: `Typescript`,
        description: `Type-safe maintainable application development`,
        category: `Languages`
    },
    {
        id: 5,
        title: `React`,
        description: `Component-based interactive user interface`,
        category: `Frameworks`
    },
    {
        id: 6,
        title: `Next.js`,
        description: `Full-stack React application framework`,
        category: `Frameworks`
    },
    {
        id: 7,
        title: `Tanstack Query`,
        description: `Server-state fetching and synchronization`,
        category: `Frameworks`
    },
    {
        id: 8,
        title: `Tanstack Router`,
        description: `Type-safe client-side routing`,
        category: `Frameworks`
    },
    {
        id: 9,
        title: `Vite`,
        description: `Fast modern frontend build tooling`,
        category: `Tools`
    },
    {
        id: 10,
        title: `React Devtools`,
        description: `Inspect and debug React components`,
        category: `Tools`
    },
    {
        id: 11,
        title: `Chrome Devtools`,
        description: `Debug and inspect web applications`,
        category: `Tools`
    },
    {
        id: 12,
        title: `Git & GitHub`,
        description: `Version control and code collaboration`,
        category: `Tools`
    }
]