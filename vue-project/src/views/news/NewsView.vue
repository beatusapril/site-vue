<script setup>
import {computed} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { img } from '../../api/API';

const store = useStore();
const router = useRoute();

const post = computed(() => store.getters.getPostById(router.params['id']));
</script>

<template>
    <div :v-if="post && post.id">
        <div >{{post.title}}</div>
    <img :src="img(post.imgUrl)"></img>
    <div>
        {{post.text}}
    </div>
    </div>
     <div :v-else="!post || !post.id ">
        Waiting of the loading...
     </div>
</template>
<style scoped></style>
