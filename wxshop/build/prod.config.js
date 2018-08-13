var config = {
  baseUrl: "http://192.168.8.118",
  interactionBaseUrl:"/wxpay/api/newapi",// https://api.xiaobaicar.com/newapi
  loginRegisterUrl:'/wxpay/api',
  shopUrl: "http://192.168.8.118",
  appName: "/shop",
  imgBaseUrl: "http://192.168.8.118:8080",
  loginPhone: "",//用户登录手机号
  orgCode: "youdaoauto",
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

export default config
