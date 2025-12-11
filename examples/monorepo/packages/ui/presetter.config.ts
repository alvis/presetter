import { preset } from 'presetter';
import root from '../../presetter.config';
import react from 'presetter-preset-react';

export default preset('@example/ui', {
  extends: [root, react],
});
