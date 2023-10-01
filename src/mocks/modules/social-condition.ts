import * as Mock from 'mockjs'
import { rest } from 'msw'
import { requestSuccess } from '../utils'
import type { ISocialCondition } from '#/index'

// 随机生成三个整数，使它们的总和为特定值
function generateRandomIntegersWithSum(sum: number) {
  const result = []

  // 生成两个随机整数
  result.push(Mock.Random.integer(1, sum - 2))
  result.push(Mock.Random.integer(1, sum - result[0] - 1))

  // 计算第三个整数，使总和等于指定的值
  result.push(sum - result[0] - result[1])

  // 打乱数组顺序，以确保随机性
  Mock.Random.shuffle(result)

  return result
}

export default [
  rest.get('/api/social-contaion', (req, res, ctx) => {
    return requestSuccess<ISocialCondition>(res, ctx, {
      values: Array.from({ length: 3 }).map(() => Mock.Random.integer(100000, 9999999)),
      increment: Array.from({ length: 3 }).map(() => Mock.Random.float(0, 10, 0, 2)),
      industry: generateRandomIntegersWithSum(100),
    })
  }),
]
