<template>
  <div class="flex flex-col gap-8">
    <img :src="TopImage" class="h-28 rounded-xl object-cover" />
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      I'm Gamer Ibrahim, Front-End Web Designer , Specialized in Web Development with Vue 3,
      JavaScript, Bootstrap, and Tailwind
    </p>

    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      I started learning about web-development in my early high-school, where I
      was introduced to HTML and CSS. I quickly started writing small webpages
      with simple HTML and little of CSS. After my high-school, I took some time
      to myself and explored the web development world more and found many
      frameworks. Out of all, I found my love for Vue.js. Since then, I've been
      mastering it, and with every new project I added a new tool, like
      TailwindCSS, JavaScript and more.
    </p>
    <p class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose">
      You can find my projects on my
      <span>Github</span>
      or on my
      <span>Portfolio</span>
      page. I usually don't update my
      portfolio page but all my recent one's are on github.
    </p>


    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" />
    <div class="flex flex-col gap-5">
      <h3 class="font-theme_bold text-head_text text-3xl">Work</h3>
      <div class="flex flex-col gap-8 py-4">
        <div v-for="work in works" :key="work.id" :href="work.link"
          class="flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6">
          <span class="font-theme_bold text-head_text">Bank Of Khartoum</span>
          <span class="flex-[1_1_auto]"></span>
          <span class="sm:text-right text-sm sm:text-base">IT System Support Specialist</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useWorkStore } from "../store/workStore";
import TopImage from "../assets/imgs/about-image.jpg"

const workStore = useWorkStore();
const works = workStore.getAllWorks;
</script>
