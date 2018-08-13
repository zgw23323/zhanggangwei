import ajax from '../utils/ajax'
import {codeKeyValue} from '../utils/errorCode';
import {LOGCODE} from '../utils/logCode';

const _baseUrl = window.baseUrl+window.appName;
 
/**
 * 推荐人列表请求
 *
 */
const wxListEmployee = (vm,callcackF,requeryType) => {
	var resultData = [];
	var l = localStorage.getItem('last_get_wxListEmployee')?Number.parseInt(localStorage.getItem('last_get_wxListEmployee')):0;//最后请求时间加上一个小时
	var c = new Date().getTime();
	var _url = window.baseUrl+window.appName+'/shopapi/func/user/wxListEmployee';
	var _org = window.orgCode;
    if(vm.$route.query.from=='glassOpenOrder'){
        if(vm.$route.query.orgId==''){
          _url = _url +'?orgCode='+window.orgCode+ '&shopsid=' + window.shopsid;
          var _opt = {};
        }else{
          var _opt = {"chooseOrgId": vm.$route.query.orgId};
          _org = "";
          console.log('chooseOrgId',vm.$route.query.orgId);
        }
    }else if(vm.$route.query.from=='glassClaim'){
        var _opt = {"chooseOrgId": vm.$route.query.orgId};
        _org = "";
    }else if(vm.$route.query.from=='recharge'){
        _url = _url +'?orgCode='+vm.$route.query.org+ '&shopsid=' + window.shopsid;
        var _opt = {};
        _org = vm.$route.query.org;
    }else if(requeryType){
    	var _opt = {"chooseOrgId": requeryType};
        _org = "";
	}else{
        _url = _url+'?orgCode='+window.orgCode+ '&shopsid=' + window.shopsid;
        var _opt = {};
    }
    var employee = l ? JSON.parse(localStorage.getItem(_org+'_'+ l)):[];
	if(!window.isCache || requeryType || c > (l+3600000) || !employee){
		vm.$dialog.loading.open('加载数据中...');
		ajax
	    .post(_url,_opt)
	    .then(result => {
	    	let curDate = new Date().getTime();
	    	if(_org){
	    		localStorage.setItem('last_get_wxListEmployee', curDate);
	    		localStorage.setItem(_org+'_'+curDate, JSON.stringify(result));
	    		if(l){
	    			localStorage.removeItem(_org+'_'+l);
	    		}
	    	}
	    	vm.$dialog.loading.close();
	    	callcackF(result);
	    })
	    .catch(err => {
	    	vm.$dialog.loading.close();
	    })
	}else {
		callcackF(employee);
	}
}
/**
 * 获取组织请求
 *
 */
const listOrgs = (vm,callcackF) => {
	var resultData = [];
	console.log('sshshshhs');
	var l = localStorage.getItem('last_get_listOrgs')?Number.parseInt(localStorage.getItem('last_get_listOrgs')):0;//最后请求时间加上一个小时
	var c = new Date().getTime();
	var orgs = l ? JSON.parse(localStorage.getItem('cache_listOrgs_'+ l)):[];
	if(!window.isCache || c > (l+3600000) || orgs.length==0){
		vm.$dialog.loading.open('加载数据中...');
		ajax
	    .post(window.baseUrl+window.appName+'/wxpay/listOrgs',{})
	    .then(result => {
	    	let curDate = new Date().getTime();
	    	localStorage.setItem('last_get_listOrgs', curDate);
	    	localStorage.setItem("cache_listOrgs_"+curDate, JSON.stringify(result));
	    	if(l){
	    		localStorage.removeItem("cache_listOrgs_"+l);
	    	}
	    	vm.$dialog.loading.close();
	    	callcackF(result);
	    })
	    .catch(err => {
	    	vm.$dialog.loading.close();
	    	vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
	    })
	}else {
		callcackF(orgs);
	}
}
/**
 * 获取车辆品牌
 *
 */
const wxListCarInfo = (vm,callcackF) => {
	var resultData = [];
	var l = localStorage.getItem('last_get_wxListCarInfo')?Number.parseInt(localStorage.getItem('last_get_wxListCarInfo')):0;//最后请求时间加上一个小时
	var c = new Date().getTime();
	var orgs = l ? JSON.parse(localStorage.getItem('cache_wxListCarInfo_'+ l)):[];
	console.log('l',l,'orgs',orgs);
	if(!window.isCache || c > (l+3600000) || orgs.length==0){
		// vm.$dialog.loading.open('加载数据中...');
		ajax
	    .post(window.baseUrl+window.appName+'/shopapi/func/glassposition/wxListCarInfo',{})
	    .then(result => {
	    	let curDate = new Date().getTime();
	    	localStorage.setItem('last_get_wxListCarInfo', curDate);
	    	localStorage.setItem("cache_wxListCarInfo_"+curDate, JSON.stringify(result));
	    	if(l){
	    		localStorage.removeItem("cache_wxListCarInfo_"+l);
	    	}
	    	vm.$dialog.loading.close();
	    	callcackF(result);
	    })
	    .catch(err => {
	    	vm.$dialog.loading.close();
	    	vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
	    })
	}else {
		callcackF(orgs);
	}
}
/**
 * 获取车架号位数
 *
 */
const wxGetVinLength = (vm,callcackF) => {
	var vinLength = JSON.parse(localStorage.getItem('cache_wxGetVinLength'));
	if(!vinLength){
		ajax
	    .post(window.baseUrl+window.appName+'/shopapi/func/user/wxGetVinLength?orgCode='+window.orgCode+'&shopsid='+window.shopsid,{})
	    .then(result => {
	    	let curDate = new Date().getTime();
	    	localStorage.setItem("cache_wxGetVinLength", JSON.stringify(result));
	    	callcackF(result);
	    })
	    .catch(err => {
	    	vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
	    })
	}else {
		callcackF(vinLength);
	}
}
/**
 * 获取商城首页数据
 *
 */
const homePageList = (vm,callcackF,opt) => {
	vm.$dialog.loading.open('加载数据中...');
	ajax
    .post(window.baseUrl+window.appName+'/shopapi/func/product/homePageList?orgCode='+window.orgCode,opt)
    .then(result => {
    	vm.$dialog.loading.close();
    	callcackF(result);
    })
    .catch((err,errorCode) => {
    	vm.$dialog.loading.close();
    	vm.tips1 = true;
    	console.log('112');
    	if(errorCode){
    		vm.$dialog.notify({mes: codeKeyValue[derrorCode], icon: 'error', timeout: 1200});
    	}else{
    		vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    	}
    })
}
/**
 * 获取商城首页活动数据
 *
 */
const displayedActivity = (vm,callcackF) => {
	vm.$dialog.loading.open('加载数据中...');
	ajax
    .post(window.baseUrl+window.appName+'/shopapi/func/product/displayedActivity?orgCode='+window.orgCode,{})
    .then(result => {
    	vm.$dialog.loading.close();
    	callcackF(result);
    })
    .catch((err,errorCode) => {
    	vm.$dialog.loading.close();
    	if(errorCode){
    		vm.$dialog.notify({mes: codeKeyValue[errorCode], icon: 'error', timeout: 1200});
    	}else{
    		vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    	}
    })
}
 
/**
 * 权益服务首页获取用户信息
 *
 */
const rightsHomeDatas = (vm,callcackF) => {
	// vm.$dialog.loading.open('加载数据中...');
	ajax
    .post(_baseUrl+'/shopapi/func/serve/rightsHomeDatas?shopsid='+window.shopsid+"&orgCode="+window.orgCode+"&openId="+window.openId,{})
    .then(result => {
    	// vm.$dialog.loading.close();
    	callcackF(result);
    })
    .catch((err,errorCode) => {
    	vm.$dialog.loading.close();
    	if(errorCode == "LOGIN_SID_FAL_0X001" || errorCode == "LOGIN_FAL_0x003" || errorCode == "LOGIN_FAL_0x004" || errorCode == "NO_LOGIN") {
	        vm.$dialog.notify({mes: '登录失效，请重新登录', icon: 'error', timeout: 1200, callback: () => {
	          that.$router.push('/login');
	        }});
      	}else{
        	that.$dialog.notify({mes: codeKeyValue[data.code], icon: 'error', timeout: 1200});
      	} 
    	if(errorCode){
    		vm.$dialog.notify({mes: codeKeyValue[errorCode], icon: 'error', timeout: 1200});
    	}else{
    		vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    	}
    })
}

/**
 * 我的车辆
 *
 */
const wxMyCars = (vm,callcackF) => {
	// vm.$dialog.loading.open('加载数据中...');
	ajax
    .post(_baseUrl+'/shopapi/func/appoint/wxMyCars?shopsid='+window.shopsid,{})
    .then(result => {
    	// vm.$dialog.loading.close();
    	callcackF(result);
    })
    .catch((errorCode) => {
    	console.log('err',errorCode);
    	vm.$dialog.loading.close();
    	if(errorCode){
    		vm.$dialog.notify({mes: codeKeyValue[errorCode], icon: 'error', timeout: 1200});
    	}else{
    		vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    	}
    })
}

/**
 * 设置默认车辆
 *
 */
const wxSetDefaultUserCar = (vm,callcackF,pId) => {
	vm.$dialog.loading.open('设置中...');
    vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.BTN_PAGE_MYCAR_DEFAULT_APPLY});
	ajax
    .post(_baseUrl+'/shopapi/func/appoint/wxSetDefaultUserCar?shopsid='+window.shopsid,{'id':pId})
    .then(result => {
    	vm.$dialog.loading.close();
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_MYCAR_DEFAULT_APPLY_OK});
		vm.$dialog.toast({
	        mes: '设置默认成功',
	        timeout: 1000,
	        icon: 'success',
	        callback: () => {
	          callcackF();
	        }
	    });
    })
    .catch((errorCode) => {
    	console.log('err',errorCode);
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_MYCAR_DEFAULT_APPLY_FAIL});
    	vm.$dialog.loading.close();
    	if(errorCode){
    		vm.$dialog.notify({mes: codeKeyValue[errorCode], icon: 'error', timeout: 1200});
    	}else{
    		vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    	}
    })
}

/**
 * 删除车辆
 *
 */
const wxDelUserCar = (vm,callcackF,pId) => {
	vm.$dialog.loading.open('删除中...');
    vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.BTN_PAGE_MYCAR_DELETE_APPLY});
	ajax
    .post(_baseUrl+'/shopapi/func/appoint/wxDelUserCar?shopsid='+window.shopsid,{'id':pId})
    .then(result => {
    	vm.$dialog.loading.close();
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_MYCAR_DELETE_APPLY_OK});
    	vm.$dialog.toast({
	        mes: '删除成功',
	        timeout: 1000,
	        icon: 'success',
	        callback: () => {
	          callcackF();
	        }
	    });
    })
    .catch((errorCode) => {
    	vm.$dialog.loading.close();
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_MYCAR_DEFAULT_APPLY_FAIL});
    	if(errorCode){
    		vm.$dialog.notify({mes: codeKeyValue[errorCode], icon: 'error', timeout: 1200});
    	}else{
    		vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    	}
    })
}

/**
 * 添加车辆
 *
 */
const wxAddUserCar = (vm,callcackF,opt) => {
    vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.BTN_PAGE_ADDCAR_SAVE_APPLY});
	vm.$dialog.loading.open('保存中...');
	ajax
    .post(window.baseUrl+window.appName+'/shopapi/func/appoint/wxAddUserCar?shopsid='+window.shopsid,opt)
    .then(result => {
    	vm.$dialog.loading.close();
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_ADDCAR_SAVE_APPLY_OK});
    	vm.$dialog.toast({
	        mes: '添加成功',
	        timeout: 1000,
	        icon: 'success',
	        callback: () => {
	          callcackF();
	        }
	    });
    })
    .catch((err,errorCode) => {
    	vm.$dialog.loading.close();
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_ADDCAR_SAVE_APPLY_FAIL});
    	if(errorCode){
    		vm.$dialog.notify({mes: codeKeyValue[errorCode], icon: 'error', timeout: 1200});
    	}else{
    		vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    	}
    })
}

/**
 * 获取SA工作人员表
 *
 */
const querySaListForDate = (vm,callcackF,opt) => {
	// vm.$dialog.loading.open('加载数据中...');
	ajax
    .post(_baseUrl+'/shopapi/func/sa/querySaListForDate?shopsid='+window.shopsid,opt)
    .then(result => {
    	callcackF(result);
    })
    .catch((errorCode) => {
    	vm.$dialog.loading.close();
    	if(errorCode){
    		vm.$dialog.notify({mes: codeKeyValue[errorCode], icon: 'error', timeout: 1200});
    	}else{
    		vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    	}
    })
}

/**
 * 获取预约详情
 *
 */
const wxAppointDetailInfo = (vm,callcackF,opt) => {
	vm.$dialog.loading.open('加载中...');
	ajax
    .post(window.baseUrl+window.appName+'/shopapi/func/appoint/wxAppointDetailInfo?shopsid='+window.shopsid,opt)
    .then(result => {
    	vm.$dialog.loading.close(); 
    	callcackF(result);
    })
    .catch(err => {
    	vm.$dialog.loading.close(); 
    	vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    })
}

/**
 * 预约成功
 *
 */
const wxUserAppoint = (vm,callcackF) => {
	vm.$dialog.loading.open('加载数据中...');
	ajax
    .post(window.baseUrl+window.appName+'/shopapi/func/appoint/wxUserAppoint?shopsid='+window.shopsid+'&orgCode='+window.orgCode)
    .then(result => {
    	vm.$dialog.loading.close(); 
    	callcackF(result);
    })
    .catch(err => {
    	vm.$dialog.loading.close();
    	vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    })
}

/**
 * 取消预约
 *
 */
const wxCancleAppoint = (vm,callcackF,opt) => {
	vm.$dialog.loading.open('请求中...');
    vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.BTN_PAGE_APPOINTRECORDDEATIL_DELETE_APPLY});
	ajax
    .post(window.baseUrl+window.appName+'/shopapi/func/appoint/wxCancleAppoint?shopsid='+window.shopsid,opt)
    .then(result => {
    	vm.$dialog.loading.close(); 
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_APPOINTRECORDDEATIL_DELETE_APPLY_OK});
    	vm.$dialog.toast({
	        mes: '取消成功',
	        timeout: 1000,
	        icon: 'success',
	        callback: () => {
	          callcackF();
	        }
	    });
    })
    .catch(err => {
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_APPOINTRECORDDEATIL_DELETE_APPLY_FAIL});
    	vm.$dialog.loading.close();
    	vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    })
}

/**
 * 获取预约时间段列表
 *
 */
const wxWorktimeForOrg = (vm,callcackF,opt) => {
	vm.$dialog.loading.open('加载数据中...');
	ajax
    .post(window.baseUrl+window.appName+'/shopapi/func/worktime/wxWorktimeForOrg?shopsid='+window.shopsid,opt)
    .then(result => {
    	vm.$dialog.loading.close(); 
    	callcackF(result);
    })
    .catch(err => {
        vm.$dialog.loading.close();
        if(err=='NO_DATA'){
            callcackF([]);
            vm.$dialog.notify({mes: '没有可选时间段，请选择别的日期', icon: 'error', timeout: 2000});
        }else{
            vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
        }
    })
}

/** 
 * 个人中心获取各人信息接口
 *
 */
const wxUserPersonalCenter = (vm,callcackF,pRouter) => {
	vm.$dialog.loading.open('加载数据中...');
	ajax
    .post(_baseUrl+'/shopapi/func/user/wxUserPersonalCenter?shopsid='+window.shopsid,{})
    .then(result => {
    	vm.$dialog.loading.close();
    	callcackF(result);
    })
    .catch((errorCode) => {
    	console.log('err',errorCode);
    	vm.$dialog.loading.close();
    	if(errorCode){
    		if(errorCode == "LOGIN_SID_FAL_0X001" || errorCode == "LOGIN_FAL_0x003" || errorCode == "LOGIN_FAL_0x004" || errorCode == "NO_LOGIN") {
              vm.$dialog.notify({mes: '登录失效，请重新登录', icon: 'error', timeout: 1200, callback: () => {
                if(pRouter == 'appointmentService'){
                	vm.$router.push({
			          	path: '/login',
			          	query: {'formType':'appointmentService'}
			        });
                }else{
                	vm.$router.push('/login');
                }
              }});
            }else if(errorCode == "NO_LOGIN") {
                vm.$dialog.notify({mes: '您还未登陆', icon: 'error', timeout: 1200, callback: () => {
	                if(pRouter == 'appointmentService'){
	                	vm.$router.push({
				          	path: '/login',
				          	query: {'formType':'appointmentService'}
				        });
	                }else{
	                	vm.$router.push('/login');
	                }
              	}});
            }
    	}else{
    		vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    	}
    })
}

/**
 * 完善个人信息接口
 *
 */
const wxPerfectUserInfo = (vm,opt) => {
	vm.$dialog.loading.open('保存中...');
    vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.BTN_PAGE_PERFECTINFO_SAVE_APPLY});
	ajax
    .post(window.baseUrl+window.appName+'/shopapi/func/appoint/wxPerfectUserInfo?shopsid='+window.shopsid,opt)
    .then(result => {
    	vm.$dialog.loading.close(); 
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_PERFECTINFO_SAVE_APPLY_OK});
    	vm.$dialog.toast({
	        mes: '保存成功',
	        timeout: 1000,
	        icon: 'success',
	        callback: () => {
	          vm.$router.replace('/appointmentService');
	        }
	    });
    })
    .catch(err => {
    	vm.$dialog.loading.close();
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_PERFECTINFO_SAVE_APPLY_FAIL});
    	vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    })
}

/**
 * 添加预约
 *
 */
const wxAddAppoint = (vm,callcackF,opt) => {
    vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.BTN_PAGE_APPOINTMENTSERVICE_SAVE_APPLY});
    vm.$dialog.loading.open('保存中...');
    ajax
    .post(window.baseUrl+window.appName+'/shopapi/func/appoint/wxAddAppoint?shopsid='+window.shopsid,opt)
    .then(result => {
        vm.$dialog.loading.close();
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_APPOINTMENTSERVICE_SAVE_APPLY_OK});
        callcackF();
    })
    .catch((err,errorCode) => {
        vm.$dialog.loading.close();
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_APPOINTMENTSERVICE_SAVE_APPLY_FAIL});
        if(errorCode){
            if(errorCode == "APPOINT_FULL"){
              this.$dialog.notify({mes: data.msg, icon: 'error', timeout: 1500});
            }else{
              this.$dialog.notify({mes: '预约失败，请稍后再试', icon: 'error', timeout: 800});
            }
        }else{
            vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
        }
    })
}

/**
 * 重新分配SA
 *
 */
const wxSaSssignment = (vm,callcackF,opt) => {
    vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.BTN_PAGE_APPOINTRECORDDEATIL_UPDATA_APPLY});
    vm.$dialog.loading.open('请求中...');
    ajax
    .post(_baseUrl+'/shopapi/func/appoint/wxSaSssignment?shopsid='+window.shopsid,opt)
    .then(result => {
        vm.$dialog.loading.close();
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_APPOINTRECORDDEATIL_UPDATA_APPLY_OK});
        vm.$dialog.toast({
            mes: '分配成功',
            timeout: 1000,
            icon: 'success',
            callback: () => {
              callcackF();
            }
        });
    })
    .catch((err,errorCode) => {
        vm.$dialog.loading.close();
        vm.$store.dispatch('log', {account:LOGCODE.MAKEANAPPOINTMENT.MESS_PAGE_APPOINTRECORDDEATIL_UPDATA_APPLY_FAIL});
        if(errorCode){
            if(errorCode == "APPOINT_FULL"){
              this.$dialog.notify({mes: data.msg, icon: 'error', timeout: 1500});
            }else{
              this.$dialog.notify({mes: '分配失败，请稍后再试', icon: 'error', timeout: 800});
            }
        }else{
            vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
        }
    })
}

/**
 * 获取车架号位数
 *
 */
 const queryProductList = (vm,callcackF,opt,fromSource) => {
	ajax
    .post(_baseUrl+'/shopapi/func/product/queryProductList?orgCode='+window.orgCode+'&fromSource='+fromSource,opt)
    .then(result => {
    	callcackF(result);
    })
    .catch(err => {
    	vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    })
}

/**
 * 获取商品分类
 *
 */
 const findMenu = (vm,callcackF) => {
	ajax
    .post(_baseUrl+'/shopapi/func/sort/findMenu?orgCode='+window.orgCode)
    .then(result => {
    	callcackF(result);
    })
    .catch(err => {
    	vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    })
}

/**
 * 获取通用token
 *
 */
 const generateToken = (vm,callcackF,parme) => {
	ajax
    .post(_baseUrl+'/shopapi/func/common/generateToken'+parme,{})
    .then(result => {
    	callcackF(result);
    })
    .catch(err => {
    	vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    })
}

/**
 * 调研——开始调研接口
 *
 */
 const wxIsJoinSurvey = (vm,callcackF) => {
	ajax
    .post(_baseUrl+'/shopapi/func/survey/wxIsJoinSurvey?openId='+window.openId,{})
    .then(result => {
    	callcackF(result);
    })
    .catch(err => {
    	vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    })
}

/**
 * 调研——提交调研接口
 *
 */
 const wxSubmitQuestionnaire = (vm,callcackF,opt) => {
	ajax
    .post(_baseUrl+'/shopapi/func/survey/wxSubmitQuestionnaire?openId='+window.openId,opt)
    .then(result => {
    	callcackF(result);
    })
    .catch(err => {
        vm.$store.dispatch('log', {account:LOGCODE.SURVEY.MESS_PAGE_QUESTIONNAIRE_SUBMIT_APPLY_FAIL});
    	vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    })
}

/**
 * 调研——领取奖励
 *
 */
 const wxReceiveReward = (vm,callcackF,opt) => {
	ajax
    .post(_baseUrl+'/shopapi/func/survey/wxReceiveReward?openId='+window.openId+'&shopsid='+window.shopsid,opt)
    .then(result => {
    	callcackF(result);
    })
    .catch(errorCode => {
    	if(errorCode == "NO_JOIN_QUESTIONNAIRE"){
    		vm.$dialog.notify({mes: '请先参与问卷答题', icon: 'error', timeout: 1500,callback: () => {
                vm.$router.push({path: '/questionnaire'});
            }});
    	}else if(errorCode == "PHONE_ALREADY_JOIN" || errorCode =='REWARD_ALREADY_RECEIVED') {//已领取过
    		vm.$router.push({
    			path: '/surveyStatu',
    			query:{
    				statu:'1' //1=会员，已参与问卷调查并且已领取，2=已参与问卷，非会员，未领取，3=首次参与问卷，并且领取代金券
    			}
    		});
    	}else if(errorCode == 'VIPUSER_NOEXIST') {
    		vm.$router.push({
    			path: '/surveyStatu',
    			query:{
    				statu:'2' 
    			}
    		});
    	}else if(errorCode == 'NO_LOGIN'){
    		vm.$router.push({
    			path: '/surveyLogin'
    		});
    	}
    })
}
/**
 * 获取商品详情信息
 *
 */
 const getProductInfo = (vm,callcackF,opt) => {
    ajax
    .post(_baseUrl+'/shopapi/func/product/getProductInfo?orgCode='+window.orgCode,opt)
    .then(result => {
        callcackF(result);
    })
    .catch(err => {
        vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    })
}
/**
 * 获取付款详情
 *
 */
 const payOrOrderDetail = (vm,callcackF,opt) => {
    ajax
    .post(_baseUrl+'/shopapi/func/product/payOrOrderDetail?orgCode='+window.orgCode+'&shopsid='+window.shopsid,opt)
    .then(result => {
        callcackF(result);
    })
    .catch(err => {
        vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    })
}
/**
 * 获取快递信息
 *
 */
 const autoComNum = (vm,callcackF,opt) => {
    ajax
    .post("http://140.143.193.75:19730/autonumber/autoComNum?resultv2=1&text="+opt.expressNumber,{})
    .then(result => {
        console.log('autoComNum1',result);
        if(result.auto.length > 0){
             // console.log('autoComNum3',result.auto[0].comCode);
            ajax
            .post("http://140.143.193.75:19730/query?type=" + 'zhongtong' + "&postid=" + opt.expressNumber + "&temp=0.0936813354000000",{})
            .then(result => {
                console.log('autoComNum2',result);
                if(result.data.message == 'ok') {
                  callcackF(result.data.data);
                } else {
                  vm.$dialog.notify({
                    mes: result.data.message,
                    timeout: 3000,
                  });
                }
                // callcackF(result);
            })
            .catch(err => {
                vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
            })
        }
    })
    .catch(err => {
        vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
    })
}

 
/**
 * 获取付款后订单详情——dealType=2的情况
 *
 */
 const wxGetOrderInfo = (vm,callcackF,opt) => {
    ajax
    .post(_baseUrl+'/shopapi/func/product/wxGetOrderInfo?orgCode='+window.orgCode+'&shopsid='+window.shopsid,opt)
    .then(result => {
        callcackF(result);
    })
    .catch(err => {
        if(err == "LOGIN_SID_FAL_0X001" || err == "LOGIN_FAL_0x003" || err == "LOGIN_FAL_0x004" || err == "NO_LOGIN") {
            vm.$dialog.notify({mes: '登录失效，请重新登录', icon: 'error', timeout: 1200, callback: () => {
              vm.$router.push('/login');
            }});
        }else if(err == "NO_LOGIN") {
            vm.$dialog.notify({mes: '您还未登陆', icon: 'error', timeout: 1200, callback: () => {
              vm.$router.push('/login');
            }});
        }else {
            vm.$dialog.notify({mes: '网络异常，请稍后再试！', icon: 'error', timeout: 1200});
            // vm.$dialog.notify({mes: codeKeyValue[err], icon: 'error', timeout: 1200});
        }
    })
}

/**
 * 移除订单
 *
 */
 const removeOrder = (vm,callcackF,opt) => {
    ajax
    .post(_baseUrl+'/shopapi/func/product/removeOrder?orgCode='+window.orgCode+'&shopsid='+window.shopsid,opt)
    .then(result => {
        callcackF(result);
    })
    .catch(err => {
        vm.$store.dispatch('log', {account:LOGCODE.HOME.MESS_PAGE_ORDERINFO_REMOVE_APPLY_FAIL});
        if(err == "LOGIN_SID_FAL_0X001" || err == "LOGIN_FAL_0x003" || err == "LOGIN_FAL_0x004") {
            vm.$dialog.notify({mes: '登录失效，请重新登录', icon: 'error', timeout: 1200, callback: () => {
              vm.$router.push('/login');
            }});
        }else if(err == "NO_LOGIN"){
            vm.$dialog.notify({mes: '您还未登陆', icon: 'error', timeout: 1200, callback: () => {
              vm.$router.push('/login');
            }});
        }else{
            vm.$dialog.notify({mes: codeKeyValue[err], icon: 'error', timeout: 1200});
        }
    })
}

/**
 * 取消订单
 *
 */
 const cancleOrder = (vm,callcackF,opt) => {
    ajax
    .post(_baseUrl+'/shopapi/func/product/cancleOrder?orgCode='+window.orgCode+'&shopsid='+window.shopsid,opt)
    .then(result => {
        callcackF(result);
    })
    .catch(err => {
        vm.$store.dispatch('log', {account:LOGCODE.HOME.MESS_PAGE_ORDERINFO_CANCEL_APPLY_FAIL});
        if(err == "LOGIN_SID_FAL_0X001" || err == "LOGIN_FAL_0x003" || err == "LOGIN_FAL_0x004") {
            vm.$dialog.notify({mes: '登录失效，请重新登录', icon: 'error', timeout: 1200, callback: () => {
              vm.$router.push('/login');
            }});
        }else if(err == "NO_LOGIN"){
            vm.$dialog.notify({mes: '您还未登陆', icon: 'error', timeout: 1200, callback: () => {
              vm.$router.push('/login');
            }});
        }else{
            vm.$dialog.notify({mes: codeKeyValue[err], icon: 'error', timeout: 1200});
        }
    })
}

/**
 * 确认收货
 *
 */
 const confirmExpressDelivery = (vm,callcackF,opt) => {
    ajax
    .post(_baseUrl+'/shopapi/func/product/confirmExpressDelivery?orgCode='+window.orgCode+'&shopsid='+window.shopsid,opt)
    .then(result => {
        callcackF(result);
    })
    .catch(err => {
        vm.$store.dispatch('log', {account:LOGCODE.HOME.MESS_PAGE_ORDERINFO_SUBMITRECEIVING_APPLY_FAIL});
        if(err == "LOGIN_SID_FAL_0X001" || err == "LOGIN_FAL_0x003" || err == "LOGIN_FAL_0x004") {
            vm.$dialog.notify({mes: '登录失效，请重新登录', icon: 'error', timeout: 1200, callback: () => {
              vm.$router.push('/login');
            }});
        }else if(err == "NO_LOGIN"){
            vm.$dialog.notify({mes: '您还未登陆', icon: 'error', timeout: 1200, callback: () => {
              vm.$router.push('/login');
            }});
        }else{
            vm.$dialog.notify({mes: codeKeyValue[err], icon: 'error', timeout: 1200});
        }
    })
}
export default {
  wxListEmployee,
  listOrgs,
  wxGetVinLength,
  homePageList,
  displayedActivity,
  wxListCarInfo,
  rightsHomeDatas,
  wxMyCars,
  wxSetDefaultUserCar,
  wxAddUserCar,
  querySaListForDate,
  wxListCarInfo,
  wxAppointDetailInfo,
  wxUserAppoint,
  wxWorktimeForOrg,
  wxPerfectUserInfo,
  wxDelUserCar,
  wxCancleAppoint,
  wxAddAppoint,
  wxSaSssignment,
  queryProductList,
  findMenu,
  generateToken,
  wxIsJoinSurvey,
  wxReceiveReward,
  wxSubmitQuestionnaire,
  wxUserPersonalCenter,
  getProductInfo,
  payOrOrderDetail,
  autoComNum,
  wxGetOrderInfo,
  removeOrder,
  cancleOrder,
  confirmExpressDelivery
}