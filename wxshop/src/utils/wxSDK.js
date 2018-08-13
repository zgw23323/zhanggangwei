 function wxConfig(wxOpt,callback){
  //微信支付配置
  console.log(wxOpt);
  wx.config({
      debug: false, 
      appId: 'wx122c017d1608c62a',
      timestamp: wxOpt.timeStamp, //生成签名的时间戳
      nonceStr: wxOpt.nonceStr, //生成签名的随机串
      signature: wxOpt.signature,
      jsApiList: ['chooseWXPay','scanQRCode']
  });
  console.log(wxOpt);
  // wx.config({
  //     debug: false, 
  //     appId: "wx122c017d1608c62a",
  //     timestamp: "1508311429", //生成签名的时间戳
  //     nonceStr: "20171111", //生成签名的随机串
  //     signature: "59c433db88f991b4f8d1076ded2a1d9256dcabc1",
  //     jsApiList: ['chooseWXPay','scanQRCode']
  // });
  wx.ready(function(){
    console.log('ready=>1',wxOpt);
    if(wxOpt.wxSdk=='onBridgeReady'){
      onBridgeReady(wxOpt);
    }else if(wxOpt.wxSdk=='scanQRCode'){
      onCode(callback);
    }
    
  });
  wx.error(function(res){
    console.log('wxConfigError',res);
  });
}
//调用微信支付（弹窗支付）
function onBridgeReady(wxOpt) {
    wx.chooseWXPay({
      timestamp: wxOpt.timeStamp,
      nonceStr: wxOpt.nonceStr, // 支付签名随机串，不长于 32 位
      package: wxOpt.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
      signType: "MD5", // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
      paySign: wxOpt.paySign, // 支付签名
      // timestamp: '1506020669',
      // nonceStr: "1506020669522", // 支付签名随机串，不长于 32 位
      // package: "prepay_id=wx20170922030429a38a8986c00595055877", // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
      // signType: "MD5", // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
      // paySign: 'A92FD1E112AE9752F045BB957011B712', // 支付签名
      success: function (res) {
        console.log("=>1"+res);
          // 支付成功后的回调函数
      },
      fail: function (res) {
        console.log("=>2", res);
      },
      complete: function (res) {
        console.log({"=>3":res});
      }
    });
} 
//微信扫一扫
function onCode(pCallback){
  console.log('onCode=>');
  wx.scanQRCode({
  desc: 'scanQRCode desc',
  needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
  scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
  success: function (res) {
     // 回调
     console.log('res->code',res);
     pCallback(res);
  },
  error: function(res){
    if(res.errMsg.indexOf('function_not_exist') > 0){
         alert('版本过低请升级')
      }
   }
  });
}
    
export {
  wxConfig
};
    
     