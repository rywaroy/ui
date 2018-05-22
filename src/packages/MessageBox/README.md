## MessageBox

### 全局方法

* `$alert(message, title, options)` 或 `$alert(message, options)`
* `$confirm(message, title, options)` 或 `$confirm(message, options)`
* `$prompt(message, title, options)` 或 `$prompt(message, options)`
* `$close()`

### MessageBox Attributes

| 参数 | 说明 | 类型 | 默认值 |
| - | :-: | - | -:
| title | MessageBox 标题 | String | '提示' |
| message | MessageBox 消息正文内容 | String，HTML | 无 |
| showInput | 是否显示输入框 | Boolean | false（以 prompt 方式调用时为 true） |
| closeOnClickModal | 是否可通过点击遮罩关闭 MessageBox | Boolean | true（以 alert 方式调用时为 false） |
| closeOnHashChange | 是否在 hashchange 时关闭 MessageBox | Boolean | true |
| inputValue | 输入框的初始文本 | String | 无 |
| inputPlaceholder | 输入框的占位符 | String | 无 |
| inputType | 输入框的类型 | String | text |
| showConfirmButton | 是否显示确定按钮 | Boolean | true |
| showCancelButton | 是否显示取消按钮 | Boolean | false（以 confirm 和 prompt 方式调用时为 true） |
| cancelButtonText | 取消按钮的文本内容 | String | 取消 |
| confirmButtonText | 确定按钮的文本内容 | String | 确定 |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | Boolean | false |
| callback | 若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调 | function | 无 |