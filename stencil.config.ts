import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'd3-stencil',
  outputTargets: [{ type: 'dist' }],
  plugins: [
    sass({
      injectGlobalPaths: ['src/scss/objects.scss'],
    }),
  ],
  testing: {
    testEnvironmentOptions: {
      userAgent: 'Agent/007',
    },
  },
};
