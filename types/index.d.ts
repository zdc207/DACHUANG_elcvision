/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-24 16:03:06
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-27 19:57:56
 * @FilePath: \power-system-visualization\types\index.d.ts
 * @Description: 
 */

export interface ISocialCondition{
  values:number[]
  increment:number[]
  industry:number[]
}


export interface IPowerGridConstruction{
  values:number[]
  increment:number[]
  //省份
  province:number[]
}



export interface IElectricityUsage{
  values:number[]
  increment:number[]
  electricity:number[]
}


export interface IManagementImprovement{
  values:number[] 
  increment:number[]
  data:number
}

export interface IGridReliability{
  values:number[] 
  data1:number[]
  data2:number[]
}

