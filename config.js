/**
 * 小程序配置文件
 */

// 此处主机域名
var origin = "https://api.it120.cc"

var config = {

    // 下面的地址配合云端 Server 工作
    origin,

    // 登录地址，用于建立会话
    loginUrl: `${origin}/login`,

    // // 测试的请求地址，用于测试会话
    // requestUrl: `${origin}/testRequest`,

    // // 用code换取openId
    // openIdUrl: `${origin}/openid`,

    // // 测试的信道服务接口
    // tunnelUrl: `${origin}/tunnel`,

    // // 生成支付订单的接口
    // paymentUrl: `${origin}/payment`,

    // // 发送模板消息接口
    // templateMessageUrl: `${origin}/templateMessage`,

    // // 上传文件接口
    // uploadFileUrl: `${origin}/upload`,

    // // 下载示例图片接口
    // downloadExampleUrl: `${origin}/static/weapp.jpg`
};

module.exports = config
