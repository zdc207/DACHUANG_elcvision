import { type DefaultBodyType, type ResponseComposition, type RestContext } from 'msw'

export function requestSuccess<T>(res: ResponseComposition<DefaultBodyType>, ctx: RestContext, data: T) {
  return res(ctx.status(ResultEnum.SUCCESS), ctx.json({
    code: ResultEnum.SUCCESS,
    data,
    message: 'success',
  }))
}

export function requestError<T>(res: ResponseComposition<DefaultBodyType>, ctx: RestContext, data: T) {
  return res(ctx.status(ResultEnum.ERROR), ctx.json({
    code: ResultEnum.ERROR,
    data,
    message: 'error',
  }))
}
export function requestUrl(path: string) {
  return new URL(path, import.meta.env.VITE_BASE_URL).toString()
}
