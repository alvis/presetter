import { preset } from 'presetter';
import monorepo from 'presetter-preset-monorepo';
import next from 'presetter-preset-next';

export default preset('@example/apps', {
  extends: [monorepo, next],
});
