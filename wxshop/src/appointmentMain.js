import 'vue-ydui/dist/ydui.base.css';

import './styles/base.less';
import './styles/common/appointment.less'
import Vue from 'vue'
import App from './appointmentApp'
import router from './router/appointmentIndex'
import $ from 'jquery'
import {DateTime} from 'vue-ydui/dist/lib.rem/datetime';
import {Popup} from 'vue-ydui/dist/lib.rem/popup';
// import {Accordion, AccordionItem} from 'vue-ydui/dist/lib.rem/accordion';
// import {LightBox, LightBoxImg, LightBoxTxt} from 'vue-ydui/dist/lib.rem/lightbox';
import VueResource from 'vue-resource'
import {Confirm, Alert, Toast, Notify, Loading} from './components/dialog';
// import {TabBar, TabBarItem} from './components/tabbar';
// import {NavBar, NavBarBackIcon, NavBarNextIcon} from './components/navbar';
import {Layout} from './components/layout';
import {Icons} from './components/icons';
import {Slider, SliderItem} from './components/slider';
// import {ListTheme, ListItem, ListOther} from './components/list';
import {InfiniteScroll} from './components/infinitescroll';
// import {CellGroup, CellItem,CellBetweenItem} from './components/cell';
// import {Badge} from './components/badge';
// import {GridsItem, GridsGroup} from './components/grids';
import {Button, ButtonGroup} from './components/button';
import {Spinner} from './components/spinner';
import {SendCode} from './components/sendcode';
import {CitySelect} from './components/cityselect';
// import {Switch} from './components/switch';
import {CountDown} from './components/countdown';
// import {ActionSheet} from './components/actionsheet';
// import {Nav} from './modules/nav';
import store from './modules/vuex/store';
import {LeftSlider} from './components/LeftSlider';
// import {Coupon,CouponItem} from './components/coupon';
// import {AlertTip,BottomTip,ImgLoadingTip,ImgBigTip,ScrollBottomFixed,ComfigTip} from './components/alertTip';
import {Keyboard} from './components/keyboard';
//import * as filters from './modules/filters/index';

import {CutArea} from './components/cutArea';


Vue.config.debug = true;

 //生产环境取消注释（）
import fundebug  from "fundebug-javascript";
//生产环境 注释
fundebug.apikey = "1b00c04c4ab6bd5a93717b5c01891d179e1feac7f93bc72faf35fa2cba1165ec";
function formatComponentName(vm)
{
  if (vm.$root === vm) return 'root';

  var name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name;
  return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '');

}

Vue.config.errorHandler = function(err, vm, info)
{
  var componentName = formatComponentName(vm);
  var propsData = vm.$options && vm.$options.propsData;

  fundebug.notifyError(err,
  {
      metaData:
      {
          componentName: componentName,
          propsData: propsData,
          info: info
      }
   });
};
// end 添加调试


Vue.use(VueResource);
// Vue.use(YDUI);

// Vue.component(TabBar.name, TabBar);
// Vue.component(TabBarItem.name, TabBarItem);
// Vue.component(NavBar.name, NavBar);
// Vue.component(NavBarBackIcon.name, NavBarBackIcon);
// Vue.component(NavBarNextIcon.name, NavBarNextIcon);
Vue.component(Layout.name, Layout);
Vue.component(Icons.name, Icons);
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);
// Vue.component(ListTheme.name, ListTheme);
// Vue.component(ListItem.name, ListItem);
// Vue.component(ListOther.name, ListOther);
Vue.component(InfiniteScroll.name, InfiniteScroll);
// Vue.component(CellGroup.name, CellGroup);
// Vue.component(CellItem.name, CellItem);
// Vue.component(CellBetweenItem.name, CellBetweenItem);
// Vue.component(Badge.name, Badge);
// Vue.component(GridsItem.name, GridsItem);
// Vue.component(GridsGroup.name, GridsGroup);
Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);
Vue.component(Spinner.name, Spinner);
Vue.component(SendCode.name, SendCode);
Vue.component(CitySelect.name, CitySelect);
// Vue.component(Switch.name, Switch);
Vue.component(CountDown.name, CountDown);
// Vue.component(ActionSheet.name, ActionSheet);//入会推荐人列表
// Vue.component(Nav.name, Nav);
Vue.component(LeftSlider.name, LeftSlider);
// Vue.component(Coupon.name, Coupon);
// Vue.component(CouponItem.name, CouponItem);
// Vue.component(AlertTip.name, AlertTip);
// Vue.component(BottomTip.name, BottomTip);
// Vue.component(ImgLoadingTip.name, ImgLoadingTip);
// Vue.component(ImgBigTip.name, ImgBigTip);
// Vue.component(ComfigTip.name, ComfigTip);
// Vue.component(ScrollBottomFixed.name, ScrollBottomFixed);
Vue.component(DateTime.name, DateTime);
Vue.component(Popup.name, Popup);
// Vue.component(Accordion.name, Accordion);
// Vue.component(AccordionItem.name, AccordionItem);
// Vue.component(LightBox.name, LightBox);
// Vue.component(LightBoxImg.name, LightBoxImg);
// Vue.component(LightBoxTxt.name, LightBoxTxt);
Vue.component(Keyboard.name, Keyboard);
Vue.component(CutArea.name, CutArea);


Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    notify: Notify,
    loading: Loading
};

Vue.http.interceptors.push(function(request, next) {//拦截器
  // 跨域携带cookie
  request.credentials = true;
  next();
});

if(typeof window !== 'undefined' && window.Vue) { 
    install(window.Vue);
}

document.addEventListener('DOMContentLoaded', function () {
  typeof FastClick == 'function' && FastClick.attach(document.body);
}, false);

window.document.addEventListener('touchstart', function (event) {
  /* Do Nothing */
}, false);

window.addEventListener('unload', function(event) {
  //navigator.sendBeacon('/collector', data);
  //console.log("这是unload事件", event);
});

const app = new Vue({
    router: router,store,
    render: v => v(App)
}).$mount('#app1');
