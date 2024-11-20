import { preset } from 'presetter-types';

import monorepo from '../../presetter.config';

export default preset('presetter', {
  extends: [monorepo],
  assets: {
    '.gitignore': ['/generated'],
  },
});
