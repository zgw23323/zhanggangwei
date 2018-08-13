/**
 * Created by yi on 2017-01-06.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import {Confirm, Alert, Toast, Notify, Loading} from './../../components/dialog';
// 引入 axios
import axios from 'axios';
// import * as getters from './getters';

Vue.use(Vuex);

// 我的会员卡显示的 初始状态
const state = {
  'headerTitle': '',
  'cardInfo':{
    'cardNo':'卡申请中',
    'linkTo':'/vipCard'
  },
  'news': '商品',
  'vipCard':'',
  'goodsCount':0
};

var IsEmpty = function(o) {
  return ((undefined == o) || ("-" == o) || ("" == o) || (typeof o === undefined));
};

var Push = function(arr, value) {
  arr[arr["length"]] = value;
};
//商城交易跟踪对象
var YdEcomm = function() {
  var oThis = this;
      oThis.transactions = [];

  /**使用特定的值创建交易对象
  * @param orderId {String} 必填，交易订单号
  */
  oThis.addItem = function(orderId) {
    for (var _tran, _trans = oThis.transactions, i = 0; i < _trans["length"]; i++) {
      _tran = orderId == _trans[i].orderId ? _trans[i] : _tran;
    }
    return _tran;
  };

  oThis.addTrans = function(orderId, totalFee) {
    var transaction = oThis.addItem(orderId);
    if (undefined == transaction) {
      transaction = new YdEcomm.Transaction(orderId, totalFee);
      Push(oThis.transactions, transaction);
    }else {
      transaction.totalFee = totalFee;
    }
    return transaction;
  }
};
/**商城商品数据*/
YdEcomm.Item = function(orderId, sku, name, category, price, quantity) {
  var oThis = this;
  oThis.orderId = orderId;
  oThis.sku = sku;
  oThis.name = name;
  oThis.category = category;
  oThis.price = price;
  oThis.quantity = quantity;

  oThis.serialize = function() {
    return "&" + ["utmt=item", "tid=" + oThis.orderId, "ipc=" + oThis.sku , "ipn=" + oThis.name, "iva=" + oThis.category, "ipr=" + oThis.price, "iqt=" + oThis.quantity]["join"]("&utm");
  }
};
/**商城交易数据*/
YdEcomm.Transaction = function(orderId, totalFee) {
  var oThis = this;
  oThis.orderId = orderId;
  oThis.totalFee = totalFee;

  oThis.items = [];
  oThis.addItem = function(sku, name, category, price, quantity) {
    var item = oThis.getItem(sku),
      orderId = oThis.orderId;

      if (undefined == item) {
        Push(oThis.items, new YdEcomm.Item(orderId, sku, name, category, price, quantity));
      }else {
        item.orderId = orderId;
        item.sku = sku;
        item.name = name;
        item.category = category;
        item.price = price;
        item.quantity = quantity;
      }
  };

  oThis.getItem = function(sku) {
    for (var item, _items = oThis.items, i = 0; i < _items["length"]; i++) {
      item = sku == _items[i].sku ? _items[i] : item;
    }
    return item;
  };

  oThis.serialize = function() {
    return "&" + ["utmt=tran", "id=" + oThis.orderId, "to=" + oThis.totalFee]["join"]("&utmt");
  };
};

const mutations = {
  // TODO: 放置我们的状态变更函数
  UPDATE_TITLE(state, title) {
    state.headerTitle = title;
  },
  UPDATE_NEWS(state, news) {
    state.news = news;
  },
  UPDATE_CARDINFO(state, cardLabel) {//个人中心->我的会员卡   更新卡号显示状态 : 当填写申请资料后，自动变更状态为卡申请中，完成支付后将变更为卡号
    if(typeof cardLabel === 'object') {
      state.cardInfo.cardNo = cardLabel.cardNo;
      if (cardLabel.linkTo != null && cardLabel.linkTo != undefined) {
            state.cardInfo.linkTo = cardLabel.linkTo;
      }
    }else if (typeof cardLabel === 'string') {
      state.cardInfo.cardNo = cardLabel;
    }
  },
  UPDATE_VIPCARD(state,vipCard){
    state.vipCard = vipCard;
  },
  UPDATE_GoodsCount(state,goodsCount){//存放购物车数量
    state.goodsCount = goodsCount;
  }
};
/**
下面的actions主要用于模拟测试环境的微信支付场景.
*/
const actions = {
  simulationPay(context, params = {}) {
    
    Confirm({'title':'微信支付', 'mes':"正在模拟微信支付中...", 'opts':[{
        txt: '取消',
        color: false, /* false:黑色 true:绿色 或 使用颜色值 */
        //stay:true,
        callback: function () {
          var paramFunc = params.cancel;
          var paramData = 2;
          paramFunc(paramData);
        }
      },
      {
        txt: '支付',
        color: true,
        //stay:true,
        callback: function () {
          
          var paramFunc = params.func;

          var dealData = params.data;
          var paymoneytype = dealData;
          var dealtype = 1;

          console.log("dealdata typeof : ", (typeof dealData))
          if (typeof dealData == "object") {
            paymoneytype = dealData.paytype;
            dealtype = dealData.paymoneytype;
          }

          let formParam = params.forms;
          var actId = formParam.actId || "xxxx";
          //模拟微信发送的支付结果记录
          var url = window.baseUrl+window.appName+'/shopapi/func/pay/paynotify?debug=1';

          var paramData = '<xml><appid><![CDATA[wx122c017d1608c62a]]></appid><attach><![CDATA['+window.openId+'##0a1a00b55b571a80815b5ad8f8a40154##'+paymoneytype+'##'+formParam.orgCode+'##'+dealtype+'##'+actId+'##'+formParam.vipCard+']]></attach><bank_type><![CDATA[CFT]]></bank_type><cash_fee><![CDATA[100000]]></cash_fee><fee_type><![CDATA[CNY]]></fee_type><is_subscribe><![CDATA[Y]]></is_subscribe><mch_id><![CDATA[1458728102]]></mch_id><nonce_str><![CDATA[1495520330]]></nonce_str><openid><![CDATA['+window.openId+']]></openid><out_trade_no><![CDATA['+formParam.orderNo+']]></out_trade_no><result_code><![CDATA[SUCCESS]]></result_code><return_code><![CDATA[SUCCESS]]></return_code><sign><![CDATA[9ABB87074271B6E08E7FD9DF6B1BB7BC]]></sign><time_end><![CDATA[20170523141857]]></time_end><total_fee>100000</total_fee><trade_type><![CDATA[JSAPI]]></trade_type><transaction_id><![CDATA[4007452001201705232203139663]]></transaction_id></xml>';
          console.log("当前登录人的卡id是: ", state.vipCard);
            //点击支付，发送请求回调接口  withCredentials
            axios.post(url, paramData,{headers: {'Content-Type': 'application/xml'}}).then(function (response) {
              const data = response.data;

              paramFunc(paramData);
              
            }).catch(function (error) {
              console.log(error);
            });

            
          
          }        
      }
    ]});
  },
  log(context, params = {}){
    //网站商品数据
    var shopitem = params.ShopItem;
    //网站订单数据
    var orderitem = params.OrderItem;

    _maq = [];
    //商品日志字段
    if (typeof shopitem === 'object' && !IsEmpty(shopitem) && typeof shopitem != undefined) {
      _maq.push(['_ydCommItem', shopitem.itemid || "", shopitem.name || "", shopitem.price || "0", shopitem.picid || ""]);
    }
    //订单日志字段
    if (typeof orderitem === 'object' && !IsEmpty(orderitem)) {
      _maq.push(['_ydCommonOrderItem', orderitem.orderid || "", orderitem.orderno || "", orderitem.totalfee || "0"]);
    }

    (function() {
      _maq.push(['_setAccount', params.account, params.openid = window.openId, params.orgcode = window.orgCode]);
      var ma = document.createElement('script');
      ma.type = 'text/javascript';
      ma.async = true;
      if(window.profile == 'prod') {
        ma.src = ('https:' == document.location.protocol ? 'https://www.autoheader.com' : 'http://www.autoheader.com') + '/wxpay/static/js/ma.js';
      }else {//http://localhost:8888/static/js/ma.js
        // ma.src = ('https:' == document.location.protocol ? 'https://192.168.8.118' : 'http://192.168.8.118') + '/wxpay3/static/js/ma.js';
        ma.src = ('https:' == document.location.protocol ? 'https://192.168.8.118' : 'http://192.168.8.118') + '/wxpay3/static/js/ma.js';
        // ma.src = 'http://localhost:8888/static/js/ma.js';
      }
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ma, s);
    })();
  }
};

const vuexStore = new Vuex.Store({
  state,
  mutations,
  actions
});
export default vuexStore;
