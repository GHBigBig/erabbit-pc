# 小兔儿鲜

# 2022-08-29
创建了项目的目录结构，安装了一些基础的插件

# 2022-08-30
创建了 dev 分支，以后项目基于 dev 分支进行开发；
安装了 vuex、vuex-router 插件了，发现了 npm 命令使用错误导致生产的的依赖安装到了开发环境下并做了调整；
添加了 vuex、vuex-router 的入口文件；
添加 vscode 的配置文件 jsconfig.json；

# 2022-09-03
发现了目录结构错误并做了调整；
vuex做了模块化和持久化；
测试调整了 vue-router；
安装axios并封装了工具；

# 2022-09-05
添加了@originjs/vite-plugin-global-style后，pnpm run dev 运行时一直报错随后使用 vue-create 重新搭建了整个项目；
将项目迁移到 vue-create 搭建的项目中，并做了基础配置；

# 2022-09-06
处理 eslint 和 prettier 格式化问题；

# 2022-09-08
重置样式，公用样式，添加了顶部通栏UI

# 2022-09-09
之前 globalCommon.less 并不能将文件引入，还是需要手动引入；
完成了顶部通栏根据用户是否登录动态显示；
完成了header 的 UI；