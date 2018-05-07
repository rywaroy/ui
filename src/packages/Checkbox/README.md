## Checkbox

### Checkbox Attributes

| 参数 | 说明 | 类型 | 默认值 |
| - | :-: | - | -:
| checked | 是否勾选(单选有效) | Boolean | 无 |
| label | 选中状态的值 | String, Number | 无 |
| disabled | 是否禁用 | Boolean | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | Boolean | false |

### Checkbox Events

| 事件名称 | 说明 | 回调参数 |
| - | - | - |
| change | 当绑定值变化时触发的事件(单选有效) | 更新后的值

### CheckboxGroup Attributes

| 参数 | 说明 | 类型 | 默认值 |
| - | :-: | - | -:
| value | 选中的数组 | Array | 无 |

### CheckboxGroup Events

| 事件名称 | 说明 | 回调参数 |
| - | - | - |
| change | 当绑定值变化时触发的事件 | 更新后的值