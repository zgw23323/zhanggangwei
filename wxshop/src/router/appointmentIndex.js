
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
 
// import AppointmentService from '../pages/makeAnAppointment/appointmentService.vue'
// import AppointmentStore from '../pages/makeAnAppointment/appointmentStore.vue'
// import AppointRecordDetail from '../pages/makeAnAppointment/appointRecordDetail.vue'
// import AppointmentTime from '../pages/makeAnAppointment/appointmentTime.vue'
// import ButtPersonnel from '../pages/makeAnAppointment/buttPersonnel.vue'
// import MyCar from '../pages/makeAnAppointment/myCar.vue'
// import Evaluate from '../pages/makeAnAppointment/evaluate.vue'
// import PerfectInfo from '../pages/makeAnAppointment/perfectInfo.vue'
// import ReceiveMessage from '../pages/makeAnAppointment/receiveMessage.vue'
// import AddCar from '../pages/makeAnAppointment/addCar.vue'
// import AppointmentMessage from '../pages/makeAnAppointment/appointmentMessage.vue'
// import CarList from '../pages/makeAnAppointment/carList.vue'
// import Login from '../pages/Login.vue'

Vue.use(VueRouter);
Vue.use(VueTouch);
Vue.use(VueInfiniteScroll);

Vue.use(VueLazyload, {
  try: 1 // default 1
});


// 输出router
export default new VueRouter({
  routes:[
    { 
      path: '/', 
      redirect: '/appointmentService'
    },
    { 
      path: '/appointmentService', 
      component: resolve => require(['../pages/makeAnAppointment/appointmentService.vue'],resolve)
    },
    { 
      path: '/appointmentStore', 
      component: resolve => require(['../pages/makeAnAppointment/appointmentStore.vue'],resolve)
    },
    { 
      path: '/appointRecordDetail', 
      component: resolve => require(['../pages/makeAnAppointment/appointRecordDetail.vue'],resolve)
    },
    { 
      path: '/appointmentTime', 
      component: resolve => require(['../pages/makeAnAppointment/appointmentTime.vue'],resolve)
    },
    { 
      path: '/myCar', 
      component: resolve => require(['../pages/makeAnAppointment/myCar.vue'],resolve)
    },
    { 
      path: '/buttPersonnel', 
      component: resolve => require(['../pages/makeAnAppointment/buttPersonnel.vue'],resolve)
    },
    { 
      path: '/perfectInfo', 
      component: resolve => require(['../pages/makeAnAppointment/perfectInfo.vue'],resolve)
    },
    { 
      path: '/evaluate', 
      component: resolve => require(['../pages/makeAnAppointment/evaluate.vue'],resolve)
    },
    { 
      path: '/appointmentMessage', 
      component: resolve => require(['../pages/makeAnAppointment/appointmentMessage.vue'],resolve)
    },
    { 
      path: '/carList', 
      component: resolve => require(['../pages/makeAnAppointment/carList.vue'],resolve)
    },
    { 
      path: '/addCar', 
      component: resolve => require(['../pages/makeAnAppointment/addCar.vue'],resolve)
    },
    { 
      path: '/login', 
      component: resolve => require(['../pages/Login.vue'],resolve) 
    }
  ]
});
 