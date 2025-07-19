import assert from 'assert';
import type { Preview } from '@storybook/vue3'

import '@storybook/addon-console';

function beforeEach() {
  // Existing code.
  const frog = 'frog';
  assert(frog === 'frog', 'Frog should be frog');
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  beforeEach,
};


export default preview;