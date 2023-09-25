import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface AppInterceptor<T> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

interface AppRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: AppInterceptor<T>
}

class AppRequest {
  instance: AxiosInstance
  constructor(config: AppRequestConfig) {
    this.instance = axios.create(config)

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('全局请求成功')
        return config
      },
      (err) => {
        console.log('全局请求失败')

        return err
      },
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局响应成功')
        return res.data
      },
      (err) => {
        // console.log('全局响应成功')
        return err
      },
    )

    // 实例拦截器
    this.instance.interceptors.request.use(config.interceptors?.requestSuccessFn as any, config.interceptors?.requestFailureFn)
    this.instance.interceptors.response.use(config.interceptors?.responseSuccessFn, config.interceptors?.responseFailureFn)
  }

  request<T = any>(config: AppRequestConfig<IResult<T>>) {
    // 方法拦截器
    if (config.interceptors?.requestSuccessFn)
      config = config.interceptors.requestSuccessFn(config)

    return new Promise<IResult<T>>((resolve, reject) => {
      return this.instance
        .request<any, IResult<T>>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn)
            res = config.interceptors.responseSuccessFn(res)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: AppRequestConfig<IResult<T>>) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: AppRequestConfig<IResult<T>>) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: AppRequestConfig<IResult<T>>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: AppRequestConfig<IResult<T>>) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

const appRequest = new AppRequest({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: import.meta.env.VITE_TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      // console.log('实例请求成功')
      // 添加token
      // const loginStore = useLoginStore()
      // if (loginStore.token.length > 0 && config.headers)
      //   config.headers.Authorization = `Bearer ${loginStore.token}`

      return config
    },
    responseSuccessFn(res) {
      // console.log('实例响应成功')
      return res
    },
  },
})

export default appRequest
