# FastLoader

#### 介绍
基于springboot+vue.js实现的超大文件分片极速上传及流式下载，支持超大文件断点续传、秒传

源码地址：https://gitee.com/luckytuan/fast-loader

#### 软件架构
系统整体采用前后端分离开发，基于OpenJDK11版本：

前端：vue.js+elmentUI

后端：springboot+mybatis

数据库：mysql

工程管理工具：maven


#### 安装教程

1.  克隆工程代码

    fastloader目录为后台SpringBoot工程

    fastloader-ui为前端Vue工程

2.  把后台工程resource下sql语句执行到mysql数据库中，并配置application.yml中的数据源

3.  把工程工程导入到开发工具中，例如eclipse，右键pom.xml文件更新工程所依赖的jar包（建议maven配置阿里库），之后启动springboot工程

4.  把前端工程导入到开发工具例如vscode中，运行npm install安装依赖包，之后npm run dev启动前端工程

5.  打开谷歌浏览器，输入http:localhost:80进入系统

#### 使用说明

1.  点击上传按钮，可选择一个GB级别的文件，进行上传
2.  点击删除按钮，可以删除已经上传的文件，默认文件目录中不物理删除
3.  点击上传同一个文件，可实现秒传

#### 界面效果
![输入图片说明](https://images.gitee.com/uploads/images/2020/0914/002031_54277bb7_2322043.png "image-20200825144940265.png")

![输入图片说明](https://images.gitee.com/uploads/images/2020/0914/002051_8b8dde41_2322043.png "image-20200825145055483.png")

![输入图片说明](https://images.gitee.com/uploads/images/2020/0914/002101_ab0d74b9_2322043.png "image-20200825144916493.png")

#### 后续计划
1. 实现流式下载的暂停、继续下载
2. 文件列表添加缩略图模式显示
3. 列表的宽度自适应调节

另外分享本人一个Java区块链开源项目，感兴趣的可以看看：
[基于java开发一套完整的区块链系统详细教程（附源码）](https://blog.csdn.net/victory_long/article/details/106604338)


#### 对你的工作和学习有帮助的话，记得给个小星星！
