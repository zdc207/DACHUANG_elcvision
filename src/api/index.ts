/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-24 12:09:42
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-27 10:50:38
 * @FilePath: \power-system-visualization\src\api\index.ts
 * @Description:
 */
import type { ISocialCondition } from '#/index'
import appRequest from '~/utils/request'

export function getSocialConditionAPI() {
  return appRequest.get<ISocialCondition>({
    url: '/api/social-contaion',
  })
}
