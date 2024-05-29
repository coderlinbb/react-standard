module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      // type枚举
      2,
      'always',
      [
        ':sparkles:',
        ':bug:',
        ':construction:',
        ':memo:',
        ':lipstick:',
        ':zap:',
        ':hammer:',
        ':white_check_mark:',
        ':rewind:',
        ':package:',
        ':rocket:',
        ':construction_worker:',
      ],
    ],
    // 'type-empty': [2, 'never'], // 提交类型不能为空
    // 'type-case': [0, 'always', 'lower-case'], // 提交类型的大小写（0表示不检查）
    // 'scope-empty': [0], // 提交范围（scope）是否为空（0表示不检查）
    // 'scope-case': [0], // 提交范围的大小写（0表示不检查）
    // 'subject-empty': [2, 'never'], // 提交说明（subject）不能为空
    // 'subject-case': [0], // 提交说明的大小写（0表示不检查）
    // 'subject-full-stop': [0, 'never', '.'], // 提交说明的结尾不能有句号
    // 'header-max-length': [2, 'always', 72], // 提交信息的头部最长72个字符
    // 'body-leading-blank': [0], // 提交信息的主体开头不强制为空行
    // 'footer-leading-blank': [0, 'always'], // 提交信息的脚注开头需要有空行
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:\w*:)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
      headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
    },
  },
}
