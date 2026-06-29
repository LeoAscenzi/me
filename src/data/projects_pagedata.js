import { react_tag, javascript_tag, springboot_tag, typescript_tag, java_tag, python_tag, kafka_tag, reactnative_tag, postgres_tag, wordpress_tag, docker_tag, nextjs_tag, fastapi_tag, expo_tag } from "./tags.js";

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

export const personalProjectKeys = ["ivy-bridge-society", "order-book-sim", "cap-curate", "raider-rumble-game"];
export const personalProjectsData = {
    "ivy-bridge-society": {
        title: "Ivy Bridge Society",
        description: "Full-Stack Ed-Tech Platform",
        image: "/project-resources/ivy-bridge-cover.png",
        imageLink: "/projects/ivy-bridge-society",
        website: "https://www.ivybridgesociety.com",
        tags: [nextjs_tag, fastapi_tag, postgres_tag, expo_tag, docker_tag]
    },
    "order-book-sim": {
        title: "Order Book Sim",
        description: "High throughput event kafka practice",
        image: "/project-resources/order-book-sim-cover.png",
        imageLink: "/projects/order-book-sim",
        repo: "https://github.com/LeoAscenzi/order-book-sim",
        tags: [python_tag, kafka_tag, typescript_tag]
    },
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
