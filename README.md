# vite-vue-component-lib-template

如果你需要发布一个前端 Vue 组件库，可以直接使用这个工程模板。

## 修改包名

你可以根据自己的需要修改包名，主要包括：

- vite.config.ts 文件

```typescript
export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyComponentLib', // 建议修改成你自己的包名
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `my-component-lib.${format}.js` // 建议修改成你自己的包名
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
```

- package.json 文件

```json
{
  "name": "@kagol/my-component-lib", // 建议修改成你自己的包名
  "version": "0.0.1",
  "type": "module",
  "files": [
    "dist"
  ],
  "publishConfig": {
    "access": "public"
  },
  "module": "dist/my-component-lib.es.js", // 建议修改成你自己的包名
  "main": "dist/my-component-lib.cjs.js", // 建议修改成你自己的包名
}
```

## 构建发布

修改版本号，然后执行以下命令。

```shell
pnpm i
pnpm build
pnpm publish
```

## 发布的包如何使用

安装依赖：

```shell
pnpm i @kagol/my-component-lib
```

引入样式，在 style.css 中添加以下代码：

```css
@import '@kagol/my-component-lib/dist/style.css';
```

引入和使用组件，在 App.vue 中添加以下代码：

```vue
<script setup lang="ts">
import { MyComponent } from '@kagol/my-component-lib'
</script>

<template>
  <MyComponent msg="Hi I'm kagol" />
</template>
```

## 下一步

- 增加单组件构建脚本，用于按需引入组件
- 增加多组件的目录结构划分和代码示例
- 增加使用 Composition API 拆分组件逻辑的代码示例
- 给 Vue 组件库增加基于 VitePress 的文档系统
