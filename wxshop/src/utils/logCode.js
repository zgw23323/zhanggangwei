var LOGCODE = {
	HOME: {
		PAGE_HOME: "page_home",//商城首页
		PAGE_GOOD: "page_good",//商品列表页
		PAGE_ORDERBILL: "page_orderbill",//订单结果
		PAGE_PERSONAL: "page_personal",//个人中心
		PAGE_PAYERR: "page_payerr",//支付异常
		PAGE_COUPON: "page_coupon",//优惠券列表
		PAGE_RECARGEBILL: "page_rechargebill",//充值结果
		PAGE_RECHARGEINFO: "page_rechargeInfo",//充值详情
		PAGE_REGISTERRESULT: "page_registerResult",//会员申请成功页面
		PAGE_REGISTER_REGISTERREFERER: "page_register_registerreferer",//入会推荐人页面
		PAGE_RECHARGE_REGISTERREFERER: "page_recharge_registerreferer",//充值推荐人页面
		PAGE_SEARCH: "page_search", //搜索结果页  
		PAGE_STORE: "page_store",//门店列表
		PAGE_VIPCARD: "page_vipcard",//我的会员卡
		PAGE_EMSSTATUS: 'page_emsStatus', //快递追踪页面

		PAGE_ORDERINFO: "page_orderInfo",//订单详情页面
		BTN_PAGE_ORDERINFO_SUBMITRECEIVING_APPLY: "btn_page_orderInfo_submitReceiving_apply",//订单详情页面确认收货点击
		MESS_PAGE_ORDERINFO_SUBMITRECEIVING_APPLY_OK: "mess_page_orderInfo_submitReceiving_apply_ok",//订单详情页面确认收货成功提示
		MESS_PAGE_ORDERINFO_SUBMITRECEIVING_APPLY_FAIL: "mess_page_orderInfo_submitReceiving_apply_fail",//订单详情页面确认收货失败提示
		BTN_PAGE_ORDERINFO_REMOVE_APPLY: "btn_page_orderInfo_remove_apply",//订单详情页面删除订单点击
		MESS_PAGE_ORDERINFO_REMOVE_APPLY_OK: "mess_page_orderInfo_remove_apply_ok",//订单详情页面删除成功提示
		MESS_PAGE_ORDERINFO_REMOVE_APPLY_FAIL: "mess_page_orderInfo_remove_apply_fail",//订单详情页面删除失败提示
		BTN_PAGE_ORDERINFO_CANCEL_APPLY: "btn_page_orderInfo_cancel_apply",//订单详情页面取消订单点击
		MESS_PAGE_ORDERINFO_CANCEL_APPLY_OK: "mess_page_orderInfo_cancel_apply_ok",//订单详情页面取消成功提示
		MESS_PAGE_ORDERINFO_CANCEL_APPLY_FAIL: "mess_page_orderInfo_cancel_apply_fail",//订单详情页面取消失败提示
     	
		PAGE_DETAIL: "page_detail",//商城商品详情
		BTN_PAGE_DETAIL_BUY: "btn_page_detail_buy",//商品详情点击购买
		BTN_PAGE_DETAIL_COUPON_ADD: "btn_page_detail_coupon_add",//商品详情点击领取优惠券
		MESS_PAGE_DETAIL_COUPON_ADD_OK: "mess_page_detail_coupon_add_ok",//商品详情领取优惠券成功提示
		BTN_PAGE_DETAIL_RESERVE: "btn_page_detail_reserve",//秒杀商品预约
		MESS_PAGE_DETAIL_RESERVE_OK: "mess_page_detail_reserve_ok",//秒杀商品预约成功提示
		MESS_PAGE_DETAIL_RESERVE_FAIL: "mess_page_detail_reserve_fail",//秒杀商品预约失败提示
		BTN_PAGE_DETAIL_CART_ADD: "btn_page_detail_cart_add",//加入购物车

		PAGE_CART: "page_cart",//商城购物车
		BTN_PAGE_CART_BUY:"btn_page_cart_buy",//商城购物车点击购买
		BTN_PAGE_CART_DELETE: "btn_page_cart_delete",//购物车点击删除商品
		MESS_PAGE_CART_DELETE_OK: "mess_page_cart_delete_ok",//购物车删除商品成功提示

		PAGE_ORDERDETAILS: "page_orderdetails",//商品订单详情
		BTN_PAGE_ORDERDETAILS_PAY: "btn_page_orderdetails_pay",//订单详情页点击立即支付按钮
		BTN_PAGE_ORDERDETAILS_PAY_CANCEL: "btn_page_orderdetails_pay_cancel",//订单详情页点击取消支付按钮

		PAGE_ADDRESS: "page_address",//地址列表
		BTN_PAGE_ADDRESS_DELETE: "btn_page_address_delete",//删除地址点击事件
		MESS_PAGE_ADDRESS_DELETE_OK: "mess_page_address_delete_ok",//删除地址成功提示

		PAGE_ADDRESSADD: "page_addressadd",//添加地址页面
		BTN_PAGE_ADDRESSADD_SAVE: "btn_page_addressadd_save",//新增地址页面点击保存按钮
		MESS_PAGE_ADDRESSADD_SAVE_OK: "mess_page_addressadd_ok",//新增地址保存地址成功提示

		PAGE_COUPONDETAIL: "page_couponDetail",//优惠券详情页面
		BTN_PAGE_COUPONDETAIL_COUPON_ADD: "btn_page_couponDetail_coupon_add",//优惠券详情页点击领取优惠券按钮
		MESS_PAGE_COUPONDETAIL_COUPON_ADD_OK: "mess_page_couponDetail_coupon_add_ok",//优惠券详情页领取优惠券成功提示
		MESS_PAGE_COUPONDETAIL_COUPON_ADD_FAIL: "mess_page_couponDetail_coupon_add_fail",//优惠券详情页领取优惠券失败提示

		PAGE_LOGIN: "page_login",//登录页面
		BTN_PAGE_LOGIN_SAVE: "btn_page_login_save",//点击登录按钮
		MESS_PAGE_LOGIN_OK: "mess_page_login_ok",//登录成功提示
		MESS_PAGE_LOGIN_FAIL: "mess_page_login_fail",//登录失败提示

		PAGE_MODIFY: "page_modify",//个人资料页面
		BTN_PAGE_MODIFY_SAVE: 'btn_page_modify_save',//点击保存个人资料按钮
		MESS_PAGE_MODIFY_SAVE_OK: "mess_page_modify_save_ok",//保存个人资料成功提示
		MESS_PAGE_MODIFY_SAVE_FAIL: "mess_page_modify_save_fail",//保存个人资料失败提示

		PAGE_MSGBOUND: "page_msgbound",//登录页面
		BTN_PAGE_MSGBOUND_SAVE: "btn_page_msgbound_save",//点击登录按钮
		MESS_PAGE_MSGBOUND_SAVE_OK: "mess_page_msgbound_ok",//登录成功提示
		MESS_PAGE_MSGBOUND_SAVE_FAIL: "mess_page_msgbound_fail",//登录失败提示

		PAGE_OBLIGATIONS: "page_obligations",//待付款页面
		MESS_PAGE_OBLIGATIONS_CANCLEORDER_OK: "mess_page_obligations_cancleorder_ok",//取消订单成功提示
		MESS_PAGE_OBLIGATIONS_REMOVEORDER_OK: "mess_page_obligations_removeorder_ok",//删除订单成功提示
 
		PAGE_RECHARGE: "page_recharge",//充值页面
		MESS_PAGE_RECHARGE_PAY_OK: "mess_page_recharge_pay_ok",//充值成功提示
		MESS_PAGE_RECHARGE_PAY_PREF: "mess_page_recharge_pay_pref",//请求服务器获取微信支付需要相关参数
		MESS_PAGE_RECHARGE_PAY_CONFIG_EX:"mess_page_recharge_pay_config_ex",//请求服务器获取微信支付需要相关参数异常
		MESS_PAGE_RECHARGE_PAY_CANCEL_OK: "mess_page_recharge_pay_cancel_ok",//取消支付成功提示
		MESS_PAGE_RECHARGE_PAY_CANCEL_EX: "mess_page_recharge_pay_cancel_ex",//取消支付异常提示
		MESS_PAGE_RECHARGE_PAY_CANCEL_PREF: "mess_page_recharge_pay_cancel_pref",//调用微信支付（弹窗支付）取消
		
		PAGE_REGISTER: "page_register",//注册页面
		BTN_PAGE_REGISTER_SAVE: "btn_page_register_save",//点击注册保存按钮
		MESS_PAGE_REGISTER_SAVE_OK: "mess_page_register_save_ok",//注册保存成功提示
		MESS_PAGE_REGISTER_SAVE_FAIL: "mess_page_register_save_fail",//注册保存失败提示
		BTN_SENDCODE_GET: "btn_sendcode_get",//点击获取验证码按钮
		MESS_SENDCODE_GET_OK: "mess_cendcode_get_ok",//获取验证码成功提示
		MESS_SENDCODE_GET_FAIL: "mess_cendcode_get_fail"//获取验证码失败提示
	},

	SERVICE: {
		PAGE_SERVICEHOME: "page_serviceHome",//权益服务中心页面
		PAGE_CONTRACT: "page_contract",//家庭律师——合同审查页面
		PAGE_DRIVINGLICENSESUBMIT: "page_drivingLicenseSubmit",//国际驾照/认证件 —— 提交信息页面
		PAGE_MEDICALASSISTANTSUBMIT: "page_medicalAssistantSubmit",//就医帮手 —— 提交信息页面
		PAGE_HOSPITAL: "page_hospital",//就医帮手 ——选择医院页面
		PAGE_MAINTAINSUBMIT: "page_maintainSubmit",//保养取送车 —— 提交信息页面
		PAGE_SERVICEDETAIL: "page_serviceDetail",//权益服务——商品详情页
		PAGE_SERVICEINFO: "page_serviceInfo",//权益服务——服务信息页
		PAGE_SERVICECITY: "page_serviceCity",//权益服务——选择城市页面
		PAGE_VIPAPPLY: "page_vipApply",//权益服务会员申请
		PAGE_VIPROOMDETAIL: "page_vipRoomDetail",//高铁贵宾厅服务网点
		PAGE_GLAGGSUPPORT: "page_glassSupport",//预约玻璃保修服务页面
		PAGE_GLAGGSUPPORTEDIT: "page_glassSupportEdit",//预约修改玻璃保修服务页面
		BTN_PAGE_CONTRACT_SAVE: "btn_page_contract_save",//家庭律师——合同审查页面点击保存按钮
		BTN_PAGE_DRIVINGLICENSESUBMIT_SAVE: "btn_page_drivingLicenseSubmit_save",//国际驾照/认证件 —— 提交信息页面点击保存按钮
		BTN_PAGE_MAINTAINSUBMIT_SAVE: "btn_page_maintainSubmit_save",//保养取送车 —— 提交信息页面点击保存按钮
		BTN_PAGE_SERVICEDETAIL_USERINFO_SAVE: "btn_page_serviceDetail_save_userInfo",//权益服务——商品详情页保存用户信息按钮
		BTN_PAGE_SERVICEDETAIL_USERINFO_GET: "btn_page_serviceDetail_get_userInfo",//权益服务——商品详情页获取用户信息按钮
		BTN_PAGE_SERVICEDETAIL_BUY: "btn_page_serviceDetail_buy",//权益服务——商品详情页点击立即购买按钮
		BTN_PAGE_MEDICALASSISTANTSUBMIT_SAVE: "btn_page_medicalAssistantSubmit_save",//就医帮手 —— 提交信息页面点击保存按钮
		BTN_PAGE_VIPAPPLY_SAVE: "btn_page_vipApply_save",//权益服务会员申请点击立即申请按钮
		BTN_PAGE_SERVICEHOME_VIPCART_STATUS_1: "btn_page_serviceHome_vipCart_status_1",//权益服务首页用户当前身份状态——我的会员卡
		BTN_PAGE_SERVICEHOME_VIPCART_STATUS_2: "btn_page_serviceHome_vipCart_status_2",//权益服务首页用户当前身份状态——激活会员身份
		BTN_PAGE_SERVICEHOME_VIPCART_STATUS_3: "btn_page_serviceHome_vipCart_status_3",//权益服务首页用户当前身份状态——领取会员卡
		BTN_PAGE_GLAGGSUPPORT_SAVE: "btn_page_glassSupport_save",//预约玻璃保修服务页面——点击保存按钮
		BTN_PAGE_GLAGGSUPPORTEDIT_UPDATE: "btn_page_glassSupportEdit_update",//玻璃保修服务页面——点击更新按钮
		BTN_PAGE_GLAGGSUPPORTEDIT_SAVE: "btn_page_glassSupportEdit_save",//修改预约玻璃保障服务页面——点击保存按钮
		BTN_PAGE_GLAGGSUPPORTEDIT_CANCEL: "btn_page_glassSupportEdit_cancel",//修改预约玻璃保障服务页面——取消预约按钮
		BTN_PAGE_SERVICEHOME_VIOLATIONQUERY: "btn_page_serviceHome_violationQuery",//违章查询点击

		MESS_PAGE_CONTRACT_APPLY_OK: "mess_page_contract_apply_ok",//家庭律师——合同审查页面点击保存按钮成功提示
		MESS_PAGE_DRIVINGLICENSESUBMIT_APPLY_OK: "mess_page_drivingLicenseSubmit_apply_ok",//国际驾照/认证件 —— 提交信息页面点击保存按钮成功提示
		MESS_PAGE_MAINTAINSUBMIT_APPLY_OK: "mess_page_maintainSubmit_apply_ok",//保养取送车 —— 提交信息页面点击保存按钮成功提示
		MESS_PAGE_VIPAPPLR_OK: "mess_page_vipApply_ok",//权益服务会员申请——成功提示
		MESS_PAGE_VIPROOMDETAILADD_OK: "mess_page_vipRoomDetailAdd_ok",//高铁贵宾厅服务网点——领取服务成功提示
		MESS_PAGE_VIPROOMDETAILADD_FAIL: "mess_page_vipRoomDetailAdd_fail",//高铁贵宾厅服务网点——领取服务失败提示
		MESS_PAGE_MEDICALASSISTANTSUBMIT_APPLY_OK: "mess_page_medicalAssistantSubmit_apply_ok",//就医帮手 —— 提交信息页面点击保存按钮成功提示
		MESS_PAGE_MEDICALASSISTANTSUBMIT_APPLY_FAIL: "mess_page_medicalAssistantSubmit_apply_fail",//就医帮手 —— 提交信息页面点击失败按钮
		MESS_PAGE_GLAGGSUPPORT_SAVE_OK: "mess_page_glassSupport_save_OK",//预约玻璃保修服务页面——点击保存按钮成功提示
		MESS_PAGE_GLAGGSUPPORT_SAVE_FAIL: "mess_page_glassSupport_save_fail",//预约玻璃保修服务页面——点击保存按钮失败提示
		MESS_PAGE_GLAGGSUPPORTEDIT_SAVE_OK: "mess_page_glassSupportEdit_save_ok",//预约修改玻璃保修服务页面——点击保存按钮成功提示
		MESS_PAGE_GLAGGSUPPORTEDIT_SAVE_FAIL: "mess_page_glassSupportEdit_save_fail",//预约修改玻璃保修服务页面——点击保存按钮失败提示
		MESS_PAGE_GLAGGSUPPORTEDIT_CANCEL_OK: "mess_page_glassSupportEdit_cancel_ok",//预约修改玻璃保修服务页面——点击取消预约按钮成功提示
		MESS_PAGE_GLAGGSUPPORTEDIT_CANCEL_FAIL: "mess_page_glassSupportEdit_cancel_fail",//预约修改玻璃保修服务页面——点击取消预约按钮失败提示
	},

	WORKERPASS: {
		PAGE_APPLYRESULT: 'page_applyResult',//工作台——查看申请详情页面
		PAGE_APPOINTMENTBUY: 'page_appointmentBuy',//工作台——填写预约购买信息
		PAGE_CARLIST: 'page_carList',//玻璃保障服务开单——选择车系列表
		PAGE_GLASSCLAIM: 'page_glassClaim',//玻璃保障服务维修页面
		PAGE_GLASSOPENORDER: 'page_glassOpenOrder',//玻璃保障服务开单
		PAGE_INFOPUSHAPPLY: 'page_infoPushApply',//工作台主页面
		PAGE_SEACHRECORD: 'page_seachRecord',//玻璃保修服务列表页面
		PAGE_SERVICESTORE: 'page_serviceStore',//玻璃保障服务开单——选择门店列表
		PAGE_WORKERINFO: 'page_workerInfo',//工作台——个人信息页面
		PAGE_WORKERLOOKINFO: 'page_workerLookInfo',//工作台——服务权限页面
		PAGE_STOREACCOUNTING: 'page_storeAccounting',//门店财务——玻璃保障开单列表页
		PAGE_STOREACCOUNTDETAIL: 'page_storeAccounDetail',//门店财务——玻璃保障开单详情页
		PAGE_INFOCODE: 'page_infoCode',//工作台——服务权限个人二维码页面

		BTN_PAGE_APPLYRESULT_APPLY: 'btn_page_applyResult_apply',//申请服务——申请开通按钮
		BTN_PAGE_APPLYRESULT_CANCEL_APPLY: 'btn_page_applyResult_cancel_apply',//申请服务——取消申请按钮
		BTN_PAGE_APPOINTMENTBUY_SAVE: 'btn_page_appointmentBuy_save',//工作台——填写预约购买信息点击保存按钮
		BTN_PAGE_GLASSCLAIM_SAVE: 'btn_page_glassClaim_save',//玻璃保障服务维修页面——点击保存按钮
		BTN_PAGE_GLASSOPENORDER_SAVE: 'btn_page_glassOpenOrder_save',//玻璃保障服务开单——点击保存按钮
		BTN_PAGE_INFOPUSHAPPLY_APPLY_SAVE: 'btn_page_infoPushApply_apply_save',//工作台首次进入——申请开通按钮
		BTN_PAGE_INFOPUSHAPPLY_APPLY_UNBIND: 'btn_page_infoPushApply_apply_unbind',//工作台首次进入——申请取消绑定按钮
		BTN_PAGE_SEACHRECORD_SEARCH: 'btn_page_seachRecord_search',//玻璃保修服务列表——点击搜索按钮
		BTN_PAGE_STOREACCOUNTDETAIL_SUBMIT: 'btn_page_storeAccounDetail_submit',//门店财务——玻璃保障开单详情页点击确认收款按钮
		BTN_PAGE_INFOCODE_SUBMIT: 'btn_page_infoCode_submit',//工作台——服务权限个人二维码页面申请二维码按钮

		MESS_PAGE_APPLYRESULT_APPLY_OK: 'mess_page_applyResult_apply_ok',//申请服务——申请开通按钮成功提示
		MESS_PAGE_APPLYRESULT_APPLY_FAIL: 'mess_page_applyResult_apply_fail',//申请服务——申请开通按钮失败提示
		MESS_PAGE_APPLYRESULT_CANCEL_APPLY_OK: 'mess_page_applyResult_cancel_apply_ok',//申请服务——取消申请开通成功提示
		MESS_PAGE_APPLYRESULT_CANCEL_APPLY_FAIL: 'mess_page_applyResult_cancel_apply_fail',//申请服务——取消申请开通失败提示
		MESS_PAGE_APPOINTMENTBUY_SAVE_OK: 'mess_page_appointmentBuy_save_ok',//工作台——填写预约购买信息点击保存按钮成功提示
		MESS_PAGE_APPOINTMENTBUY_SAVE_FAIL: 'mess_page_appointmentBuy_save_fail',//工作台——填写预约购买信息点击保存按钮失败提示
		MESS_PAGE_GLASSCLAIM_SAVE_OK: 'mess_page_glassClaim_save_ok',//玻璃保障服务维修页面——点击保存按钮成功提示
		MESS_PAGE_GLASSCLAIM_SAVE_FAIL: 'mess_page_glassClaim_save_fail',//玻璃保障服务维修页面——点击保存按钮失败提示
		MESS_PAGE_GLASSOPENORDER_SAVE_OK: 'mess_page_glassOpenOrder_save_ok',//玻璃保障服务开单——点击保存按钮成功提示
		MESS_PAGE_GLASSOPENORDER_SAVE_FAIL: 'mess_page_glassOpenOrder_save_fail',//玻璃保障服务开单——点击保存按钮失败提示
		MESS_PAGE_INFOPUSHAPPLY_APPLY_SAVE_OK: 'mess_page_infoPushApply_apply_save_ok',//工作台首次进入——申请开通按钮成功提示
		MESS_PAGE_INFOPUSHAPPLY_APPLY_SAVE_FAIL: 'mess_page_infoPushApply_apply_save_fail',//工作台首次进入——申请开通按钮失败提示
		MESS_PAGE_INFOPUSHAPPLY_APPLY_UNBIND_OK: 'mess_page_infoPushApply_apply_unbind_ok',//工作台——申请解绑成功提示
		MESS_PAGE_INFOPUSHAPPLY_APPLY_UNBIND_FAIL: 'mess_page_infoPushApply_apply_unbind_fail',//工作台——申请解绑失败提示
		MESS_PAGE_SEACHRECORD_SEARCH_OK: 'mess_page_seachRecord_search_ok',//玻璃保修服务列表——点击搜索按钮成功提示
		MESS_PAGE_SEACHRECORD_SEARCH_FAIL: 'mess_page_seachRecord_search_fail',//玻璃保修服务列表——点击搜索按钮失败提示
		MESS_PAGE_STOREACCOUNTDETAIL_SUBMIT_FAIL: 'mess_page_storeAccounDetail_submit_fail',//门店财务——玻璃保障开单详情页点击确认收款按钮失败提示
		MESS_PAGE_STOREACCOUNTDETAIL_SUBMIT_OK: 'mess_page_storeAccounDetail_submit_ok',//门店财务——玻璃保障开单详情页点击确认收款按钮成功提示
		MESS_PAGE_INFOCODE_SUBMIT_OK: 'mess_page_infoCode_submit_ok',//工作台——服务权限个人二维码页面申请二维码按钮成功提示
		MESS_PAGE_INFOCODE_SUBMIT_FAIL: 'mess_page_infoCode_submit_fail'//工作台——服务权限个人二维码页面申请二维码按钮失败提示
	},

	ACTION: {
		PAGE_WXACTION: "page_wxaction", //有道十五载 感恩会员情活动页面
		BTN_PAGE_ACTION_GO_RECHARGE: "btn_page_action_go_recharge",//有道十五载 感恩会员情活动页面点击去充值
		PAGE_ACTIONLOGIN: "page_actionLogin",//春节送温暖活动登录页
		PAGE_ACTIONORDERINFO: "page_actionOrderInfo",//春节送温暖活动抢购成功页
		PAGE_ACTIONPRODUCT: "page_actionProduct",//春节送温暖活动主页
		PAGE_ACTIONPRODUCTDETAIL: "page_actionProductDetail",//送温暖活动商品详情页
		PAGE_SCANCODE:'page_scanCode',//春节送温暖扫码页

		BTN_PAGE_ACTIONLOGIN_APPLY: "btn_page_actionLogin_apply",//春节送温暖活动登录页点击登录按钮
		BTN_PAGE_ACTIONPRODUCTDETAIL_PAY: "btn_page_actionProductDetail_pay",//送温暖活动商品详情页点击支付
		BTN_PAGE_ACTIONPRODUCTDETAIL_PAY_CANCEL: "btn_page_actionProductDetail_pay_cancel",//送温暖活动商品详情页点击取消支付

		MESS_PAGE_ACTIONLOGIN_APPLY_OK: "mess_page_actionLogin_apply_ok",//春节送温暖活动登录页点击登录成功提示
		MESS_PAGE_ACTIONLOGIN_APPLY_FAIL: "mess_page_actionLogin_apply_fail",//春节送温暖活动登录页点击登录失败提示
	},

	MAKEANAPPOINTMENT: {
		PAGE_APPOINTMENTSERVICE: "page_appointmentService",//预约首页
		PAGE_APPOINTMENTStore: "page_appointmentStore",//预约选择门店页面
		PAGE_APPOINTMENTTime: "page_appointmentTime",//预约选择时间段页面
		PAGE_BUTTPERSONNEL: "page_buttPersonnel",//现在工作人员界面
		PAGE_APPOINTRECORDDEATIL: "page_appointRecordDetail",//预约成功详情界面
		PAGE_ADDCAR: "page_addCar",//添加我的车辆
		PAGE_APPOINTMENTMESSAGE: "page_appointmentMessage",//预约成功后跳入详情界面
		PAGE_CARLIST: "page_carList",//车牌车系列表页面
		PAGE_EVALUATE: "page_evalute",//预约评论界面
		PAGE_MYCAR: "page_myCar",//我的车辆
		PAGE_PERFECTINFO: "page_perfectInfo",//完善个人信息界面
		PAGE_RECEIVEMESSAGE: "page_receiveMessage", //用户取消预约通知界面

		BTN_PAGE_ADDCAR_SAVE_APPLY: "btn_page_addCar_save_apply", //添加车辆——点击保存按钮
		BTN_PAGE_APPOINTMENTSERVICE_SAVE_APPLY: "btn_page_appointmentService_save_apply", //预约申请界面——点击预约按钮
		BTN_PAGE_APPOINTRECORDDEATIL_DELETE_APPLY: "btn_page_appointRecordDetail_delete_apply", //预约详情界面——点击取消预约按钮
		BTN_PAGE_MYCAR_DEFAULT_APPLY: "btn_page_myCar_default_apply", //我的车辆界面——点击设为默认按钮
		BTN_PAGE_MYCAR_DELETE_APPLY: "btn_page_myCar_delete_apply", //我的车辆界面——点击删除车辆按钮
		BTN_PAGE_PERFECTINFO_SAVE_APPLY: "btn_page_perfectInfo_save_apply", //完善个人信息界面——点击保存按钮
		BTN_PAGE_APPOINTRECORDDEATIL_UPDATA_APPLY: "btn_page_appointRecordDetail_updata_apply", //预约详情界面——重新分配SA确定按钮

		MESS_PAGE_ADDCAR_SAVE_APPLY_OK: "mess_page_addCar_save_apply_ok", //添加车辆——保存成功
		MESS_PAGE_ADDCAR_SAVE_APPLY_FAIL: "mess_page_addCar_save_apply_fail", //添加车辆——保存失败
		MESS_PAGE_APPOINTMENTSERVICE_SAVE_APPLY_OK: "mess_page_appointmentService_save_apply_ok",//预约申请界面——预约成功
		MESS_PAGE_APPOINTMENTSERVICE_SAVE_APPLY_FAIL: "mess_page_appointmentService_save_apply_fail",//预约申请界面——预约失败
		MESS_PAGE_APPOINTRECORDDEATIL_DELETE_APPLY_OK: "mess_page_appointRecordDetail_delete_apply_ok", //预约详情界面——取消预约成功
		MESS_PAGE_APPOINTRECORDDEATIL_DELETE_APPLY_FAIL: "mess_page_appointRecordDetail_delete_apply_fail", //预约详情界面——取消预约失败
		MESS_PAGE_MYCAR_DEFAULT_APPLY_OK: "mess_page_myCar_default_apply_ok", //我的车辆界面——设为默认车辆成功
		MESS_PAGE_MYCAR_DEFAULT_APPLY_FAIL: "mess_page_myCar_default_apply_fail", //我的车辆界面——设为默认失败
		MESS_PAGE_MYCAR_DELETE_APPLY_OK: "mess_page_myCar_delete_apply_ok", //我的车辆界面——删除车辆成功
		MESS_PAGE_MYCAR_DELETE_APPLY_FAIL: "mess_page_myCar_delete_apply_fail", //我的车辆界面——删除车辆失败
		MESS_PAGE_PERFECTINFO_SAVE_APPLY_OK: "mess_page_perfectInfo_save_apply_ok", //完善个人信息界面——保存成功
		MESS_PAGE_PERFECTINFO_SAVE_APPLY_FAIL: "mess_page_perfectInfo_save_apply_fail", //完善个人信息界面——保存失败
		MESS_PAGE_APPOINTRECORDDEATIL_UPDATA_APPLY_OK: "mess_page_appointRecordDetail_updata_apply_ok", //预约详情界面——重新分配SA成功
		MESS_PAGE_APPOINTRECORDDEATIL_UPDATA_APPLY_FAIL: "mess_page_appointRecordDetail_updata_apply_fail" //预约详情界面——重新分配SA失败
	},

	INTERACTION: {
		PAGE_ANSWERQUESTIONONE: "page_answerQuestionOne",//问答模块回答问题-第一步页面
		PAGE_INTERACTIONDETAIL: "page_interactionDetail",//问答模块-互动详情页
		PAGE_INTERACTIONHOME: "page_interactionHome",//问答模块主页面
		PAGE_MAINTAINPARTS: "page_maintainParts",//问答模块——选择保养配件页面
		PAGE_MASTERWORKER: "page_masterWorker",//问答模块——选择师傅页面
		PAGE_QUESTION: "page_question",//问答模块——提问页面
		PAGE_QUESTIONARTICLE: "page_questionArticle",//问答模块——文章页面
		PAGE_QUESTIONARTICLEDETAIL: "page_questionArticleDetail",//问答模块——文章详情页面
		PAGE_QUESTIONDEATIL: "page_questionDetail",//问答模块——问答详情页面
		PAGE_QUESTIONHOT: "page_questionHot",//问答模块——热门问题界面
		PAGE_ARIDERSARTICLE: "page_raidersArticle",//问答模块——用车攻略界面
		PAGE_RAIDERSARTICLEDETAIL: "page_raidersArticleDetail",//问答模块——用车攻略文章界面
		PAGE_TAGS: "page_tags",//问答模块——选择标签界面

		BTN_PAGE_QUESTION_APPLY: "btn_page_question_apply",//问答提问界面——点击提交按钮
		BTN_PAGE_MASTERWORKER_SEARCH: "btn_page_masterWorker_search",//问答模块——选择师傅页面点击搜索按钮
		BTN_PAGE_RAIDERSARTICLEDETAIL_REPORT_APPLY: "btn_page_raidersArticleDetail_report_apply",//问答模块——攻略文章详情点击上报问题按钮
		BTN_PAGE_RAIDERSARTICLEDETAIL_REPORT_CANCEL: "btn_page_raidersArticleDetail_report_cancel",//问答模块——攻略文章详情点击取消上报问题按钮
		BTN_PAGE_INTERACTIONDETAIL_SAVE_APPLY: "btn_page_interactionDetail_save_apply",//问答模块-互动详情页点击提交互动内容按钮
		BTN_PAGE_MAINTAINPARTS_SAVE_APPLY: "btn_page_maintainParts_save_apply",//问答模块——选择保养配件页面点击完成提交按钮
		BTN_PAGE_QUESTIONDEATIL_DELETE_APPLY: "btn_page_questionDetail_delete_apply",//问题详情-点击删除问题按钮

		MESS_PAGE_INTERACTIONHOME_LOGIN_OK: "interactionHome_mess_login_ok",//问答主页登录成功提示
		MESS_PAGE_QUESTION_APPLY_OK: "mess_page_question_apply_ok", //问答提问界面——点击提交成功提示
		MESS_PAGE_MASTERWORKER_SEARCH_OK: "mess_page_masterWorker_search_ok",//问答模块——选择师傅页面点击搜索按钮成功提示
		MESS_PAGE_RAIDERSARTICLEDETAIL_REPORT_APPLY_OK: "mess_page_raidersArticleDetail_report_apply_ok",//问答模块——攻略文章详情点击上报问题成功提示
		MESS_PAGE_RAIDERSARTICLEDETAIL_REPORT_APPLY_FAIL: "mess_page_raidersArticleDetail_report_apply_fail",//问答模块——攻略文章详情点击上报问题失败提示
		MESS_PAGE_RAIDERSARTICLEDETAIL_REPORT_CALCEL_OK: "mess_page_raidersArticleDetail_report_cancel_ok",//问答模块——攻略文章详情点击取消上报问题成功提示
		MESS_PAGE_RAIDERSARTICLEDETAIL_REPORT_CANCEL_FAIL: "mess_page_raidersArticleDetail_report_cancel_fail",//问答模块——攻略文章详情点击取消上报问题失败提示
		MESS_PAGE_INTERACTIONDETAIL_SAVE_APPLY_OK: "mess_page_interactionDetail_save_apply_ok",//问答模块-互动详情页点击提交互动内容成功提示
		MESS_PAGE_INTERACTIONDETAIL_SAVE_APPLY_FAIL: "mess_page_interactionDetail_save_apply_fail",//问答模块-互动详情页点击提交互动内容失败提示
		MESS_PAGE_MAINTAINPARTS_SAVE_APPLY_OK: "mess_page_maintainParts_save_apply_ok",//问答模块——选择保养配件页面点击完成提交成功提示
		MESS_PAGE_MAINTAINPARTS_SAVE_APPLY_FAIL: "mess_maintainParts_save_apply_fail",//问答模块——选择保养配件页面点击完成提交失败提示
		MESS_PAGE_QUESTIONDEATIL_DELETE_APPLY_OK: "mess_page_questionDetail_delete_apply_ok",//问题详情-点击删除问题成功提示
		MESS_PAGE_QUESTIONDEATIL_DELETE_APPLY_FAIL: "mess_page_questionDetail_delete_apply_fail",//问题详情-点击删除问题失败提示
		MESS_PAGE_QUESTION_APPLY_FAIL: "mess_page_question_apply_fail" //问答提问界面——点击提交失败提示
	},

	SURVEY: {
		PAGE_SURVEYINDEX: 'page_surveyIndex',//调研——主页
		PAGE_SURVEYLOGIN: 'page_surveyLogin',//调研——登录页面
		PAGE_QUESTIONNAIRE: 'page_questionnaire',//调用——代步车调研问卷页面
		PAGE_SURVEYSTATU: 'page_surveyStatu',//调研——代步车调研问卷答题参与状态界面
		PAGE_SURVEYSTORE: 'page_surveyStore',//调研——选择门店界面

		BTN_PAGE_SURVEYINDEX_APPLY: 'btn_page_surveyIndex_apply', //调研——调研主页点击开始调研按钮
		BTN_PAGE_QUESTIONNAIRE_SUBMIT_APPLY: 'btn_page_questionnaire_submit_apply', //调研——代步车调研问卷点击提交按钮
		MESS_PAGE_QUESTIONNAIRE_SUBMIT_APPLY_OK: 'mess_page_questionnaire_submit_apply_ok', //调研——代步车调研问卷点击提交成功提示
		MESS_PAGE_QUESTIONNAIRE_SUBMIT_APPLY_FAIL: 'mess_page_questionnaire_submit_apply_fail', //调研——代步车调研问卷点击提交失败提示

		BTN_PAGE_SURVEYLOGIN_SUBMIT_APPLY: 'btn_page_surveyLogin_submit_apply',// 调研——登录页面点击登录按钮
		MESS_PAGE_SURVEYLOGIN_SUBMIT_APPLY_OK: 'mess_page_surveyLogin_submit_apply_ok',// 调研——登录页面点击登录成功提示
		MESS_PAGE_SURVEYLOGIN_SUBMIT_APPLY_FAIL: 'mess_page_surveyLogin_submit_apply_fail',// 调研——登录页面点击登录成功提示
	}
};

export {
  LOGCODE
};