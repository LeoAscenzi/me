import { react_tag, javascript_tag, springboot_tag, typescript_tag, java_tag, python_tag, reactnative_tag, postgres_tag, wordpress_tag } from "./tags.js";

export const workProjectKeys = ["raytheon-project", "contract-ai", "joulebug", "miluma"];
export const workProjectsData = {
    "raytheon-project": {
        title: "Raytheon Project",
        description: "Customizing Windchill PDM",
        image: "/project-resources/raytheon-cover.png",
        imageLink: "/projects/raytheon",
        website: "https://www.raytheon.com/",
        tags: [java_tag, springboot_tag]
    },
    "contract-ai": {
        title: "Contract AI",
        description: "Modern Website Redesign",
        image: "/project-resources/contract-ai-cover.png",
        imageLink: "/projects/contract-ai",
        website: "https://www.contract-ai.com/",
        tags: [wordpress_tag, react_tag, typescript_tag]
    },
    "joulebug": {
        title: "Joulebug",
        description: "Gamified ESG Application",
        image: "/project-resources/joulebug-cover.png",
        imageLink: "/projects/joulebug",
        website: "https://www.joulebug.com/",
        tags: [react_tag, reactnative_tag]
    },
    "miluma": {
        title: "MiLuma",
        description: "Puerto Rico Energy Portal",
        image: "/project-resources/miluma-cover.png",
        imageLink: "/projects/miluma",
        website: "https://miluma.lumapr.com/login",
        tags: [react_tag, springboot_tag, postgres_tag]
    },
}

export const personalProjectKeys = ["cap-curate", "raider-rumble-game"];
export const personalProjectsData = {
    "cap-curate": {
        title: "CapCurate",
        description: "AI Powered Video Clip Finder",
        image: "/project-resources/capcurate-cover.png",
        imageLink: "/projects/cap-curate",
        repo: "https://github.com/LeoAscenzi/cap-curate-backend",
        tags: [python_tag]
    },
    "raider-rumble-game": {
        title: "Raider Rumble",
        description: "ThreeJS Web Game - Colgate University",
        image: "/project-resources/raider-rumble-cover.png",
        imageLink: "/projects/raider-rumble-game",
        repo: "https://github.com/LeoAscenzi/RaiderRumbleGame/",
        website: "https://LeoAscenzi.github.io/RaiderRumbleGame/",
        tags: [javascript_tag]
    }
};
