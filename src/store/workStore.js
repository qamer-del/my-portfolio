import { defineStore } from "pinia";

export const useWorkStore = defineStore("workStore", {
  state: () => ({
    works: [
      {
        id: 1,
        name: "Trileotech",
        position: "Jr. Frontend Developer",
        from: "2022",
        to: "Cur.",
        link: "#",
      },
    ],
  }),
  getters: {
    getAllWorks: (state) => state.works,
  },
});
