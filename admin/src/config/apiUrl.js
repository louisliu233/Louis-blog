let ipUrl = 'http://127.0.0.1:7001/admin/' 

let servicePath = {
    checkLogin:ipUrl + 'checkLogin' ,  // 获得文章类别信息 
    getTypeInfo:ipUrl + 'getTypeInfo' ,  // 检查用户名密码是否正确 
    addArticle:ipUrl + 'addArticle' ,  //  添加文章
    updateArticle:ipUrl + 'updateArticle' ,  //  修改文章第api地址
    getArticleList:ipUrl + 'getArticleList' ,  //  文章列表 
}
export default servicePath;