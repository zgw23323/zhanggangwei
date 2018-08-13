const pageScroll = (function () {
    const fn = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    let islock = false;

    return {
        lock: function () {
            if (islock)return;
            islock = true;
            document.addEventListener('touchmove', fn);
        },
        unlock: function () {
            islock = false;
            document.removeEventListener('touchmove', fn);
        }
    };
})();

const isColor = function (value) {
    const colorReg = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/;
    const rgbaReg = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/;
    const rgbReg = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;

    return colorReg.test(value) || rgbaReg.test(value) || rgbReg.test(value);
};

const getScrollview = function (el) {
    let currentNode = el;
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
        let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
        if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode;
        }
        currentNode = currentNode.parentNode;
    }
    return window;
};

const checkInview = function (scrollView, el) {
    const contentHeight = scrollView == window ? document.body.offsetHeight : scrollView.offsetHeight;
    const contentTop = scrollView === window ? 0 : scrollView.getBoundingClientRect().top;

    const post = el.getBoundingClientRect().top - contentTop;
    const posb = post + el.offsetHeight;

    return (post >= 0 && post < contentHeight) || (posb > 0 && posb <= contentHeight);
};

const hasClass = function (elem, cls) {
    cls = cls || '';
    if (cls.replace(/\s/g, '').length == 0) return false;
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
};

const addClass = function (ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
    }
};

const removeClass = function (ele, cls) {
    if (hasClass(ele, cls)) {
        let newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
            newClass = newClass.replace(' ' + cls + ' ', ' ');
        }
        ele.className = newClass.replace(/^\s+|\s+$/g, '');
    }
};
//计算角度值
const getSlideAngle = function(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
};
//根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
const getSlideDirection = function(startX, startY, endX, endY) {
    var dy = startY - endY;
    var dx = endX - startX;
    var result = 0;

    //如果滑动距离太短
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        return result;
    }

    var angle = getSlideAngle(dx, dy);
    if (angle >= -45 && angle < 45) {
        result = 'swiperight';
    } else if (angle >= 45 && angle < 135) {
        result = 'swipeup';
    } else if (angle >= -135 && angle < -45) {
        result = 'swipedown';
    }
    else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 'swipeleft';
    }
    return result;
};
/**
 * 存储localStorage
 */
const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    localStorage.setItem(name, content);
    // console.log({'neme':name,'data':content,'type':'set'});
};

/**
 * 获取localStorage
 */
const getStore = function(name,strBol) {
    if (!name) return;
    var _dataStore = localStorage.getItem(name);
    var _return;
    if(_dataStore != null && _dataStore != 'undefined' && _dataStore !=''){
        if(strBol){
            _return = JSON.parse(_dataStore);    
        }else{
            _return = _dataStore;
        }    
    }else{
        _return = false;
    }
    // console.log({'neme':name,'data':_dataStore,'type':'get'});
    return _return;
};
/**
 * 删除localStorage
 */
const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
};
/**
 * 删除sessionStorage
 */
const removeSessionStore = name => {
    if (!name) return;
    window.sessionStorage.removeItem(name);
    console.log({'neme':name,'type':'removeSessionStore'});
};
/**
 * 存储sessionStorage
 */
const setSessionStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    sessionStorage.setItem(name, content);
    // console.log({'neme':name,'data':content,'type':'set'});
};

/**
 * 获取sessionStorage
 */
const getSessionStore = function(name,strBol) {
    if (!name) return;
    var _dataStore = sessionStorage.getItem(name);
    var _return;
    if(name == 'glassSupportInfo'){
        console.log({'neme':name,'data':_dataStore,'type':'get'});
    }
    if(_dataStore != null && _dataStore != 'undefined' && _dataStore !=''){
        if(strBol){
            _return = JSON.parse(_dataStore);    
        }else{
            _return = _dataStore;
        }    
    }else{
        _return = false;
    }
    // console.log({'neme':name,'data':_return,'type':'get'});
    return _return;
};

/**
 * 两对象进行匹配
 */
var ydExtend = function(opt1,opt2,pBol){//该方法匹配、合并、更新两个对象值，仿jquery extend 方法
      var opt = opt1;
      console.log('opt1->',opt1,'opt2->',opt2);
      for(var propName1 in opt1) {
        if(opt2[propName1]){//判断对象1是否有该属性
          // if(typeof opt2[propName2] !='object'){//判断是否是对象
            // console.log('true',opt1[propName2],opt2[propName2]);
            opt[propName1] = opt2[propName1];
          // }else{
            // for(var item in opt2[propName2]){
            //   if(opt1[propName2][item]){
            //     opt[propName2][item] = opt1[propName2][item] != opt2[propName2][item] && opt2[propName2][item] !=null ? opt2[propName2][item] : opt1[propName2][item];
            //   }else{
            //     opt[propName2][item] = opt2[propName2][item];
            //   }
            // }
          // }
        // }else if(pBol){
        //   opt[propName2] = opt2[propName2];
        }
      }
      console.log(opt);
      return opt;
};

/**
 * 判断某一年是否是闰年
 */
const isLeapYear = function(year) {
  var isLeap = false;
  if(0 == year % 4 && ((year % 100 != 0) || (year % 400 == 0))) {
    //闰年可以被4整除且不能被100整除，或者能整除400
    isLeap = true;
  }
  return isLeap;
};
/**
 * 获取某月份的总天数
 */
const getThisMonthDay = function(year, month) {
  var lastDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); //每个月的最后一天是几号
  var thisDayCount = lastDays[month - 1]; //获取当前月份的天数
  if((month == 2) && isLeapYear(year)) {
    //若当前月份为2月，并且是闰年，天数加1
    thisDayCount++;
  }
  return thisDayCount;
};
/**
 * 设置_shopsid
 */
 const setShopsId = function() {
    let _shopsid = getStore('_shopsid',false);
    if(typeof(_shopsid) ==='boolean'){
      window.shopsid = "";
    }else{
      window.shopsid = _shopsid;
    }
 };


export {
    pageScroll, 
    isColor, 
    getScrollview, 
    checkInview, 
    addClass, 
    removeClass, 
    getSlideAngle, 
    getSlideDirection, 
    getStore, 
    setStore, 
    setShopsId,
    removeStore,
    removeSessionStore,
    setSessionStore,
    getSessionStore,
    ydExtend,
    isLeapYear,
    getThisMonthDay

};
