import { rest } from 'msw'
import * as Mock from 'mockjs'
import { requestSuccess } from '../utils'
import type { IGridReliability } from '#/index'

export default [
  rest.get('/api/grid-reliability', (req, res, ctx) => {
    return requestSuccess<IGridReliability>(res, ctx, {
      values: Array.from({ length: 3 }).map(() => Mock.Random.integer(0, 10)),
      data1: Array.from({ length: 12 }).map(() => Mock.Random.integer(1, 8)),
      data2: Array.from({ length: 12 }).map(() => Mock.Random.integer(1, 8)),
    })
  }),
]
