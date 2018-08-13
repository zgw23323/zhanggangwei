import axios from 'axios'

const defaultOpts = {
  timeout: 10000,
  success: (data, resolve, reject) => {
    if(data.code){
      if (data.code == "S_OK") {
        resolve(data.var)
      } else {
        reject(data.code)
      }
    }else{
      resolve(data)
    }
  }
}

/**
 * get 请求
 *
 * @param {string} url 请求的url
 * @param {object} options axios配置项, 兼容data键值, 另外如果需要改变接口成功的回调函数, 可以通过success(data[, resolve, reject])来改变
 * @return {promise} Promise对象
 */
const get = (url, options = {}) => {
  let o = Object.assign({}, defaultOpts, options)
  o.params = o.params || o.data || {}
  return new Promise((resolve, reject) => {
    axios
      .get(url, o)
      .then(res => o.success(res.data, resolve, reject))
      .catch(err => reject(err))
  })
}

/**
 * post 请求
 *
 * @param {string} url 请求的url
 * @param {object} data body数据
 * @param {object} options axios配置项, 另外如果需要改变接口成功的回调函数, 可以通过success(data[, resolve, reject])来改变
 * @return {promise} Promise对象
 */
const post = (url, data, options = {}) => {
  const o = Object.assign({}, defaultOpts, options)
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, o)
      .then(res => o.success(res.data, resolve, reject))
      .catch(err => reject(err))
  })
}

/**
 * put 请求
 *
 * @param {string} url 请求的url
 * @param {object} data body数据
 * @param {object} options axios配置项, 另外如果需要改变接口成功的回调函数, 可以通过success(data[, resolve, reject])来改变
 * @return {promise} Promise对象
 */
const put = (url, data, options = {}) => {
  const o = Object.assign({}, defaultOpts, options)
  return new Promise((resolve, reject) => {
    axios
      .put(url, data, o)
      .then(res => o.success(res.data, resolve, reject))
      .catch(err => reject(err))
  })
}

/**
 * delete 请求
 *
 * @param {string} url 请求的url
 * @param {object} options axios配置项, 另外如果需要改变接口成功的回调函数, 可以通过success(data[, resolve, reject])来改变
 * @return {promise} Promise对象
 */
const del = (url, options = {}) => {
  const o = Object.assign({}, defaultOpts, options)
  return new Promise((resolve, reject) => {
    axios
      .delete(url, o)
      .then(res => o.success(res.data, resolve, reject))
      .catch(err => reject(err))
  })
}

export default {
  get,
  post,
  put,
  delete: del
}
