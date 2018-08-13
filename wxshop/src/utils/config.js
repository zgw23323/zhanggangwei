  var config = {
    baseUrl: "http://192.168.8.118",
    shopUrl: "http://192.168.8.118",
    appName: "/shop",
    imgBaseUrl: "http://192.168.8.118",
    loginPhone: "",//用户登录手机号
    orgCode: "DDTZ",
    openId: "okIq4w51iQd0taYi5YRcjFEfL078",
    shopsid: "okIq4w51iQd0taYi5YRcjFEfL078",
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
    isWXpay: false, //是否打开微信支付
    wxdebug: false, //是否打开微信回调
    isVip: false,//是否会员
    showEsc: false //是否显示退出
  };
  var url = getUrlValue();  
  var setConfig = function (opt) {
      ydExtend(config,url,false);//首选匹配更新地址上的数据
      // console.log('config1-》',config);
      if(opt){//再匹配接口更新返回数据
        ydExtend(config,opt,true);
        console.log('config2-》',config);
      }
      window.baseUrl = config.baseUrl;//http://www.autoheader.com
      window.shopUrl = config.shopUrl;
      window.appName = config.appName;
      window.imgBaseUrl = config.baseUrl;
      window.loginPhone = config.loginPhone //登录手机号
      window.orgCode = config.orgCode;
      window.openId = config.openId;
      window.shopsid = config.shopsid;//有积分id
      window.serviceUrl = {
        rechargeUrl:config.serviceUrl.rechargeUrl,//权益服务中心充值跳转地址
        wxHomeUrl:config.serviceUrl.wxHomeUrl//权益服务中心微信商城跳转地址
      }
      //获取缓存数据
      var _orgCode = localStorage.getItem("_orgCode");
      var _shopsid = localStorage.getItem("_shopsid");

      if(_orgCode == null || _orgCode == 'undefined' || _orgCode == "") {//缓存中不存在shopsid
        
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

      //缓存openId数据
      if(window.openId == 'null' || window.openId == 'undefined' || window.openId == '') {
        window.openId = localStorage.getItem("_openId");
      }else {
        localStorage.setItem("_openId",window.openId);
        localStorage.setItem("_shopsid", window.openId);
        window.shopsid=window.openId;
      }

      localStorage.setItem("_shopsid", window.openId);
      _shopsid = window.openId;
      window.shopsid = window.openId;

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

      window.isVip = config.isVip; //是否会员

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
  function ydExtend(opt1,opt2,pBol){//该方法匹配、合并、更新两个对象值，仿jquery extend 方法
      var opt = opt1;
      for(var propName2 in opt2) {
        if(opt1[propName2]){//判断对象1是否有该属性
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
    var _url = window.location.origin;
    console.log("location-》",_url);
    config.baseUrl = _url =='http://localhost:8888'? config.baseUrl : _url;//本地环境配测试环境地址
    // $.ajax({
    //   type : "post",
    //   dataType : "json",
    //   data : {},
    //   contentType : false,
    //   cache : false,
    //   processData : false,
    //   url : 'http://192.168.8.118/shop3/shopapi/func/config/config?orgCode=DDTZ',
    //   success : function(data) {
    //     debugger;
    //     if (data["code"] == "S_OK") {
    //        var configOrgData = data.var;
    //        setConfig(configOrgData);
    //     }
    //   }
    // });
  }
// setBaseUrl();  
setConfig();

export {
  setConfig,
  config
};
