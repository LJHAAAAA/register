var user = document.getElementById('username');
var phone = document.getElementById('phone');
var pwd = document.getElementById('pwd');
var getCode = document.getElementById('getCode');
var code = document.getElementById('code');
var sub = document.getElementById('sub');
var t1 = document.getElementById('tip1');
var t2 = document.getElementById('tip2');
var t3 = document.getElementById('tip3');
var t4 = document.getElementById('tip4');
var t5 = document.getElementById('tip5');
var err1 = document.getElementById('err1');
var err2 = document.getElementById('err2');
var err3 = document.getElementById('err3');
var err4 = document.getElementById('err4');
var err5 = document.getElementById('err5');
var err6 = document.getElementById('err6');
var err7 = document.getElementById('err7');


// 检验标准提示功能
user.onmouseover = function(){
    t1.style.display = 'block';
}
user.onmouseout = function(){
    t1.style.display = 'none';
}

phone.onmouseover = function(){
    if(err1.style.display == 'block' || err4.style.display == 'block'){
        t2.style.display = 'none';
    }
    else{
        t2.style.display = 'block';
    }   
}
phone.onmouseout = function(){
    t2.style.display = 'none';
}

pwd.onmouseover = function(){
    if(err2.style.display == 'block' || err5.style.display == 'block'){
        t3.style.display = 'none';
    }
    else{
        t3.style.display = 'block'
    }
}
pwd.onmouseout = function(){
    t3.style.display = 'none';
}

code.onmouseover = function(){
    if(err3.style.display == 'block' || err6.style.display == 'block' || err7.style.display == 'block'){
        t4.style.display = 'none';
    }
    else{
        t4.style.display = 'block'
    }
}
code.onmouseout = function(){
    t4.style.display = 'none';
}



user.onblur = function(){
    if(user.value == ""){
        err1.style.display = 'block';
        err4.style.display = 'none';
    }
    else{
        err1.style.display = 'none';
        var temp = strNum(user.value);
        if(temp>14){
            err4.style.display = 'block';
            // err1.style.display = 'none';
        }
        else{
            err4.style.display = 'none';
        }
    }
    //获取验证码验证
    if(user.value != "" && phone.value != "" && pwd.value != "" && err4.style.display != "block" && err5.style.display!="block" && err6.style.display != "block" && err7.style.display != "block"){
        getCode.disabled = false;
        console.log("可以发送");
    }
    else{
        console.log("不可以发送");
        getCode.disabled = true;
    }
    //注册验证
    if(user.value != "" && phone.value != "" && pwd.value != "" && code.value != "" && err4.style.display != "block" && err5.style.display!="block" && err6.style.display != "block" && err7.style.display != "block"){
        sub.disabled = false;
        console.log("可以注册");
        sub.style.backgroundColor = '#2E58FF';
        sub.style.boxShadow = '0 8px 20px 0 #8f9fff';
    }
    else{
        console.log("不可以注册");
        sub.disabled = true;
        sub.style.backgroundColor = '#BDCEFC';
        sub.style.boxShadow = 'none';
    }
}

//手机校验
// 使用正则表达式检验手机号
function isPhone(str){
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if(!myreg.test(str)){
        return false;
    }
    else{
        return true;
    }
}

function isPwd(str){
    var myreg=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,14}$/;
    if(!myreg.test(str)){
        return false;
    }
    else{
        return true
    }
}


phone.onblur = function(){
    if(phone.value == ""){
        err2.style.display = 'block';
        err5.style.display = 'none';
    }
    else{
        if(!isPhone(phone.value)){
            err5.style.display = 'block';
            err2.style.display = 'none';
        }
        else{
            err5.style.display = 'none';
            err2.style.display = 'none';
        }
    }
    //获取验证码验证
    if(user.value != "" && phone.value != "" && pwd.value != "" && err4.style.display != "block" && err5.style.display!="block" && err6.style.display != "block" && err7.style.display != "block"){
        getCode.disabled = false;
        console.log("可以发送");
    }
    else{
        console.log("不可以发送");
        getCode.disabled = true;
    }
    //注册验证
    if(user.value != "" && phone.value != "" && pwd.value != "" && code.value != "" && err4.style.display != "block" && err5.style.display!="block" && err6.style.display != "block" && err7.style.display != "block"){
        sub.disabled = false;
        console.log("可以注册");
        sub.style.backgroundColor = '#2E58FF';
        sub.style.boxShadow = '0 8px 20px 0 #8f9fff';
    }
    else{
        console.log("不可以注册");
        sub.disabled = true;
        sub.style.backgroundColor = '#BDCEFC';
        sub.style.boxShadow = 'none';
    }
}


pwd.onblur = function(){
    if(pwd.value == ""){
        err3.style.display = 'block';
        err6.style.display = 'none';
        err7.style.display = 'none';
    }
    else{
        if(pwd.value.indexOf(" ") == -1){
            err3.style.display = 'none';
            err6.style.display = 'none';
            if(isPwd(pwd.value)){
                err7.style.display = 'none';
            }
            else{
                err7.style.display = 'block';
                err3.style.display = 'none';
                err6.style.display = 'none';
            }
        }
        else{
            err6.style.display = 'block';
            err7.style.display = 'none';
            err3.style.display = 'none';
        }
    }
    //获取验证码验证
    if(user.value != "" && phone.value != "" && pwd.value != "" && err4.style.display != "block" && err5.style.display!="block" && err6.style.display != "block" && err7.style.display != "block"){
        getCode.disabled = false;
        console.log("可以发送");
    }
    else{
        console.log("不可以发送");
        getCode.disabled = true;
    }
    //注册验证
    //注册验证
    if(user.value != "" && phone.value != "" && pwd.value != "" && code.value != "" && err4.style.display != "block" && err5.style.display!="block" && err6.style.display != "block" && err7.style.display != "block"){
        sub.disabled = false;
        console.log("可以注册");
        sub.style.backgroundColor = '#2E58FF';
        sub.style.boxShadow = '0 8px 20px 0 #8f9fff';
    }
    else{
        console.log("不可以注册");
        sub.disabled = true;
        sub.style.backgroundColor = '#BDCEFC';
        sub.style.boxShadow = 'none';
    }
}

code.onblur = function(){
    //注册验证
    //注册验证
    if(user.value != "" && phone.value != "" && pwd.value != "" && code.value != "" && err4.style.display != "block" && err5.style.display!="block" && err6.style.display != "block" && err7.style.display != "block"){
        sub.disabled = false;
        console.log("可以注册");
        sub.style.backgroundColor = '#2E58FF';
        sub.style.boxShadow = '0 8px 20px 0 #8f9fff';
    }
    else{
        console.log("不可以注册");
        sub.disabled = true;
        sub.style.backgroundColor = '#BDCEFC';
        sub.style.boxShadow = 'none';
    }
}

// 获取输入内容的字节数(英文为1，其他为2)
function strNum(str){
    var sum = 0;
    for(var i = 0;i < str.length;i++){
        if(str.charCodeAt(i)>=0&&str.charCodeAt(i)<128){
            sum++;
        }
        else{
            sum+=2;
        }
    }
    return sum;
}

// 验证码获取模拟实现
getCode.onclick = function(){
    getCode.disabled = true;
    var i = 10;
    var temp = setInterval(function(){
        i--;
        console.log(i);
        getCode.value = `已发送`+`(`+i+`)`;
        if(i <= 0){
            clearInterval(temp);
        }
    },1000)
}
if(user.value != "" && phone.value != "" && pwd.value != "" && err4.style.display != "block" && err5.style.display!="block" && err6.style.display != "block" && err7.style.display != "block"){
    getCode.disabled = false;
    console.log("可以发送");
}
else{
    console.log("不可以发送");
    getCode.disabled = true;
}


//注册验证
if(user.value != "" && phone.value != "" && pwd.value != "" && code.value != "" && err4.style.display != "block" && err5.style.display!="block" && err6.style.display != "block" && err7.style.display != "block"){
    sub.disabled = false;
    console.log("可以注册");
    sub.style.backgroundColor = '#2E58FF';
    sub.style.boxShadow = '0 8px 20px 0 #8f9fff';
}
else{
    console.log("不可以注册");
    sub.disabled = true;
    sub.style.backgroundColor = '#BDCEFC';
    sub.style.boxShadow = 'none';
}