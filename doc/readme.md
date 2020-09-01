## 从零搭建基于Webpack的React环境

> 从0搭建项目

1. 创建目录

   * src
     * App.js
     * App.css/App.scss
     * index.js
   * doc
     * readme.md
   * public
     * index.html

2. 安装依赖(React项目)

   > npm init -y 生成package.json文件，安装以下依赖：

   * react & react-dom
   * react-router & raect-router-dom
   * webpack & webpack-cli & webpack-dev-serve
   * @babel/core & babel-loader & @babel/preset-react
   * html-webpack-plugin
   * clean-webpack-plugin
   * 样式
     * css-loader
     * style-loader
     * sass-loader

3. 创建webpack配置文件

   > 默认配置文件名：`webpack.config.js`，为一个commonJS模块,在根目录文件夹下面创建

    * 配置选项

      * entry

      * output

      * loader

        > module.rules

      * plugins

      * devServer

```js
//webpack配置文件，遵循commonJS规范
const path=require('path')
module.exports={
    //入口
    entry:'./src/index.js',
    //出口
    output:{
        path:path.join(__dirname,'dist'),
        filename:"[name].[hash:5].bundle.js"//main.sdkls.bundle.js//解决产生缓存问题
    }
    //服务器
    devServer:{
        contentBase:path.join(__dirname,'public'),
        //host:'0.0.0.0',   //外部可访问
        port:2020
    },
    //加载器
    module:{
        rules:[
            {
                //匹配规则
                test:/\.jsx?$/,
                //node_modules目录下的所有js文件不再进行编译
                //exclude:path.join(__dirname,'node_modules'),
                exclude:path.join(__dirname,'node_modules'),
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }],
                //loader为use的简化写法
                //loader:['babel-loader']
            },
            //样式加载器
            {
                test:/\.css$/,
                //node_modules目录下的所有样式不再进行编译
                //exclude:path.join(__dirname,'node_modules'),
                use:['style-loader','css-loader']
            },
            //sass加载器
           	{
                test:/\.scss$/,
                //node_modules目录下的所有样式不再进行编译
              	exclude:path.join(__dirname,'node_modules'),
                loader:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    //插件
    plugins:{
        new CleanWebpackPlugin(),//清空dist文件夹里面的东西，保存最新的
        //插件的作用，生成一个html文件
        new HtmlWebpackPlugin({
        	template:path.join(__dirname,'public/template'),
             title: "从零搭建基于Webpack的React环境"
    	})
    }
}
```

在src目录下，创建入口文件index.js

```js
import React from 'react'
class App extends React.Component{
    render() {
        return (
            <div>
                APP
             </div>
         )
     }
}
export default App
```

在public目录下，创建index.html文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>从零搭建基于Webpack的React环境</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

在package.json文件中添加npm脚本

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"webpack-dev-server",
    "build":"webpack",
    "start":"npm run dev"
  },
```

在src目录下新建App.css或者App.scss文件，编写样式，测试配置的样式加载器

```css
.container{
    color: red;
}
```

