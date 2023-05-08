import type { Preview } from '@storybook/react';
import ThemeProvider from '@theme/provider/ThemeProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story, { args: { darkMode } }) => (
      <ThemeProvider theme={darkMode ? 'dark' : 'light'} disableResetCSS={false}>
        <Story />
      </ThemeProvider>
    )
  ],
  argTypes: {
    darkMode: { control: 'boolean' },
    customStyle: { control: false }
  },
  args: { darkMode: false }
};

export default preview;
