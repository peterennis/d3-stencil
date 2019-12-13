import { Data } from './data-types';
import { Styles } from './options-types';
import { HasData } from './has-data';
import {
  PieChart,
  BarChart,
  LineChart,
  LineAnnotationschart,
  BcgMatrixchart,
} from './charts-options';

export type GraphData<T = number[][]> = Partial<{
  pieChart: PieChart;
  barChart: BarChart;
  lineChart: LineChart;
  lineAnnotationschart: LineAnnotationschart;
  bcgMatrixChart: BcgMatrixchart;
  styles: Styles;
  colors: string[];
  labels: string[] | number[];
  data: Data<T>;
  hasData: HasData;
}>;
