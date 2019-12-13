import { GraphData, HasData } from '../interfaces';
import { BcgMatrix } from '../interfaces/data-types';

const THROW_ERROR = (): Error => {
  throw new Error(`The data injected isn't valid.`);
};

export const hasDataIsNotEmpty: HasData<GraphData> = ({
  data,
  labels,
}): Error | boolean =>
  data.length > 0 && labels.length >= 1 ? true : THROW_ERROR();

export const hasDataValidOnAnnotationsChart: HasData<GraphData> = ({
  data,
  lineAnnotationschart,
}): Error | boolean => {
  if (
    !(
      data.length > 0 &&
      lineAnnotationschart.increaseHeight > 0 &&
      lineAnnotationschart.tickSeparation !== '' &&
      lineAnnotationschart.imagePathOneAnnotation !== '' &&
      lineAnnotationschart.imagePathSomeAnnotations !== ''
    )
  ) {
    return THROW_ERROR();
  }

  return true;
};

export const hasDataBCGMatrixIsNotEmpty: HasData<GraphData<BcgMatrix[]>> = ({
  data,
}): Error | boolean => (data.length > 0 ? true : THROW_ERROR());
