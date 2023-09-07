# 快速开始

### 安装组件库

```bash
npm i ladybug-ui
```

### 引用组件库

> 在 main.js 中引用组件库

```javascript
//全部引入
import "ladybug-ui/dist/css/index.css";
import LadyBugUI from "ladybug-ui";
Vue.use(LadyBugUI);

//按需引入
import "ladybug-ui/dist/css/demo.css";
import { Demo } from "ladybug-ui";
Vue.use(Demo);
```

```html
|-- ladybug-ui
    |-- .gitignore
    |-- babel.config.js
    |-- gulpfile.js
    |-- jsconfig.json
    |-- npm发版说明.txt
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- vue.config.js
    |-- webpack.component.js
    |-- .vscode
    |   |-- settings.json
    |-- components
    |   |-- css
    |   |   |-- card.scss
    |   |   |-- demo.scss
    |   |   |-- index.scss
    |   |-- lib
    |       |-- index.js
    |       |-- card
    |       |   |-- index.js
    |       |   |-- src
    |       |       |-- main.vue
    |       |-- demo
    |           |-- index.js
    |           |-- src
    |               |-- main.vue
    |-- dist
    |   |-- card.umd.js
    |   |-- demo.umd.js
    |   |-- index.umd.js
    |   |-- css
    |       |-- card.css
    |       |-- demo.css
    |       |-- index.css
    |-- docs
    |   |-- README.md
    |   |-- .vuepress
    |   |   |-- config.js
    |   |   |-- components
    |   |   |   |-- card.scss
    |   |   |   |-- m-card.vue
    |   |   |-- public
    |   |       |-- logo.png
    |   |-- componentsDocs
    |       |-- card.md
    |-- examples
    |   |-- App.vue
    |   |-- main.js
    |   |-- assets
    |       |-- logo.png
    |-- public
        |-- favicon.ico
        |-- index.html
        |-- images
            |-- java.png
            |-- login_mainbg.jpg
```
