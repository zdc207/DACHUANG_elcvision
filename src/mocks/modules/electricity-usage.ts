/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-28 16:04:44
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-30 20:13:18
 * @FilePath: \power-system-visualization\src\mocks\modules\electricity-usage.ts
 * @Description:
 */
import { rest } from 'msw'
import * as Mock from 'mockjs'
import { requestSuccess } from '../utils'
import type { IElectricityUsage } from '#/index'

export default [
  rest.get('/api/electricity-usage', (req, res, ctx) => {
    return requestSuccess<IElectricityUsage>(res, ctx, {
      values: [Mock.Random.float(100, 10000, 0, 2), Mock.Random.integer(1000, 10000000)],
      increment: [Mock.Random.float(0, 10, 0, 2), Mock.Random.float(0, 10, 0, 2)],
      electricity: Array.from({ length: 5 }, () => Mock.Random.integer(500, 4000)),
    })
  }),
]
