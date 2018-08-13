 function wxConfig(){
      //微信支付配置
       
      // wx.config({
      //     debug: false, 
      //     appId: this.wxOpt.appId,
      //     timestamp: this.wxOpt.timeStamp, //生成签名的时间戳
      //     nonceStr: this.wxOpt.nonceStr, //生成签名的随机串
      //     signature: "MD5",
      //     jsApiList: ['chooseWXPay']
      // });
      console.log('wxPay');
      wx.config({
          debug: false, 
          appId: "wx122c017d1608c62a",
          timestamp: "1508311429", //生成签名的时间戳
          nonceStr: "20171111", //生成签名的随机串
          signature: "59c433db88f991b4f8d1076ded2a1d9256dcabc1",
          jsApiList: ['chooseWXPay']
      });
      wx.ready(function(){
        console.log('wxConfigSucces');
        // wx.checkJsApi({
        //     jsApiList: ['chooseWXPay'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        //     success: function(res) {
        //         // 以键值对的形式返回，可用的api值true，不可用为false
        //         // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
        //         // console.log(res);
        //     }
        // });
        onBridgeReady();
      });
      wx.error(function(res){
        console.log('wxConfigError',res);
      });
    }
    function onBridgeReady() {
      //调用微信支付（弹窗支付）
        wx.chooseWXPay({
          // timestamp: this.wxOpt.timeStamp,
          // nonceStr: this.wxOpt.nonceStr, // 支付签名随机串，不长于 32 位
          // package: this.wxOpt.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
          // signType: "MD5", // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          // paySign: this.wxOpt.paySign, // 支付签名
          timestamp: '1506020669',
          nonceStr: "1506020669522", // 支付签名随机串，不长于 32 位
          package: "prepay_id=wx20170922030429a38a8986c00595055877", // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
          signType: "MD5", // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          paySign: 'A92FD1E112AE9752F045BB957011B712', // 支付签名
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
    function wxGetDate(pType) {
    	var redirect_uri = encodeURIComponent('http://www.autoheader.com/wxpay/wxPayDemo.html');
    	var url = getUrlValue();
    	var access_token_opt = {};
    	console.log("url",url);
    	if(pType == 'code'){
    		//拿到code
    		location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx122c017d1608c62a&redirect_uri="+redirect_uri+ "&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
    	}else if(pType == 'access_token') {
    		var code = "071cIznD17zxL00hcAmD1EHNnD1cIznp";
    		  $("head").append("<script src='https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx122c017d1608c62a&secret=44db692a443a93550015298502aeb260&code="+code+"&grant_type=authorization_code?jsonpcallback=showData'><\/script>");
    		access_token_opt = {
	    		"access_token":"tj9pGlVFwJCsEV98-XOGsrUFT2f9z-VBPJwSdwfDZQ_6XYatQ3jElkv4J_fvVzk_MwTZUd3yKKUJrQYrpwWkmA",
	    		"expires_in":7200,
	    		"refresh_token":"5_RoywerbFNhsFhzia4HrazhuSNIjznvcON5MjvUY8d7vzh12dna7WXL5kTyxQpVoCT-UPzWl8xNu0W7SXyGIg",
	    		"openid":"okIq4w2cgHfh815MCPghFwY-4zbw",
	    		"scope":"snsapi_userinfo"
    		} 
    		 function showData(data){
    		 	debugger;
    		 } 
			 
    	}else{
    		//拿到jsapi_ticket  
      		location.href = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=tj9pGlVFwJCsEV98-XOGsrUFT2f9z-VBPJwSdwfDZQ_6XYatQ3jElkv4J_fvVzk_MwTZUd3yKKUJrQYrpwWkmA&type=jsapi";
    	}

    }
     
     //截取地址
    function getUrlValue() {
      var url = url ? url : window.location.href;
      if (url.indexOf('#') > -1) {
          url = url.split('#')[0];
      }
      var variable = url.split('?')[1];
      if (!variable) {
          return null;
      } else {
          var value = {};
          variable = variable.split('&');
          for (var i = 0, m = variable.length; i < m; i++) {
              var tempv=variable[i].split('=')[1];
              if( typeof(tempv)!='undefined' ){
                  if(tempv=='null' || tempv=='undefined'){
                      tempv='';
                  }
                  tempv=decodeURIComponent(tempv).replace(/</g, '&lt;').replace(/>/g, '&gt;');
                  value[variable[i].split('=')[0]] = tempv;
              }
          }
          return value;
      }
    }