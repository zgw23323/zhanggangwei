 function wxConfig(wxOpt){
      //微信支付配置
       
      wx.config({
          debug: false, 
          appId: wxOpt.appId,
          timestamp: wxOpt.timeStamp, //生成签名的时间戳
          nonceStr: wxOpt.nonceStr, //生成签名的随机串
          signature: "MD5",
          jsApiList: ['chooseWXPay']
      });
      // console.log('wxPay');
      // wx.config({
      //     debug: false, 
      //     appId: "wx122c017d1608c62a",
      //     timestamp: "1508311429", //生成签名的时间戳
      //     nonceStr: "20171111", //生成签名的随机串
      //     signature: "59c433db88f991b4f8d1076ded2a1d9256dcabc1",
      //     jsApiList: ['chooseWXPay']
      // });
      wx.ready(function(){
        onBridgeReady(wxOpt);
      });
      wx.error(function(res){
        console.log('wxConfigError',res);
      });
    }
    function onBridgeReady(wxOpt) {
      //调用微信支付（弹窗支付）
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
export {
  wxConfig
};
    
     