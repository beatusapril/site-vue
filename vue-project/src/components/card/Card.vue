<script setup>
import classes from './card.module.scss';

const props = defineProps({
  index: Number,
  post: {
    id: Number,
  title: String,
  text: String, 
  views: Number
  }
});

</script>

<template>
  <div :class="[classes.card, index % 2 != 0 ? classes.odd : classes.even]">
      <div :class="[classes.card__photo, classes.card__block]">
          
      </div>
      <div :class="[classes.card__text, classes.card__block]">
          {{ props.post && props.post.title }}
          {{ props.post && props.post.text }}
      </div>
  </div>
</template>

<style scoped>
</style>


