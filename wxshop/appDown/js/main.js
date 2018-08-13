var androidUrl ="http://www.autoheader.com/shop/WXAPP.apk",iosUrl = "itms-services://?action=download-manifest&url=https%3A%2F%2Fdownload.fir.im%2Fapps%2F57fca9b3ca87a81ce7000314%2Finstall%3Fdownload_token%3Dcc93323bff886cfdbe81a1ab93cb7110%26release_id%3D59562616548b7a675e000269"; //当前设备地址信息
//ios系统点击下载用ajax请求的方式
function iosDown(){
  	ajax({ 
	  type:"GET", 
	  url:iosUrl, 
	  data:{}, 
	  success:function(data){ 

	  }
	})
}
//设置设备下载链接
function setUrlFun(){
	var u = navigator.userAgent;//获取判断设备对象
	document.getElementById('app_down_pilot').style.cssText ='display: none;';
	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
	    $('.android_btn').attr('href',androidUrl).show();
	    
	    $('.ios_btn').hide();
	}else if (u.indexOf('iPhone') > -1 || u.indexOf('Windows Phone') > -1) {//苹果手机
	    $('.android_btn').hide();
	}else{
		$('.ios_btn,.android_btn').hide();
		$('.app_down_code').show();
	}
}
$(function () {
	  var ua = navigator.userAgent.toLowerCase();//获取判断浏览器对象
	 	
	  var isInner = true;
	  if(ua.indexOf("micromessenger") > -1){//微信浏览器
	    //isInner  = true;  	
	  	//document.getElementById('app_down_pilot').style.cssText='display: block;';
	  }else if(ua.indexOf("qq") > -1){//qq浏览器

	  	if(ua.indexOf("mobile mqqbrowser") > -1){//qq内置浏览器
	  		//document.getElementById('app_down_pilot').style.cssText='display: block;';
	  	}
	  	else if(ua.indexOf("mqqbrowser") > -1){//qq APP浏览器
	  		//setUrlFun();
	  		isInner = false;
	  	}
	  }else{//浏览器
	  	//setUrlFun();
	  	isInner = false;
	  }
	  if (isInner) {
	  	document.getElementById('app_down_pilot').style.cssText='display: block;';
	  }else {
	  	setUrlFun();
	  }
	//生成地址二维码
	$('.app_down_code').qrcode({
	    width: 150,
	    height: 150,
	    text: window.location.href
	});
});