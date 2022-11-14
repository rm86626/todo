import Mock from 'mockjs'

Mock.mock("check.php","post",function(options){
    var data=JSON.parse(options.body);
    var userName=data.userName;
    var users=["tom","jarry","susan","赵四"];
    if(users.includes(userName)){
        return Mock.mock({"code":"20001","msg":"此用户名已经被占用"});
    }else{
        return Mock.mock({"code":"10001","msg":"ok"});
    }
})