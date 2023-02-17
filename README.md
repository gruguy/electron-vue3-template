# electron + vite + vue3

这个模板集成了 vue3 技术栈和 electron 打包功能，让开发者只关心内容开发问题，只运行一行命令就可以实现热更新内容开发和一键打包。

## 推荐开发环境

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 使用方法

- 下载代码到本地
  ```
  git clone git@github.com:gruguy/electron-vue3-template.git
  ```
- 安装依赖
  ```
  yarn 或者 npm install
  ```
- 运行本地开发模板
  ```
  yarn electron:serve 或者 npm run electron:serve
  ```
- 执行打包命令

```
  yarn electron:build
```

## 命令解释

本地运行命令

```
electron:serve -> concurrently -k \"yarn dev\" \"yarn electron\"
```

concurrently 是一个可以用一行代码执行多个命令在多个 terminal，省去了手动启动多个命令行的一个库， -k kill-ohters 如果存在其他进程则杀死该进程，所以上面的命令就是先执行`yarn dev`启动 vue 项目，然后执行`yarn electron`执行`electron .`命令去根据`package.json`中配置的`main`找到 `elexton/main.ts`，启动一个 electron 的`BrowserWindow`，内部内容为 vue 项目。

通过：

```
mainWindow.loadURL(
    NODE_ENV === "development"
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../dist/index.html")}`
  );
```

如果当前 node_env 环境是 `development`,执行刚刚运行起来的 http://localhost:3000，开发环境就打好了，我们可以全身心地关注于 vue 项目的开发了。
新增 gitee 地址
