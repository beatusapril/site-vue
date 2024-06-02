import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  {getPosts} from './api/API'

import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      posts: new Map()
    }
  },
  mutations: {
    setPosts (state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    fetchAllPosts({commit}) {
      const fetchPromise = fetch(
        getPosts,
        );
      
      return fetchPromise
        .then((response) => response.json())
        .then((data) => {
           const postsAll = new Map(data.map(value=> [value.id, value]));
           commit('setPosts', postsAll);
        });
    }
  }
});

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
