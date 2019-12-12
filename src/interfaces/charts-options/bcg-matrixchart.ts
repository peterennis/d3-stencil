import { Axis, Margin } from '../options-types';
import { Formats } from '../formats';

export type BcgMatrixchart = Partial<{
  axis: Axis;
  margin: Margin;
  value: Partial<{
    format: Formats;
    currency: string;
  }>;
  quadrants: boolean;
}>;
