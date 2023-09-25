/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-24 12:10:19
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-25 13:15:05
 * @FilePath: \power-system-visualization\mock\modules\social-condition.ts
 * @Description:
 */

import { resultSuccess } from 'mock/_util'
import type { MockMethod } from 'vite-plugin-mock'
import * as Mock from 'mockjs'

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
  {
    url: '/api/social-contaion',
    method: 'get',
    response: () => {
      return resultSuccess({
        values: [
          Mock.Random.integer(100000, 9999999),
          Mock.Random.integer(100000, 9999999),
          Mock.Random.integer(100000, 9999999),
        ],
        increment: [
          Mock.Random.float(0, 10, 0, 2),
          Mock.Random.float(0, 10, 0, 2),
          Mock.Random.float(0, 10, 0, 2),
        ],
        industry: generateRandomIntegersWithSum(100),
      })
    },
  },
] as MockMethod[]
