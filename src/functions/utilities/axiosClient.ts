import Axios, { AxiosError, AxiosRequestConfig } from 'axios'
import cookies from 'nookies'

// const jwt = cookies.get('jwt')
// const lang = cookies.get('lang')
const NODE_ENV = process.env.NODE_ENV!

export type Errors = {
  message: string
  errors: {
    [key: string]: string[]
  }
}

/* eslint-disable no-param-reassign */
const useAuthRequestInterceptor = (config: AxiosRequestConfig) => {
  // if (jwt) {
  //   config.headers!.authorization = `Bearer ${jwt}`
  // }
  // config.headers!.Accept = 'application/json'
  // config.headers!['X-UMFW-LANG'] = lang ?? 'jpn'
  return config
}

const params = {
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
}

export const axios = Axios.create(params)

axios.interceptors.request.use(useAuthRequestInterceptor)

axios.interceptors.response.use(
  (response) => {
    if (NODE_ENV !== 'production') {
      console.log(response.data, response.config.url)
    }

    return response.data
  },
  (error: AxiosError<Errors>) => {
    if (NODE_ENV !== 'production') {
      console.log(error, 'axios error')
    }

    const status = error.response?.status
    const { url } = error.config

    if (status === 422) {
      return Promise.reject(error.response)
    }
    if (url === '/api/login') {
      return Promise.reject(error.response)
    }
    // if (status === 401) {
    //   const isJapanese = !lang || lang === 'jpn'
    //   window.location.href = isJapanese ? '/login' : '/en/login'
    // }

    return Promise.reject(error.response)
  }
)
