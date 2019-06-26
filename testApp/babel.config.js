const presets = [
  ['@babel/env',
    {
      targets: {
        node: '8',
      },
    },
  ],
];

const plugins = [
  ['../lib/index.js', {
    nostrip: true,
    noModifyCase: true,
  }],
];

module.exports = {
  presets,
  plugins,
};
