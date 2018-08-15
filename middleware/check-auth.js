export default function ({ store, req }) {
   // If nuxt generate, pass this middleware
  let isServer = process.server;
  if (isServer && !req) return
  const loggedUser = isServer ? {userName: 'yudachao'} : {userName: 'YuDC'}
  store.commit('SET_USER', loggedUser)
}
