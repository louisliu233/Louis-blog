'use strict';

const Controller = require('egg').Controller

class MainController extends Controller{

    async index(){
        //首页的文章列表数据
        this.ctx.body='hi api'
    }

        //判断用户名密码是否正确
        async checkLogin() {
            const userName = this.ctx.request.body.userName;
            const passWord = this.ctx.request.body.passWord;
            const sql =
              "select userName from admin_user where userName ='" +
              userName +
              "' and passWord ='" +
              passWord +
              "'";
            const res = await this.app.mysql.query(sql);
            if (res.length > 0) {
              let openId = new Date().getTime();
              this.ctx.session.openId = { 'openId':openId };
              this.ctx.body = { data: '登录成功','openId': openId };
            } else {
              this.ctx.body = { data: '登录失败' };
            }
          }
        //后台文章分类信息
    async getTypeInfo(){
        const resType = await this.app.mysql.select('type')
        this.ctx.body={data:resType}
    }

        //添加文章
        async addArticle() {
            const tmpArticle = this.ctx.request.body;
            const result = await this.app.mysql.insert('article', tmpArticle);
            const inserSuccess = result.affectedRows === 1;
            // console.log({ result });
            const insertId = result.insertId;
            this.ctx.body = {
              isSuccess: inserSuccess,
              insertId,
            };
          }
         //修改文章
        async updateArticle(){
            let tmpArticle= this.ctx.request.body

            const result = await this.app.mysql.update('article', tmpArticle);
            const updateSuccess = result.affectedRows === 1;
            console.log(updateSuccess)
            this.ctx.body={
                isSuccess:updateSuccess
            }
        }  

        //获得文章列表
        async getArticleList(){

          let sql = 'SELECT article.id as id,'+
                      'article.title as title,'+
                      'article.introduce as introduce,'+
                      'article.addTime as addTime,'+
                      'type.typeName as typeName '+
                      'FROM article LEFT JOIN type ON article.type_id = type.Id '+
                      'ORDER BY article.id DESC '

              const resList = await this.app.mysql.query(sql)
              this.ctx.body={list:resList}

        }
}

module.exports = MainController