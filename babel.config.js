module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  compilerOptions: {
    paths: {
      '@mui/styled-engine': ['./node_modules/@mui/styled-engine-sc'],
    },
  },
};
