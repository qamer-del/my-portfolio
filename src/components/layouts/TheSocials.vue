<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-1">
      <SocialIcon title="Github" link="#" icon="ant-design:github-filled" />
      <SocialIcon title="Twitter" link="#" icon="ant-design:twitter-outlined" />
      <SocialIcon title="Instagram" link="#" icon="ant-design:instagram-outlined" />
    </div>
    <ActionButton link="mailto:Gameribrahim9@gmail.com">Email Me</ActionButton>
  </div>
</template>

<script>
import SocialIcon from "../ui/SocialIcon.vue";
import ActionButton from "../ui/ActionButton.vue";

export default {
  components: { SocialIcon, ActionButton },
};
</script>
