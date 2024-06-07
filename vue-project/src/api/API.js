const server = import.meta.env.VITE_SERVER;

export const getPosts = `${server}posts`;


export const img = (src) => `${server}/${src}`