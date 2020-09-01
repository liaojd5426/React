//webpack配置文件,遵循commonJS规范
const path = require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  //入口
  entry: "./src/index.js", //编译出来就是main.js

  //出口
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash:5].bundle.js", //main.sdkls.bundle.js//解决产生缓存问题
  },

  //服务器
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    open:true,
    compress:true,
    historyApiFallback:true,
    hot:true,
    //host: '0.0.0.0', //设置外部可访问
  },
  //加载器
  module: {
    rules: [
      {
        //匹配规则
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
              plugins: [
                  ['@babel/plugin-proposal-decorators',{legacy:true}],
                  ['@babel/plugin-proposal-class-properties',{loose:true}],
              ]
            },
          },
        ],
        //loader为use的简化写法
        //loader:['babel-loader']

      },
      //样式
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      },
      //sass加载器
      {
        test: /\.scss$/,
        loader:['style-loader','css-loader','sass-loader']
      }
    ]
  },
  // resolve:{
  //   extensions:['.tsx','.ts','.js']
  // },
  // devtool:'source-map', 
  //插件
    plugins: [
      new CleanWebpackPlugin(),//清空dist文件夹里面的东西，保存最新的
        //插件的作用，生成一个html文件
        new HtmlWebpackPlugin({
        template: path.join(__dirname, "public/index.html"),
        title: "从零搭建基于Webpack的React环境",
        }),
        // new HtmlWebpackPlugin({
        //   template: path.join(__dirname, "public/idex.html"),
        //   title:'登录',
        // })
    ],
};