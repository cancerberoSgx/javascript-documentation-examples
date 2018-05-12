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
  plugin: 'typedoc-plugin-as-member-of',
  listInvalidSymbolLinks: true,
};
