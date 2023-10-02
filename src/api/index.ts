/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-24 12:09:42
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-10-02 10:10:01
 * @FilePath: \power-system-visualization\src\api\index.ts
 * @Description:
 */
import type { IElectricityUsage, IGridReliability, IManagementImprovement, IPowerGridConstruction, ISalesOfElectricityAndLineLoss, ISocialCondition } from '#/index'
import appRequest from '~/utils/request'

export function getSocialConditionAPI() {
  return appRequest.get<ISocialCondition>({
    url: '/api/social-contaion',
  })
}

export function getPowerGridConstructionAPI() {
  return appRequest.get<IPowerGridConstruction>({
    url: '/api/power-grid-construction',
  })
}

export function getElectricityUsageAPI() {
  return appRequest.get<IElectricityUsage>({
    url: '/api/electricity-usage',
  })
}

export function getManagementImprovementAPI() {
  return appRequest.get<IManagementImprovement>({
    url: '/api/management-improvement',
  })
}

export function getGridReliabilityAPI() {
  return appRequest.get<IGridReliability>({
    url: '/api/grid-reliability',
  })
}

export function getSalesOfElectricityAndLineLossAPI() {
  return appRequest.get<ISalesOfElectricityAndLineLoss>({
    url: '/api/sales-of-electricity-and-line-loss',
  })
}
