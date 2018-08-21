import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

export const setToken = (token) => {
  // if (process.SERVER_BUILD) return
  Cookie.set('jwt', token)
}

export const removeCookie = () => {
  // if (process.SERVER_BUILD) return
  Cookie.remove('jwt')
}

export const getTokenFormCookie = () => {
  if (process.SERVER_BUILD) return
  const jwt = Cookie.get('jwt')
  if (!jwt) {
    return
  }
  return jwtDecode(jwt)
}

/**
 * 从请求头中获取cookie
 * @param req
 * @returns {*}
 */
export const getUserFormCookie = (req) => {
  if (!req.headers.cookie) return
  // 从请求头中获取token
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
  const jwt = jwtCookie.split('=')[1]
  if (!jwt) return
  return jwtDecode(jwt)
}

/**
 * 从localStorage中获取
 * @returns {undefined}
 */
export const getUserFormLocalStorage = () => {
  const json = window.localStorage.user
  return json ? JSON.parse(json) : undefined
}
