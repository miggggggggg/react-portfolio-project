export interface ProjectCardData {
    thumbnailImage: string;
    imageAlt: string;
    title: string;
    description: string;
    techTags: string;
    demoLink: string;
    repolink: string
}

export interface ProjectCategory{
    category: `All` | `React` | `Javascript`
}