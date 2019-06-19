import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  plugins: [
    postcss({
      plugins: [
        require('postcss-import')(),
        require('postcss-custom-properties')(),
        require('postcss-mixins')(),
        require('postcss-nested')(),
        require('postcss-simple-vars')(),
        require('autoprefixer')({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9'
          ]
        })
      ]
    })
  ],
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/'
    }
  ]
};
