import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'd3-stencil',
  outputTargets: [{ type: 'dist' }, { type: 'www' }],
  plugins: [
    sass({
      injectGlobalPaths: ['src/scss/objects.scss'],
    }),
    nodePolyfills(),
  ],
  testing: {
    testEnvironmentOptions: {
      userAgent: 'Agent/007',
    },
  },
};
