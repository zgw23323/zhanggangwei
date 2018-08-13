/**
 * 公共方法库
 */
var ydFunLib = {
	//获取当前时间
	getCurDate: function(){
        var date = new Date(); //创建日期对象
        var optDate = {
          nowYear : date.getFullYear(), //获取当前年份
          nowMonth : date.getMonth() + 1, //获取当前月份
          nowDay : date.getDate(), //获取当前天
          nowHour : date.getHours(),//获取当前时辰
          nowMinutes : date.getMinutes()//获取当前分钟
        }
        return optDate;
  },
  //获取某月份的总天数
	getThisMonthDay: function (year, month) {
	  var lastDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); //每个月的最后一天是几号
	  var thisDayCount = lastDays[month - 1]; //获取当前月份的天数
	  if((month == 2) && ydFunLib.isLeapYear(year)) {
	    //若当前月份为2月，并且是闰年，天数加1
	    thisDayCount++;

	  }
	  return thisDayCount;
	},
	//判断是否为闰年 
	isLeapYear: function (year) {
	  var isLeap = false;
	  if(0 == year % 4 && ((year % 100 != 0) || (year % 400 == 0))) {
	    //闰年可以被4整除且不能被100整除，或者能整除400
	    isLeap = true;
	  }
	  return isLeap;
	},
	//获取当天的后一天日期
	getMextDay: function(y,m,d) {
	    var allDay = ydFunLib.getThisMonthDay(y,m);
	    var opt = {};
	    if(d==allDay){//当月的最后一天
	      opt.nowDay=1;
	      if(m==12){//当月是12月,即当前是本年最后一天
	        opt.nowMonth = 1;
	        opt.nowYear = y+1;
	      }else{
	        opt.nowMonth = m+1;
          opt.nowYear = y;
	      }
	    }else{
	      opt.nowDay = d+1;
	      opt.nowMonth = m;
	      opt.nowYear = y;
	    }
	    return opt;
	},
  //判断每月的1号是周几
  getFirstWeek:function(n){
    var date = new Date(n);
    date.setDate(1);
    var weekday=new Array(7);
    weekday[0]="星期日" ;
    weekday[1]="星期一";
    weekday[2]="星期二";
    weekday[3]="星期三";
    weekday[4]="星期四";
    weekday[5]="星期五";
    weekday[6]="星期六";
    return date.getDay();
    // date.setMonth(date.getMonth() + 1);
    // var lastDate = new Date(date - 3600000*24);
    // console.log("本月最后一天是 " + lastDate.getDate());
  },
  //获取某年某月某日是周几
  getWeek: function(y,m,d){
    var date = new Date(y,m-1,d);
    // date.setDate();
    var weekday=new Array(7);
    weekday[0]="星期日" ;
    weekday[1]="星期一";
    weekday[2]="星期二";
    weekday[3]="星期三";
    weekday[4]="星期四";
    weekday[5]="星期五";
    weekday[6]="星期六";
    return weekday[date.getDay()];
  },
	// 压缩文件
  appendFile: function (path,callback){
    var orientation = 0;
  	var image = new Image();
    image.src = path;        // 传过来的图片路径在这里用。
    image.onload = function () {
         EXIF.getData(image, function() {
          orientation = EXIF.getTag(this,'Orientation');
          // console.log('Orientation',orientation);
              // alert(EXIF.pretty(this));
          });
        var that = this;
        //生成比例 
        var w = that.width,
        h = that.height,
        scale = w / h; 
        w = w || 480;  //压缩到多大值
        h = w / scale;

      	//生成canvas，使用canvas进行压缩
      	var canvas = document.createElement('canvas');

        var ctx = canvas.getContext('2d');
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh); 

        ctx.drawImage(that, 0, 0, w, h);//渲染画布

        //11.29更新
        var base64 = null;  
            //修复ios  
            switch(orientation){  
                case 6://需要顺时针（向左）90度旋转  
                    ydFunLib.rotateImg(this,'left',canvas);  
                    break;  
                case 8://需要逆时针（向右）90度旋转  
                    ydFunLib.rotateImg(this,'right',canvas);  
                    break;  
                case 3://需要180度旋转  
                    ydFunLib.rotateImg(this,'right',canvas);//转两次  
                    ydFunLib.rotateImg(this,'right',canvas);  
                    break;
                // case 0://测试旋转90度  
                //     ydFunLib.rotateImg(this,'left',canvas);  
                //     break;
            }    
        base64 = canvas.toDataURL('image/jpeg', 1 || 0.8 );   
        //1最清晰，越低越模糊。有一点不清楚这里明明设置的是jpeg。弹出 base64 开头的一段 data：image/png;却是png。    
      // this.prodPicUpload(base64);
      callback(base64);
    }
	},
  //对图片旋转处理   
  rotateImg: function (img, direction,canvas) {    
        //alert(img);  
        //最小与最大旋转方向，图片旋转4次后回到原方向    
        var min_step = 0;    
        var max_step = 3;    
        //var img = document.getElementById(pid);    
        if (img == null)return;    
        //img的高度和宽度不能在img元素隐藏后获取，否则会出错    
        var height = img.height;    
        var width = img.width;    
        //var step = img.getAttribute('step');    
        var step = 2;    
        if (step == null) {    
            step = min_step;    
        }    
        if (direction == 'right') {    
            step++;    
            //旋转到原位置，即超过最大值    
            step > max_step && (step = min_step);    
        } else {    
            step--;    
            step < min_step && (step = max_step);    
        }    
        //旋转角度以弧度值为参数    
        var degree = step * 90 * Math.PI / 180;    
        var ctx = canvas.getContext('2d');    
        switch (step) {    
            case 0:    
                canvas.width = width;    
                canvas.height = height;    
                ctx.drawImage(img, 0, 0);    
                break;    
            case 1:    
                canvas.width = height;    
                canvas.height = width;    
                ctx.rotate(degree);    
                ctx.drawImage(img, 0, -height);    
                break;    
            case 2:    
                canvas.width = width;    
                canvas.height = height;    
                ctx.rotate(degree);    
                ctx.drawImage(img, -width, -height);    
                break;    
            case 3:    
                canvas.width = height;    
                canvas.height = width;    
                ctx.rotate(degree);    
                ctx.drawImage(img, -width, 0);    
                break;    
        }    
  },
  //微信图片放大缩小
  wxBigImg: function(imgSrc){
    var srcList = [];
    srcList.push(imgSrc);
    WeixinJSBridge.invoke('imagePreview', {
      'current': imgSrc,
      'urls': srcList
    });
  },
  //判断当前终端是否是微信浏览器
  curNavigator: function() {
    var ua = navigator.userAgent.toLowerCase();
　　var isWeixin = ua.indexOf('micromessenger') != -1;
　　if (isWeixin) {
   　　 return true;
　　}else{
   　　 return false;      
　　}
  },
  //获取当前设备
  getCurNavigator: function() {
    var u = navigator.userAgent;
    var navigatorOpt = {};
    navigatorOpt.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    navigatorOpt.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return navigatorOpt;
  },
	//电话号码校验
	telInvalid: function(val) {
    return /^1(3|4|5|6|7|8|9)\d{9}$/.test(val);
  },

  //校验用户名方法
  uNameValid: function(value,allowEmptyString) { 
    let val= value.replace(/\s/g,"");
    return (val === null) || (val === undefined)
      || (!allowEmptyString ? val === '' : false)
      || (val.length === 0);
  },
  //验证码6位校验
  vCodeInvalid: function(val) { 
      return /^[0-9]{6}\d*$/.test(val);
  },
  //是否为空值校验
  isEmptyValid: function(value,allowEmptyString) {
      let val= value.replace(/\s/g,"");
      return (val === null) || (val === undefined)
        || (!allowEmptyString ? val === '' : false)
        || (val.length === 0);
  },
  //字符长度校验，中文2位，非中文1位返回
  strlenValid: function(str) {
      var len = 0;
      for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
        // if(c >= 0 && c <= 128){
          len++;
        }else {
          len += 2;
        }
      }
      return len;
  },
  //截取字符串
  subStrFun: function (str,maxNum) {
    var _str = "";
    var _len = 0;
    for(var i=0;i<str.length;i++){
      var c = str.charCodeAt(i);
      if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
        _len++;
      }else {
        _len += 2;
      }
      if(_len <= maxNum){
        _str = _str+str[i];
      }else{
        break;
      }
    }
    return _str;
  },
  //校验是否为字母数字字符串
  isNumberLetters:function(str) {
      var reg = /^[a-z0-9A-Z]+$/gi;
      if(reg.test(str)) {
        return true;
      }else {
        return false;
      }
  },
  trim(str,is_global) {  //去除空格方法（格式化字符串）
    let result;
    result = str.replace(/(^\s+)|(\s+$)/g,"");
    if(is_global.toLowerCase()=="g") {
        result = result.replace(/\s/g,"");
     }
    return result;
  },
  ydExtend: function(opt1,opt2,pBol){//该方法匹配、合并、更新两个对象值，仿jquery extend 方法
    var opt = opt1;
    for(var propName2 in opt2) {
      if(opt1[propName2] != undefined){//判断对象1是否有该属性
        if(typeof opt2[propName2] !='object'){//判断是否是对象
          opt1[propName2] = opt1[propName2] != opt2[propName2] && opt2[propName2] !=null && opt2[propName2] !=''? opt2[propName2] : opt1[propName2];
        }else{
          if(opt2[propName2] instanceof Array){
            opt1[propName2] = opt2[propName2].length >0 ? opt2[propName2] : opt1[propName2];
          }else{
            for(var item in opt2[propName2]){
              if(opt1[propName2][item]){
                opt1[propName2][item] = opt1[propName2][item] != opt2[propName2][item] && opt2[propName2][item] !=null ? opt2[propName2][item] : opt1[propName2][item];
              }else{
                opt1[propName2][item] = opt2[propName2][item];
              }
            }
          }
        }
      }else if(pBol){
        opt1[propName2] = opt2[propName2];
      }
    }
    return opt1;
  },
  //监听滚动条事件
  scrollChange: function(pThis){
    var scrollTop = document.body.scrollTop;
　　var wScroll = document.body.scrollHeight;
　　var wHeight = document.body.offsetHeight;
　　if(scrollTop + wHeight == wScroll){
      pThis.isFiexShow = true;
　　}else{
      pThis.isFiexShow = false;
    }
  },
  //获取当前设备
  getCurNavigator: function() {
    var u = navigator.userAgent;
    var navigatorOpt = {};
    navigatorOpt.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    navigatorOpt.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return navigatorOpt;
  },
  //小白问答模块登录
  interactionLogin: function(callback) {
    $.ajax({
      xhrFields:{
        withCredentials:true
      },
      type : "get",
      dataType : "json",
      data : {},
      contentType : false,
      cache : false,
      processData : false,
      url : window.loginRegisterUrl+'/loginApi/login/loginYd?uid='+window.openId+'&wx='+window.orgCode,
     // url : 'https://api.xiaobaicar.com/loginApi/login/loginYd?uid='+window.openId+'&wx='+window.orgCode,
      success : function(data) {
        if(data.code == "s_ok") {
          callback(data.result)
        }else{
          if(data.error_code==701){
            ydFunLib.interactionRegister(callback);
          }
        }
      }
    });
  },
  //小白问答模块注册
  interactionRegister: function(callback){
    var _dataStore = sessionStorage.getItem('interaction_name_info');
    if(_dataStore != null && _dataStore != 'undefined' && _dataStore !=''){
      var _name = _dataStore;
    }else{
      var _name = '会员';
    }
    console.log('register=>',_name);
    $.ajax({
      xhrFields:{
        withCredentials:true
      },
      type : "get",
      dataType : "json",
      data : {},
      contentType : false,
      cache : false,
      processData : false,
      url : window.loginRegisterUrl+'/loginApi/register/registerYd?uid='+window.openId+'&wx='+window.orgCode+'&name='+_name,
      success : function(data) {
        if(data.code == "s_ok") {
          callback(data.result)
        }else{
          console.log('data-error',data.msg);
        }
      }
    });
  },
    //截取地址,转化成json对象
  getUrlValue:() => {
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
  },
  //获取组织门店下所有地区数据
  orgsCityList: (orgList) => {
    var cityList = [];
    for(var i=0;i<orgList.length;i++){
      var item = orgList[i];
      var c = cityList.findIndex((data) => {return item.provienceId == data.provienceId});
      if(c == -1){//数组中没有该省份
        var o = {};
        o.provienceId = item.provienceId;
        o.provienceName = item.provienceId == '30164' ? '广西':item.provienceName.replace('省','');
        o.cityList = [];
        var p = {};
        p.cityId = item.cityId;
        p.cityName = item.cityName.replace('市','');
        p.orgList = [];
        p.orgList.push(item);
        o.cityList.push(p);
        cityList.push(o);
      }else {//数组中有该省份
        var n = cityList[c].cityList.findIndex((data) => {return data.cityId == item.cityId});
        if(n == -1) {//该省份中没有此城市
          var c_p = {};
          c_p.cityId = item.cityId;
          c_p.cityName = item.cityName.replace('市','');
          c_p.orgList = [];
          c_p.orgList.push(item);
          cityList[c].cityList.push(c_p);
        }else{//该省份中有此城市
          cityList[c].cityList[n].orgList.push(item);
        }
      }
    }
    return cityList;
  }
}

export {
    ydFunLib
};