import { GraphData } from './graph-data';

export type GraphMeta<T = number[][]> = {
  width: number;
  graphData: GraphData<T>;
};
