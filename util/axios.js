import axios from 'axios'
import { getTokenFormCookie } from '../util/auth'


/**
 * 封装http请求
 */
class httpRequest {
    constructor () {
        this.options = {
            method: 'GET',
            url: ''
        }
        // 存储请求队列
        this.queue = {}
    }
    // 销毁请求实例
    destroy (url) {
        delete this.queue(url)
        const queue  = Object.keys(this.queue)
        return queue.length
    }
    // 请求拦截
    interceptors (instance, url) {
        // 添加请求拦截
        instance.interceptors.request.use(config => {
            const token = getTokenFormCookie()
            // 在请求头中添加token
            config.headers['x-access-token'] = token
            return config
        }, error => {
            return Promise.reject(error)
        })
        // 添加响应拦截器
        instance.interceptors.response.use(res => {
            let { data } = res
            return data
        }, error => {
            return Promise.reject(error)
        })
    }

    // 创建实列
    create () {
        return axios.create({
            // baseURL: 'http://localhost:5000',
            withCredentials: true
        })
    }

    // 请求实列
    request (options) {
        let instance = this.create()
        this.interceptors(instance, options.url)
        options = Object.assign({}, this.options, options)
        this.queue[options.url] = instance
        return instance(options)
    }
}

export default httpRequest