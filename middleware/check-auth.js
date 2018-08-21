import {
  getUserFormCookie,
  getTokenFormCookie
} from '../util/auth'

export default function ({ store, req }) {
   // If nuxt generate, pass this middleware
  let isServer = process.server
  let isClient = process.client
  console.log(isClient, isServer)
  let user = ''
  if (isServer && !req) return

  // 在服务端
  if (isServer) {
    user = getUserFormCookie(req)
  }

  // 在客户端
  if (isClient) {
    user = getTokenFormCookie()
  }
  store.commit('SET_USER', user)
}
