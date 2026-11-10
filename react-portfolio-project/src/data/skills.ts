

export interface SkillsItem{
    id?: number;
    title: string;
    description: string;
    svgIcon: string;
    imgAlt: string;
    category: `Languages` | `Frameworks` | `Tools`;
}

export const SKILLS_DATA: SkillsItem[] = [
    {
        id: 1,
        svgIcon: `/html5.svg`,
        imgAlt: "The html5 logo",
        title: `HTML`,
        description: `Semantic & accessible page structure`,
        category: `Languages`
    },
    {
        id: 2,
        svgIcon: `/css.svg`,
        imgAlt: "The CSS logo",
        title: `CSS`,
        description: `Responsive and polished visual design`,
        category: `Languages`
    },
    {
        id: 3,
        svgIcon: `/javascript.svg`,
        imgAlt: "The Javascript logo",
        title: `Javascript`,
        description: `Dynamic and interactive web applications`,
        category: `Languages`
    },
    {
        id: 4,
        svgIcon: `/typescript.svg`,
        imgAlt: "The Typescript logo",
        title: `Typescript`,
        description: `Type-safe maintainable application development`,
        category: `Languages`
    },
    {
        id: 5,
        svgIcon: `/react.svg`,
        imgAlt: "The React logo",
        title: `React`,
        description: `Component-based interactive user interface`,
        category: `Frameworks`
    },
    {
        id: 6,
        svgIcon: `/nextdotjs.svg`,
        imgAlt: "The Next.js logo",
        title: `Next.js`,
        description: `Full-stack React application framework`,
        category: `Frameworks`
    },
    {
        id: 7,
        svgIcon: `/tanstack.svg`,
        imgAlt: "The tanstack logo",
        title: `Tanstack Query`,
        description: `Server-state fetching and synchronization`,
        category: `Frameworks`
    },
    {
        id: 8,
        svgIcon: `/tanstack.svg`,
        imgAlt: "The tanstack logo",
        title: `Tanstack Router`,
        description: `Type-safe client-side routing`,
        category: `Frameworks`
    },
    {
        id: 9,
        svgIcon: `/vite.svg`,
        imgAlt: "The Vite logo",
        title: `Vite`,
        description: `Fast modern frontend build tooling`,
        category: `Tools`
    },
    {
        id: 10,
        svgIcon: `/react.svg`,
        imgAlt: "The React logo",
        title: `React Devtools`,
        description: `Inspect and debug React components`,
        category: `Tools`
    },
    {
        id: 11,
        svgIcon: `/googlechrome.svg`,
        imgAlt: "The Google Chrome logo",
        title: `Chrome Devtools`,
        description: `Debug and inspect web applications`,
        category: `Tools`
    },
    {
        id: 12,
        svgIcon: `/git.svg`,
        imgAlt: "The Git logo",
        title: `Git & GitHub`,
        description: `Version control and code collaboration`,
        category: `Tools`
    }
]