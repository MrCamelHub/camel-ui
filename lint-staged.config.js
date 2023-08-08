module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write --ignore-unknown'],
  '*.json': ['prettier --write --ignore-unknown']
};
