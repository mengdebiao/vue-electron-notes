module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    semi: ['error', 'never'], // 禁用 分号
    'no-multiple-empty-lines': ['error'], // 代码空行 数量
    'linebreak-style': [0, 'error', 'windows'], // 使用windows的换行
    'comma-dangle': [2, 'never'], //  对象数组最后一个不带逗号
    'no-trailing-spaces': 0, // 禁用 校验代码末尾带空格
    'import/no-dynamic-require': 0, // 禁用 动态require
    'import/no-unresolved': 0,
    'no-param-reassign': 0, // 声明为函数参数的变量可能会引起误解
    'max-len': ['error', 120], // 单行代码最大长度
    'guard-for-in': 0, // 禁用 禁用for in 循环
    'no-shadow': 0, // 禁用  禁止页面内相容参数名
    'object-shorthand': 0, // 禁用 禁止对象内使用带引号字符串
    'no-restricted-syntax': 0,
    'no-plusplus': 0, // 禁用 ++
    'consistent-return': 0, // 关闭箭头函数必须要return
    'no-return-assign': 0, // return 语句中不能有赋值表达式
    'global-require': 0, // 关闭禁止使用requrie
    'prefer-promise-reject-errors': 0, // 这条规则旨在确保承诺只被Error对象拒绝。
    'import/extensions': 'off', // 禁用文件名详细文件类型后缀
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'arrow-parens': ['error', 'as-needed'], // 箭头函数参数括号，可选 always：（默认）在所有情况下都需要参数；as-needed：当只有一个参数时允许省略参数
    'no-undef': 0, // 关闭显式声明全局变量的要求
    'class-methods-use-this': 0,
    'no-underscore-dangle': ['error', { allow: ['_id'] }], // 允许指定的标识符具有悬挂下划线
    camelcase: 0, // 关闭使用骆驼拼写法
    'no-global-assign': 0, // 允许修改只读全局变量,
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    // 对象解构不需要换行
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: {
          multiline: true
        }
      }
    ],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }] // 允许在表达式中使用三元运算符，类似于短路评估
  }
}
