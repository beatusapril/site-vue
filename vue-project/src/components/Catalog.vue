<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import Card from './card/Card.vue';

const store = useStore();
const posts = ref(computed(() => store.state.posts.values()));

onMounted(() => {
   store.dispatch("fetchAllPosts");
});
</script>

<template>
  <li v-for="(item, index) in posts">
  <Card :index="index" :post="{...item}"/>
</li>
</template>

<style scoped>

</style>
