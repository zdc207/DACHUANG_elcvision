/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-23 11:49:49
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-24 16:19:03
 * @FilePath: \power-system-visualization\types\type.d.ts
 * @Description: 
 */
// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />
import type { App } from 'vue'



declare global{
  export interface IResult<T>{
    data:T;
    message:string
    code:number
  }
   declare interface ImportMetaEnv {
    VITE_BASE_URL: string;
    VITE_TIME_OUT: number
  }
  export interface IDescription{
    label:string
    value:string
    increment:string
  }
}
  
