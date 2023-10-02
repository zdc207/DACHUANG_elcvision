/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-21 18:57:04
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-10-02 12:55:35
 * @FilePath: \power-system-visualization\src\components\app-echart\config.ts
 * @Description:
 */
// * 需要哪些组件和配置，请在 import 时手动添加。
import * as echarts from 'echarts/core'

// 引入用到的图表
import {
  LineChart,
  BarChart,
  PieChart,
  GaugeChart,
  MapChart,
  type MapSeriesOption,
  type GaugeSeriesOption,
  type PieSeriesOption,
  type BarSeriesOption,
  type LineSeriesOption,
  // GaugeChart,
  // type GaugeSeriesOption
} from 'echarts/charts'

// 引入提示框、数据集等组件
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent,
  ToolboxComponent,
  type ToolboxComponentOption,
  type TooltipComponentOption,
  type TitleComponentOption,
  type GridComponentOption,
  type LegendComponentOption,
  type DatasetComponentOption,
} from 'echarts/components'

// 引入标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'

// 引入 Canvas 渲染器，必须
import { CanvasRenderer } from 'echarts/renderers'

import type { ComposeOption } from 'echarts/core'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
    | LineSeriesOption
    | GridComponentOption
    | TitleComponentOption
    | TooltipComponentOption
    | LegendComponentOption
    | BarSeriesOption
    | DatasetComponentOption | PieSeriesOption | GaugeSeriesOption | MapSeriesOption | ToolboxComponentOption
>

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  ToolboxComponent,
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  GaugeChart,
  LabelLayout,
  CanvasRenderer,
  LegendComponent,
  UniversalTransition,
])

export default echarts
