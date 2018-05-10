## Input

### Input Attributes

| 参数 | 说明 | 类型 | 默认值 |
| - | :-: | - | -:
| value | 绑定的值 | String,Number | 无 |
| size | 大小(medium / small / mini) 不为textarea有效 | String | medium |
| placeholder | 输入框占位文本 | String | 无 |
| placeholder | 输入框占位文本 | String | 无 |
| disabled | 是否禁用 | Boolean | false |
| maxlength | 最大长度 | Number | 无 |
| readonly | 是否只读 | Boolean | false |
| clearable | 是否可清除 | Boolean | false |
| resize | 控制是否能被用户缩放(none, both, horizontal, vertical) | String | none |
| autosize | 自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 } | Boolean | false |
### Input Events

| 事件名称 | 说明 | 回调参数 |
| - | - | - |
| change | 在 Input 值改变时触发 | (value: string | number) |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| clear | 在点击由 clearable 属性生成的清空按钮时触发 | 无 |