
// 引入路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入手势事件模块
import VueTouch from 'vue-touch'
// 引入懒加载模块
import VueLazyload from 'vue-lazyload'
// 引入滚动模块
import VueInfiniteScroll from 'vue-infinite-scroll'
// 引入页面
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import RegisterResult from '../pages/RegisterResult.vue'
import Home from '../pages/Home.vue'
import Search from '../pages/Search.vue'
import Goods from '../pages/Goods.vue'
import SortProduct from '../pages/sortProduct.vue'//分类商品列表
import Cart from '../pages/Cart.vue'
import Details from '../pages/Details.vue'
import Personal from '../pages/Personal.vue'
import OrderDetails from '../pages/OrderDetails.vue'
import OrderBill from '../pages/OrderBill.vue'
import VipCard from '../pages/VipCard.vue'
import Address from '../pages/Address.vue'
import Modify from '../pages/Modify.vue'
import AddressAdd from '../pages/AddressAdd.vue'
import Obligations from '../pages/Obligations.vue'
import Recharge from '../pages/Recharge.vue'
import RechargeBill from '../pages/RechargeBill.vue'
import PayError from '../pages/PayError.vue'
import RegisterReferrer from '../pages/RegisterReferrer.vue'
// import PerfectIinformation from '../pages/PerfectIinformation.vue'
import Store from '../pages/Store.vue'
import Coupon from '../pages/coupon.vue'
import CouponDetail from '../pages/couponDetail.vue'
import ServiceHome from '../pages/service/serviceHome.vue'
import ServicesCity from '../pages/service/servicesCity.vue'
import VipRoomDetail from '../pages/service/vipRoomDetail.vue'
import DrivingLicenseSubmit from '../pages/service/drivingLicenseSubmit.vue'
import Dontract from '../pages/service/contract.vue'
import ServiceDetail from '../pages/service/serviceDetail.vue'
import VipApply from '../pages/service/vipApply.vue'
import ConsumeDetail from '../pages/service/consumeDetail.vue'
import WxPayDemo from '../pages/wxPayDemo.vue'

import WxAction from '../pages/action/wxAction.vue'
import ScanCode from '../pages/action/scanCode.vue'
import ActionOrderInfo from '../pages/action/actionOrderInfo.vue'
import ActionProductDetail from '../pages/action/actionProductDetail.vue'
import ActionProduct from '../pages/action/actionProduct.vue'
import ActionLogin from '../pages/action/actionLogin.vue'
import SkillProduct from '../pages/action/skillProduct.vue'

import MaintainSubmit from '../pages/service/maintainSubmit.vue'
import MedicalAssistantSubmit from '../pages/service/medicalAssistantSubmit.vue'
import Hospital from '../pages/service/hospital.vue'
import ServiceInfo from '../pages/service/serviceInfo.vue'
import GlassSupport from '../pages/service/glassSupport.vue'
import RechargeInfo from '../pages/RechargeInfo.vue'

import GlassOpenOrder from '../pages/workerPass/glassOpenOrder.vue'
import GlassClaim from '../pages/workerPass/glassClaim.vue'
import InfoPushApply from '../pages/workerPass/infoPushApply.vue'
import ApplyResult from '../pages/workerPass/applyResult.vue'
import WorkerInfo from '../pages/workerPass/workerInfo.vue'
import CarList from '../pages/workerPass/carList.vue'
import AppointmentBuy from '../pages/workerPass/appointmentBuy.vue'
import SeachRecord from '../pages/workerPass/seachRecord.vue'
import ServiceStore from '../pages/workerPass/serviceStore.vue'
import GlassSupportEdit from '../pages/service/glassSupportEdit.vue'
import MyCardCoupons from '../pages/service/myCardCoupons.vue'
import WorkerLookInfo from '../pages/workerPass/workerLookInfo.vue'
import StoreAccounting from '../pages/workerPass/storeAccounting.vue'
import StoreAccounDetail from '../pages/workerPass/storeAccounDetail.vue'
import InfoCode from '../pages/workerPass/infoCode.vue'


import InteractionHome from '../pages/interaction/interactionHome.vue'
import QuestionDetail from '../pages/interaction/questionDetail.vue'
import AnswerQuestionOne from '../pages/interaction/answerQuestionOne.vue'
import MaintainParts from '../pages/interaction/maintainParts.vue'
import Question from '../pages/interaction/question.vue'
import Tags from '../pages/interaction/tags.vue'
import MasterWorker from '../pages/interaction/masterWorker.vue'
import QuestionArticle from '../pages/interaction/questionArticle.vue'
import QuestionArticleDetail from '../pages/interaction/questionArticleDetail.vue'
import RaidersArticle from '../pages/interaction/raidersArticle.vue'
import RaidersArticleDetail from '../pages/interaction/raidersArticleDetail.vue'
import QuestionHot from '../pages/interaction/questionHot.vue'
import InteractionDetail from '../pages/interaction/interactionDetail.vue'

Vue.use(VueRouter);
Vue.use(VueTouch);
Vue.use(VueInfiniteScroll);

Vue.use(VueLazyload, {
  try: 1 // default 1
});

// 记录页面位置
/*const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
};*/

// 创建路由实例并配置路由映射
const router = new VueRouter({
  /*mode: 'history',
  scrollBehavior,*/
  routes:[
    { path: '/', redirect: '/home'},
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/registerresult', component: RegisterResult },
	{ path: '/home', component: Home },
    { path: '/search', component: Search },
    { path: '/details', component: Details },
    { path: '/goods', component: Goods },
    { path: '/sortProduct', component: SortProduct },
    { path: '/cart', component: Cart },
    { path: '/personal', component: Personal },
    { path: '/orderdetails', component: OrderDetails },
    { path: '/orderbill', component: OrderBill },
    { path: '/vipCard', component: VipCard},
    { path: '/address', component: Address},
    { path: '/modify', component: Modify},
    { path: '/addressAdd', component: AddressAdd},
    { path: '/obligations', component: Obligations},
    { path: '/recharge', component: Recharge},
    { path: '/rechargebill', component: RechargeBill},
    { path: '/payerror', component: PayError},
    { path: '/referrer', component: RegisterReferrer},
    // { path: '/information', component: PerfectIinformation},
    { path: '/information', component: InfoPushApply},
    { path: '/store', component: Store},
    // { path: '/applyResult', component: applyStoreResult},
    { path: '/coupon',component: Coupon},
    { path: '/couponDetail',component: CouponDetail},
    { path: '/serviceHome',component: ServiceHome},
    { path: '/servicesCity',component: ServicesCity},
    { path: '/vipRoomDetail',component: VipRoomDetail},
    { path: '/drivingLicenseSubmit',component: DrivingLicenseSubmit},
    { path: '/contract',component: Dontract},
    { path: '/serviceDetail',component:ServiceDetail},
    { path: '/vipApply',component:VipApply},
    { path: '/wxPayDemo',component:WxPayDemo},

    { path: '/wxAction',component:WxAction},
    { path: '/scanCode',component:ScanCode},
    { path: '/actionOrderInfo',component:ActionOrderInfo},
    { path: '/actionProductDetail',component:ActionProductDetail},
    { path: '/actionProduct',component:ActionProduct},
    { path: '/actionLogin',component:ActionLogin},
    { path: '/skillProduct',component:SkillProduct},

    { path: '/maintainSubmit',component:MaintainSubmit},
    { path: '/medicalAssistantSubmit',component:MedicalAssistantSubmit},
    { path: '/hospital',component:Hospital},
    { path: '/serviceInfo',component:ServiceInfo},
    { path: '/rechargeInfo',component:RechargeInfo},
    { path: '/glassSupport',component:GlassSupport},
    { path: '/myCardCoupons',component:MyCardCoupons},
    { path: '/consumeDetail',component:ConsumeDetail},
    { path: '/glassOpenOrder',component:GlassOpenOrder},
    { path: '/glassClaim',component:GlassClaim},

    { path: '/workerInfo',component:WorkerInfo},
    { path: '/infoPushApply',component:InfoPushApply},
    { path: '/applyResult',component:ApplyResult},
    { path: '/carList',component:CarList},
    { path: '/appointmentBuy',component:AppointmentBuy},
    { path: '/seachRecord',component:SeachRecord},
    { path: '/serviceStore',component:ServiceStore},
    { path: '/glassSupportEdit',component:GlassSupportEdit},
    { path: '/workerLookInfo',component:WorkerLookInfo},
    { path: '/storeAccounting',component:StoreAccounting},
    { path: '/storeAccounDetail',component:StoreAccounDetail},
    { path: '/infoCode',component:InfoCode},

    { path: '/interactionHome',component:InteractionHome},
    { path: '/questionDetail',component:QuestionDetail},
    { path: '/answerQuestionOne',component:AnswerQuestionOne},
    { path: '/maintainParts',component:MaintainParts},
    { path: '/question',component:Question},
    { path: '/tags',component:Tags},
    { path: '/masterWorker',component:MasterWorker},
    { path: '/questionArticle',component:QuestionArticle},
    { path: '/questionArticleDetail',component:QuestionArticleDetail},
    { path: '/raidersArticle',component:RaidersArticle},
    { path: '/raidersArticleDetail',component:RaidersArticleDetail},
    { path: '/questionHot',component:QuestionHot},
    { path: '/interactionDetail',component:InteractionDetail},
    { 
      path: '/surveyIndex', 
      component: resolve => require(['../pages/survey/surveyIndex.vue'],resolve)
    },
    { 
      path: '/surveyLogin', 
      component: resolve => require(['../pages/survey/surveyLogin.vue'],resolve)
    },
    { 
      path: '/questionnaire', 
      component: resolve => require(['../pages/survey/questionnaire.vue'],resolve)
    },
    { 
      path: '/surveyStatu', 
      component: resolve => require(['../pages/survey/surveyStatu.vue'],resolve)
    },
    { 
      path: '/surveyStore', 
      component: resolve => require(['../pages/survey/surveyStore.vue'],resolve)
    },
    { 
      path: '/orderInfo', 
      component: resolve => require(['../pages/orderInfo.vue'],resolve)
    },
    { 
      path: '/emsStatus', 
      component: resolve => require(['../pages/emsStatus.vue'],resolve)
    },
    { 
      path: '/newGlassOpenOrder', 
      component: resolve => require(['../pages/workerPass/newGlassOpenOrder.vue'],resolve)
    }
  ]
});

// 输出router
export default router;
