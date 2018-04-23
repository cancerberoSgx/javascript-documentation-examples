module.exports = {
  src: [
    './src/',
  ],
  mode: 'file',
  'includeDeclarations': true,
  'tsconfig': 'tsconfig_for_typedoc.json',
  'out': './docs',
  'excludePrivate': true,
  'excludeProtected': true,
  'excludeExternals': true,
  'readme': 'README.md',
  'name': 'perplexed-wars',
  ignoreCompilerErrors: true
}
