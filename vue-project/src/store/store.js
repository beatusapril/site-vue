import { createStore } from 'vuex'
import  {getPosts} from '../api/API'

export const store = createStore({
  state () {
    return {
      posts: new Map()
    }
  },
  getters: {
    getPostById(id) {
      return state.posts[id];
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