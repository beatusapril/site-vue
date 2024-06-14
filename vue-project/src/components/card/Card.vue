<script setup>
import classes from './card.module.scss';
import { img } from '../../api/API';
import { Post } from '../../store/types'

const props = defineProps({
  index: Number,
  post: { ...Post }
});

</script>

<template>
  <div :v_if="props.post.id" :class="[classes.card, props.index % 2 != 0 ? classes.even : classes.odd]">
    <div :class="[classes.card__photo, classes.card__block]">
      <img :src="img(props.post.imgUrl)"></img>
    </div>
    <div :class="[classes.card__text, classes.card__block]">
      {{ props.post.title }}
      {{ props.post.text }}
      <RouterLink :to="{ name: 'newsPage', params: { id: 1 } }">More...</RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
