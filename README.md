# Louis-blog
louis的个人博客（React+Next+Egg.js）
## 项目划分
1.Blog前台（用户使用，博客内容展示）
2.接口中台（数据接口，主要的业务逻辑）
3.后台管理（文章的管理，系统设置）
### 1.Blog前端（blog文件夹）
需要SEO操作，使用Next框架来辅助开发。UI界面使用阿里Ant Desgin作为UI交互库。
前台代码都在blog文件内，制作了博客的首页、详情页等
### 2.服务端（service文件夹）
采用框架Egg.js简化开发流程，通过RESTful规则设计前后端接口API。
连接mySql数据库访问数据，使用Egg-mysql进行对数据库的操作
跨域的处理使用Egg的cors解决
### 3.后端（admin文件夹）
后台将采用React Hooks + Ant Design，搭建了登录界面和后台管理系统界面
简单的实现了对文章增删改查的管理功能
