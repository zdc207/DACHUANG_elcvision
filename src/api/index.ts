import type { ISocialCondition } from '#/index'
import appRequest from '~/utils/request'

export function getSocialConditionAPI() {
  return appRequest.get<ISocialCondition>({
    url: '/api/social-contaion',
  })
}
