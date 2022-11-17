import ThemeProvider from '../src/theme/provider/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: ['Concepts', 'Theme', 'Components']
    }
  }
};

export const argTypes = { darkMode: { control: 'boolean' }, customStyle: { control: false } };

export const args = { darkMode: false };

export const decorators = [
  (Story, { args: { darkMode } }) => (
    <ThemeProvider theme={darkMode ? 'dark' : 'light'} disableResetCSS={false}>
      <Story />
    </ThemeProvider>
  )
];
