import assert from 'assert';

import '@storybook/addon-console';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
}

export const beforeEach = () => {
  // Existing code.
  const frog = 'frog';
  assert(frog === 'frog', 'Frog should be frog');
};
