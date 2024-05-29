module.exports = {
  types: [
    {
      value: ':sparkles: feat',
      name: '✨ feat: 新功能',
    },
    {
      value: ':bug: fix',
      name: '🐛 fix: 修复bug',
    },
    {
      value: ':construction: WIP',
      name: '🚧 WIP: 工作进行中',
    },
    {
      value: ':memo: docs',
      name: '📝 docs: 文档变更',
    },
    {
      value: ':lipstick: style',
      name: '💄 style: 代码风格变更',
    },
    {
      value: ':zap: perf',
      name: '⚡ perf: 性能优化',
    },
    {
      value: ':hammer: refactor',
      name: '🔨 refactor: 重构',
    },
    {
      value: ':white_check_mark: test',
      name: '✅ test: 测试',
    },
    {
      value: ':rewind: revert',
      name: '⏪️ revert: 代码回退',
    },
    {
      value: ':package: build',
      name: '📦 build: 打包构建',
    },
    {
      value: ':rocket: chore',
      name: '🚀 chore: 构建/工程依赖/工具',
    },
    {
      value: ':construction_worker: ci',
      name: '👷 CI 配置变更',
    },
  ],
  scopes: [],
  scopeOverrides: {},
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型(必填):',
    scope: '请输入文件修改范围(可选):',
    // used if allowCustomScopes is true
    customScope: '请输入文件修改范围(可选):',
    subject: '请简要描述提交(必填):\n',
    body: '请输入详细描述，使用 "|" 实现换行输入(可选):\n',
    breaking: '列出所有BREAKING CHANGES(可选):\n',
    footer: '请输入要关联的 YouTrack Issue ID，例如: #5, #30 (可选):\n',
    confirmCommit: '确定提交此说明吗？',
  },
  // 跳过空的 scope
  skipEmptyScopes: false,
  skipQuestions: ['breaking', 'body'],
  // 设置为 true，在 scope 选择的时候，会有 empty 和 custom 可以选择
  // 顾名思义，选择 empty 表示 scope 缺省，如果选择 custom，则可以自己输入信息
  allowCustomScopes: true,
  // 只有我们 type 选择了 feat 或者是 fix，才会询问我们 breaking message.
  allowBreakingChanges: ['feat', 'fix'],
}
