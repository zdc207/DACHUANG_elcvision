import { rest } from 'msw'
import * as Mock from 'mockjs'
import { requestSuccess } from '../utils'
import type { IManagementImprovement } from '#/index'

export default [
  rest.get('/api/management-improvement', (req, res, ctx) => {
    return requestSuccess<IManagementImprovement>(res, ctx, {
      values: Array.from({ length: 2 }, () => Mock.Random.float(100, 9999, 0, 2)),
      increment: Array.from({ length: 2 }, () => Mock.Random.float(0, 15, 0, 1)),
      data: Mock.Random.integer(5, 100),
    })
  }),
]
