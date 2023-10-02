import { rest } from 'msw'
import * as Mock from 'mockjs'
import { requestSuccess } from '../utils'
import type { ISalesOfElectricityAndLineLoss } from '#/index'

export default [
  rest.get('/api/sales-of-electricity-and-line-loss', (req, res, ctx) => {
    return requestSuccess<ISalesOfElectricityAndLineLoss>(res, ctx, {
      values: Array.from({ length: 3 }).map(() => Mock.Random.integer(1000, 99999)),
      increment: Array.from({ length: 3 }).map(() => Mock.Random.float(0, 10, 0, 2)),
      data1: Array.from({ length: 5 }).map(() => Mock.Random.integer(1, 15)),
      data2: Array.from({ length: 5 }).map(() => Mock.Random.integer(1, 7)),
    })
  }),
]
