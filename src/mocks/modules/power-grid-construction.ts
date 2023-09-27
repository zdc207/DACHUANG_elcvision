import { rest } from 'msw'
import * as Mock from 'mockjs'
import { requestSuccess } from '../utils'
import type { IPowerGridConstruction } from '#/index'

export default [
  rest.get('/api/power-grid-construction', (req, res, ctx) => {
    return requestSuccess<IPowerGridConstruction>(res, ctx, {
      values: Array.from({ length: 2 }, () => Mock.Random.float(10000, 99999, 0, 2)),
      increment: Array.from({ length: 2 }, () => Mock.Random.float(0, 15, 0, 1)),
      province: Array.from({ length: 5 }, () => Mock.Random.integer(5, 100)),
    })
  }),
]
