module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    // "plugin:import/typescript",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // "plugin:tailwindcss/recommended",
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    'import/resolver': {
      // eslint-import-resolver-typescript 可以解决别名报错的问题
      typescript: {
        alwaysTryTypes: true,
      },
      // eslint-import-resolver-alias 可以解决绝对路径的问题
      alias: {
        map: [
          ['', './public'], // <-- this line
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // 未使用的变量
    '@typescript-eslint/no-unused-vars': ['warn'],
    // 使用显式的any类型
    '@typescript-eslint/no-explicit-any': ['off'],
    // tailwindcss允许自定义类名
    'tailwindcss/no-custom-classname': 'off',
    'import/order': [
      'error',
      {
        // 对导入模块进行分组，分组排序规则如下
        groups: [
          'builtin', // 内置模块
          'external', // 外部模块
          'parent', // 父节点依赖
          'sibling', // 兄弟依赖
          'internal', // 内部引用
          'index', // index文件
          'type', //类型文件
          'unknown', // 未知依赖
        ],
        //通过路径自定义分组
        pathGroups: [
          {
            pattern: '@/**', // 把@开头的应用放在external分组后面
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'react*',
            group: 'builtin',
            position: 'before',
          },
        ],
        // 是否开启独特组，用于区分自定义规则分组和其他规则分组
        distinctGroup: true,
        // 每个分组之间换行
        'newlines-between': 'always',
        // 相同分组排列规则 按字母升序排序
        alphabetize: { order: 'asc' },
      },
    ],
  },
}

