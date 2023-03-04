import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "Scarlet Dynasty",
        image: new URL("../assets/featured/scarlet_dyn.png", import.meta.url)
          .href,
        description:
          "I made this website for my friend's online store. Scarlet Dynasty is a team creating content for Minecraft Marketplace.",
        tech: ["Vue.js", "TailwindCSS"],
        featured: false,
      },
      {
        id: 2,
        name: "Stust - Fictional Card Designers",
        image: new URL("../assets/featured/stust.png", import.meta.url).href,
        description:
          "Stust is a made-up company which designs minimalistic card designs with high quality. This was a website made to practice Vue.js",
        tech: ["Vue.js", "TailwindCSS"],
        featured: true,
      },
      {
        id: 3,
        name: "Advice Generator",
        image: new URL("../assets/featured/advice-gen.png", import.meta.url)
          .href,
        description:
          "A very simple Advice Generator, which gives advice with a click!",
        tech: ["HTML", "CSS", "JS", "REST APIs"],
      },
    ],
    
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getFeaturedProjects: (state) =>
      state.projects.filter((project) => project.featured),

  },
});