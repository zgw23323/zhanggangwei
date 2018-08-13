  var config = {
    baseUrl: "http://192.168.8.118",
    interactionBaseUrl:"/wxpay/api/newapi",// https://api.xiaobaicar.com/newapi
    loginRegisterUrl:'/wxpay/api',
    shopUrl: "http://192.168.8.118",
    appName: "/shop",
    imgBaseUrl: "http://192.168.8.118:8080",
    loginPhone: "",//用户登录手机号
    orgCode: "youdaoauto",
    qiniuDomain: 'http://p5vdemxun.bkt.clouddn.com/',//七牛图片地址oi9rjrkgb.bkt.clouddn.com
    workerOrgCode: "DDTZ",
    profile: "test",
    openId: "",
    shopsid: "",
    redirectUrl:'',//退出时重定向页面
    serviceUrl: {
      rechargeUrl: "", //权益服务中心充值跳转地址
       wxHomeUrl:"" //权益服务中心微信商城跳转地址
    },
    orgInfo: {
      orgName: '广州有道汽车4S店',
      orgShortName: '',
      telphone: '0755-6464654654',
      address: '广州市海珠区新滘西路68号（大塘站D出）'
    },
    couponEnable:{//是否启动优惠券入口: true表示启用
        all: false,//判断是否开放领取优惠券入口
        home: true,
        detail:true
    },
    isCache:true,//是否添加缓存,true=不缓存，false=需要缓存
    isZipImg:false,//上传图片时是否压缩图片
    workerHomeUrl:'',//工作人员通道授权地址
    isWXpay: false, //是否打开微信支付
    wxdebug: false, //是否打开微信回调
    isVip: 0,//是否会员
    showEsc: false, //是否显示退出
    CodeObj:{
      "ylcd":"gxyl",
      "SZYDMG":"szyd",
      "gzyd":"",
      "gzpyhf":"gzpyhf",
      "qyyd":"qyyd",
      "zjyd":"zjyd",
      "gzch":"gzch",
      "hnyd":"",
      "csdd":"",
      "fssdrw":"",
      "czyl":"czyl",
      "zzjw":"zzjw",
      "csrd":"csrd",
      "gxaj":"gxaj",
      "gxbs":"gxbs",
      "gxgg":"gxgg",
      "gxgl":"gxgl",
      "stzddz":"stzddz",
      "czzddz":"czzddz",
      "gxhdskd":"gxhdskd",
      "stzdklsl":"stzdklsl",
      "fsnh":"fsnh",
      "gdyd":"gdyd",
      "fscc":"",
      "zzyd":"zzyd",
      "shbyd":"shbyd",
      "stjwdz":"stjwdz",
      "YDH":"ydjt",
      "gzthwey":"gzthwey","xtydwey":"xtydwey",
      "jmxhwey":"jmxhwey","nnxnwey":"nnxnwey","fsnhwey":"fsnhwey",
      "gllcwey":"gllcwey","zztywey":"zztywey","lzcdwey":"lzcdwey","zsxlwey":"zsxlwey","csznwey":"csznwey"
    }
  };
  var url = getUrlValue();
  var setConfig = function (opt) {
      ydExtend(config,url,false);//首选匹配更新地址上的数据
      console.log('config1-》',config.baseUrl);
      if(opt){//再匹配接口更新返回数据
        ydExtend(config,opt,true);
        console.log('config3-》',config);
      }
      window.interactionBaseUrl = config.interactionBaseUrl;//小白用车问答模块地址
      window.loginRegisterUrl = config.loginRegisterUrl;
      window.baseUrl = config.baseUrl;//http://www.autoheader.com
      window.shopUrl = config.shopUrl;
      window.appName = config.appName;
      window.imgBaseUrl = config.baseUrl;
      window.qiniuDomain = config.qiniuDomain;
      window.isCache = config.isCache;
      window.loginPhone = config.loginPhone //登录手机号
      window.orgCode = config.orgCode;
      window.openId = config.openId;
      window.shopsid = config.shopsid;//有积分id
      window.profile = config.profile;//判断当前环境
      window.isZipImg = config.isZipImg;
      window.CodeObj = {};
      window.workerOrgCode = config.workerOrgCode;//工作台组织
      window.serviceUrl = {
        rechargeUrl:config.serviceUrl.rechargeUrl,//权益服务中心充值跳转地址
        wxHomeUrl:config.serviceUrl.wxHomeUrl//权益服务中心微信商城跳转地址
      }
      window.workerHomeUrl = config.workerHomeUrl; 

      for(var key in config.CodeObj){
        window.CodeObj[key] = config.CodeObj[key];
      }
      //获取缓存数据
      var _orgCode = localStorage.getItem("_orgCode");

      if(_orgCode == null || _orgCode == 'undefined' || _orgCode == "") {//缓存中不存在orgCode
        if (window.orgCode == 'null' || window.orgCode == 'undefined' || window.orgCode == null) {
          window.orgCode = "";
        }else {
          localStorage.setItem("_orgCode", window.orgCode);//不存在window.orgCode，则设置
        } 
      }else {
        if (window.orgCode == 'null' || window.orgCode == 'undefined' || window.orgCode == null) {
          window.orgCode = _orgCode;
        }else {
          localStorage.setItem("_orgCode", window.orgCode);
        }
      }

      //设置openId数据

      var org_openId = localStorage.getItem(window.orgCode+"_openId");//修改过后的openId
      if(org_openId) {
        window.openId = org_openId;
      }
      // localStorage.setItem("_shopsid", window.openId);
      // _shopsid = window.openId;
      window.shopsid = window.openId;

      //获取缓存中的shopsid
      var _shopsid = localStorage.getItem("_shopsid");
      if(_shopsid == null || _shopsid == 'undefined' || _shopsid == "") {//缓存中不存在shopsid
        if (window.shopsid == 'null' || window.shopsid == 'undefined' || window.shopsid == null) {
          window.shopsid = "";
          //localStorage.setItem("_shopsid", "");
        }else {
          localStorage.setItem("_shopsid", window.shopsid);//不存在shopsid，则设置
        } 
      }else {      
        if (window.shopsid == 'null' || window.shopsid == 'undefined' || window.shopsid == null) {
            window.shopsid = window.openId;
        }else {
            localStorage.setItem("_shopsid", window.shopsid);
        }
      }
      //缓存登录手机号码
      if(window.loginPhone !='' && window.loginPhone !='null' && window.loginPhone !='undefined'){
        localStorage.setItem("serviceInfoPhone", window.loginPhone);
      }

      window.couponEnable = {
        all:config.couponEnable.all,
        home:config.couponEnable.home,
        detail:config.couponEnable.detail
      };

      window.isWXpay = config.isWXpay; //是否打开微信支付
      window.wxdebug = config.wxdebug; //是否打开微信回调

      window.isVip = config.isVip==1?true:false; //是否会员

      window.showEsc = config.showEsc; //是否显示退出

      //门店LOGO信息配置
      window.shop = {
        name: '广州有道汽车4S店',
        telphone: '0755-6464654654',
        address: '广州市海珠区新滘西路68号（大塘站D出）'
      };

      //退出时重定向页面
      window.redirectUrl = config.redirectUrl;
  }
  //截取地址,转化成json对象
  function getUrlValue() {
    var url = url ? url : window.location.href;
    if (url.indexOf('#') > -1) {
        url = url.split('#')[0];
    }
    var variable = url.split('?')[1];
    var value = {};
    //匹配#号前边的参数
    if (variable) {
      var variable = variable.split('&');
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
    }
    //匹配路由后边的参数
    if(window.location.href.split('#/').length>1){
      var url2 = window.location.href.split('#/')[1].split('?');
      if(url2.length>1){
        var len = url2[1].split('&');
        for(var j = 0;j < len.length;j++){
          var tempv=len[j].split('=')[1];
          if( typeof(tempv)!='undefined' ){
              if(tempv=='null' || tempv=='undefined'){
                  tempv='';
              }
              tempv=decodeURIComponent(tempv).replace(/</g, '&lt;').replace(/>/g, '&gt;');
              value[len[j].split('=')[0]] = tempv;
          }
        }
      }
    }
    return value;
  }
  function ydExtend(opt1,opt2,pBol){//该方法匹配、合并、更新两个对象值，仿jquery extend 方法
      var opt = opt1;
      for(var propName2 in opt2) {
        if(opt1[propName2] || opt1[propName2]==''){//判断对象1是否有该属性
          if(typeof opt2[propName2] !='object'){//判断是否是对象
            opt[propName2] = opt1[propName2] != opt2[propName2] && opt2[propName2] !=null ? opt2[propName2] : opt1[propName2];
          }else{
            for(var item in opt2[propName2]){
              if(opt1[propName2][item]){
                opt[propName2][item] = opt1[propName2][item] != opt2[propName2][item] && opt2[propName2][item] !=null ? opt2[propName2][item] : opt1[propName2][item];
              }else{
                opt[propName2][item] = opt2[propName2][item];
              }
            }
          }
        }else if(pBol){
          opt[propName2] = opt2[propName2];
        }
      }
      return opt;
  }
  //根据当前地址环境配置接口请求地址
  function setBaseUrl(){
    // console.log("location-》111",window.location.hostname);
    var _url = window.location.hostname;
    // console.log("location-》",_url);
    config.baseUrl = _url =='www.autoheader.com'? "http://"+window.location.host : config.baseUrl;//本地环境配测试环境地址
  }
  
  setBaseUrl();  
  setConfig();
