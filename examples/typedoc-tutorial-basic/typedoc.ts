module.exports = {
  src: [
    './src/index.ts',
  ],
  mode: 'file',
  includeDeclarations: true,
  tsconfig: 'tsconfig.json',
  out: './docs',
  excludePrivate: true,
  excludeProtected: true,
  excludeExternals: true,
  readme: 'README.md',
  name: 'TypeDoc Tutorial',
  ignoreCompilerErrors: true,
  // plugin: 'none',
  listInvalidSymbolLinks: true,
};
