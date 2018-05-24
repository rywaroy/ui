# ui

下载依赖

```bash
npm install 
```

启动

```bash
npm run dev
```

打包组件的压缩js文件(在/lib文件夹下)

```bash
npm run build:comp
```

打包组件的样式文件(在/lib/styles文件夹下)

```bash
npm run build:style
```

## 引用

### 全局引用

```js
import YgUI from 'ygxt-yg-ui';
import 'ygxt-yg-ui/lib/styles/ygui.css';

Vue.use(YgUI);
```
### 单个组件引用

```js
import { Button } from 'ygxt-yg-ui';
```

## 组件

* [pagination](./src/packages/Pagination)
* [radio](./src/packages/Radio)
* [checkbox](./src/packages/Checkbox)
* [button](./src/packages/Button)
* [input](./src/packages/Input)
* [dialog](./src/packages/Dialog)
* [message](./src/packages/Message)
* [messagebox](./src/packages/MessageBox)