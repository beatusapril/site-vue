<script setup>
import classes from './card.module.scss';
import { img } from '../../api/API';
import { post } from '../../store/types'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  index: Number,
  post: { ...post }
});

function onRedirect() {
  router.push(`/news/${props.post.id}`)
}

</script>

<template>
  <div @dblclick="onRedirect" :class="[classes.card, props.index % 2 != 0 ? classes.odd : classes.even]">
    <div :class="[classes.card__photo, classes.card__block]">
      <img :src="img(props.post.imgUrl)"></img>
    </div>
    <div :class="[classes.card__text, classes.card__block]">
      {{ props.post && props.post.title }}
      {{ props.post && props.post.text }}
    </div>
  </div>
</template>

<style scoped></style>
