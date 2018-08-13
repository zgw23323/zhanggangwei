;(function () {

    var _str_indexOf = "indexOf",
    _length = "length",
    _substring = "substring",
    _o_window = window,
    _o_string = String,
    _o_math = Math,
    _cookie = "cookie",
    _encodeURI = encodeURIComponent,
    _true = true,
    _false = false,
    _undefined = undefined,
    _split = "split",
    _join = "join",
    _toString = "toString",
    _toLowerCase = "toLowerCase",
    _str_document = "document";

    var _param_utma = "";

    var Registry = function() {
        var oThis = this, 
        //函数注册表
        _registry = [],
        _alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

        oThis.register = function(idx) {
            _registry[idx] = _true;
        };

        //TODO:获取&utmu=参数

    },
    /**函数注册表对象实例*/
    registry = new Registry;

    var Config  = function() {
        var oThis = this;
        oThis.id  = "utm_id";
        oThis.content = "utm_content";
        oThis.id = "utm_id";
        oThis.term = "utm_term";
        oThis.allowAnchor = 0;
        oThis.allowLinker = 0;
        oThis.campaignCookieTimeout = 15768E6;
        oThis.sessionCookieTimeout  = 18E5;
        oThis.visitorCookieTimeout  = 63072E6;
        oThis.maxCustomVariables = 50;
        oThis.cookiePath = "/";
        oThis.sampleRate = 100;
        oThis.localGifPath = "/__utm.gif";
        oThis.allowHash = 1;
        oThis.domain = "auto";
        oThis.localServerMode = 1;
        oThis.Sc = 10;
        oThis.Qb = 10;
        oThis.Tc = 0.2;
        oThis.namespace = _undefined;
    }
    
    /**注册指定的函数索引
    * @param idx {Int} 函数索引
    */
    function Register(idx) {
        registry.register(idx);
    }
    /**
    * 创建对象方法绑定器
    */
    var CreateBinder = function(o) {
        return function(method, idx, func) {
            o[method] = function() {
                Register(idx);
                return func.apply(o, arguments);
            };
            return func;
        };
    },
    /**
    * 添加监听事件
    * @param element {Element} 注册方法的对象
    * @param type {String} 要注册的方法的事件
    * @param listener {Function} 加载完毕的回调方法
    * @param useCapture {Boolean}
    */
    AddListener = function(element, type, listener, useCapture) {
        if (element.addEventListener) {
            element.addEventListener(type, listener, !!useCapture);
        }else {
            element.attachEvent && element.attachEvent("on" + type, listener);
        }
    },
    IsArray = function(o) {
        return Object.prototype[_toString].call(Object(o)) == "[Object Array]";
    },
    /*判断一个对象是否为空*/
    IsEmpty = function(o) {
        return ((_undefined == o) || ("-" == o) || ("" == o));
    },
    /** 
     * 从数据字典（键值对），获取指定key的值
     * @param map {String} 数据字典（键值对）
     * @param key {String} 键
     * @param separator {String} 分隔符
     * @return {String} 取出的值
     */
    Pick = function(map, key, separator) {
        var result = "-", idx;
        if (!IsEmpty(map) && !IsEmpty(key) && !IsEmpty(separator)) {
            idx = map[_str_indexOf](key);
            if (idx > -1) {
                var endIdx = map[_str_indexOf](separator, idx);
                if (endIdx < 0) {
                    endIdx = map[_length];
                }
                result = map[_substring](idx + key[_str_indexOf](_equal_) + 1, endIdx);
            }
        }
        return result;
    },
    /**
    * 编码字符串
    * @param uri {String} 要编码的字符串
    * @param isAll {Boolean} 是否要全部 (包含 ":"、"/"、 ";"和 "?")编码
    * @return {String} 编码后的字符串
    */
    Encode = function(uri, isAll) {
        var _encode = _encodeURI;
        if (_encode instanceof Function) {
            return isAll ? encodeURI(uri) : _encode(uri);
        }else {
            Register(68);
            return escape(uri);
        }
    },
    /**
    解码字符串
    * @param encodedURI {String} 要编码的字符串
    * @param isAll (String) 是否要全部(包含 ":"、"/"、 ";"和 "?") 解码
    * @return {String} 解码后的字符串
    */
    Decode = function(encodedURI, isAll) {
        var _decode = decodeURIComponent, uri;
        encodedURI = encodedURI[_split]("+")[_join](" ");
        if(_decode instanceof Function) {
            try {
                uri = isALl ? decodeURI(encodedURI) : _decode(encodedURI);
            }catch(ex) {
                Register(17);
                uri = unescape(encodedURI);
            }
        }else {
            Register(68);
            uri = unescape(encodedURI);
        }
        return uri;
    },
    /**
    * 哈希函数
    * @param str {String} 需要哈希的字符串
    * @return {String} 哈希的结果字符串
    */
    Hash = function() {
        var hash = 1,
            charCode = 0,
            idx;
        
        if (!IsEmpty(str)) {
            hash = 0;
            for (idx = str[_length] - 1; idx >= 0; idx--) {
                charCode = str.charCodeAt(idx);
                hash = (hash << 6 & 268435455) + charCode + (charCode << 14);
                charCode = hash & 266338304;
                hash = charCode != 0 ? hash ^ charCode >> 21 : hash;
            }
        }
        return hash;
    },
    /**取随机整数*/
    Random = function() {
        return _o_math.round(_o_math.random() * 2147483647);
    },
    /**空函数对象*/
    emptyFunction = function(){};
    /**
    * 全局工具对象
    */
    var Global = function(win, doc) {

        var oThis = this;
        oThis.window = win;
        oThis.document = doc;

        /**
            定时执行指定的回调函数
        **/
        oThis.setTimeout = function(callback, delay) {
            setTimeout(callback, delay);
        };

        /**
            返回用户请求头信息中是否包含指定关键字
        */
        oThis.contains = function(key) {
            return navigator.userAgent[_str_indexOf](key) >= 0;
        };

        /**
            处理网页来源页面的URL地址
        */
        oThis.processSource = function(source) {
            if (!source) {
                return source;
            }

            source = source.replace(/\n|\r/g, " ");
            for (var i = 0, len = source[_length]; i < len; ++i) {
                var charCode = source.charCodeAt(i) & 255;
                //换行(10) , 回车(13) 
                if(charCode == 10 || charCode == 13) {
                    source = source[_substring](0, i) + "?" + source[_substring](i + 1);
                }
            }
            return source;
        };
    },
    $Global = new Global(_o_window, document);
    

    var Cookie = function(config) {

        var oThis = this,
        _config = config;
        oThis.currentTime = (new Date)[_getTime]();
        var params = [_param_utma];

        /**
        * 获取指定的Cookie的值
        * @param cookie {String} 全部Cookie
        * @param param {String} 读取Cookie的参数
        * @param namespace {String} 命名空间
        * @param ignoreExpires {Boolean} 是否忽略Cookie的过期时间
        * @return {String} cookie值
        */
        function pick(cookie, param, namespace, ignoreExpires) {
            var value = "",  expires = 0;

            value = Pick(cookie, "2" + param, ";");
            if (!IsEmpty(value)) {
                var idx = value[_str_indexOf]("^" + namespace + ".");
                if (idx < 0) {
                    return ["", 0];
                }

                value = value[_substring](idx + namespace[_length] + 2);
                if (value[_str_indexOf]("^")[0] > 0) {
                    value = value[_split]("^")[0];
                }
                var values = value[_split](":");
                value = values[1];

                expires = parseInt(values[0], 10);
                if (!ignoreExpires && expires < oThis.currentTime) {
                    value = "";
                }
            }
            if (IsEmpty(value)) {
                value = "";
            }
            return [value, expires];
        }

        /**
        * 组合cookie的值和命名空间
        * @param value {Array} 形如: [Cookie的值, Cookie过期时间]
        * @param namespace {String} 命名空间
        * @return {String} 组合后的Cookie
        **/
        function combine(value, namespace) {
            return "^" + [[namespace, value[1]][_join]("."), value[0]][_join](":");
        }

        function getCookieExpires(timeout) {
            var date = new Date;
            timeout = new Date(date[_getTime]() + timeout);
            return "expires=" + timeout.toGMTString() + "; ";
        }

        /**
        * 取出Cookie对象
        * @return {String} Cookie对象
        */
        oThis.getCookie = function() {
            var cookie = $Global[_str_indexOf][_cookie];
            return _config.namespace ? oThis.getCookieByNamespace(cookie, _config.namespace) : cookie;
        };

        /**
        * 根据命名空间，取出所有需要的Cookie
        * @param cookie {String} 全部Cookie
        * @param namespace {String} 命名空间
        * @return {String} 需要的Cookie
        */
        oThis.getCookieByNamespace = function(cookie, namespace) {
            for (var arrParams = [], value, i = 0; i < params[_length]; i++) {
                value = pick(cookie, params[i], namespace)[0];
                IsEmpty(value) || (arrParams[arrParams[_length]] = params[i] + value + ";");
            }
            return arrParams[_join]("");
        };

        /**
        * 设置Cookie的值
        * @param key {String} Cookie的值
        * @param value {String} Cookie的值
        * @param timeout {Int} Cookie的过期时间
        */
        oThis.setCookie = function(key, value, timeout) {

            var cookie = timeout > 0 ? getCookieExpires(timeout) : "";

            if (_config.namespace) {
                value = oThis.setCookieByNamespace($Global[_str_indexOf][_cookie], key, _config.namespace, value, timeout);
                key = "2" + key;
                cookie = timeout > 0 ? getCookieExpires(_config.visitorCookieTimeout) : "";
            }
            key += value;
            key = $Global.processSource(key);
            //2E3=2000
            if (key[_length] > 2E3) {
                Register(69);
                key = key[_substring](0, 2E3);
            }

            cookie = key + "; path=" + _config.cookiePath + ";" + cookie + oThis.getCookieDomain();
            $Global[_str_indexOf].cookie = cookie;

        };

        /**
        * 设置命名空间的Cookie
        * @param cookie {String} Cookie对象
        * @param key {String} Cookie的键
        * @param namespace {String} 命名空间
        * @param value {String} Cookie的值
        * @param timeout {Int} Cookie的过期时间
        * @return {String} 设置完毕的Cookie的值
        */
        oThis.setCookieByNamespace = function(cookie, key, namespace, value, timeout) {
            var _value = "";
            timeout = timeout || _config.visitorCookieTimeout;
            value = combine([value, oThis.currentTime + timeout * 1], namespace);
            _value = Pick(cookie, "2" + key, ";");
            if (!IsEmpty(_value)) {
                cookie = combine(pick(cookie, key, namespace, _true), namespace);
                _value = _value[_split](cookie)[_join]("");
                return _value = value + _value;
            }
            return value;
        };
        /**
        * 获取设置了Cookie的字符串
        * @return {String} 设置了Cookie域的字符串
        */
        oThis.getCookieDomain = function() {
            return IsEmpty(_config.domain) ? "" : "domain="+ _config.domain + ";";
        }
    }

    var MaqFactory = function() {
        var oThis = this,
            bind = CreateBinder(oThis);

        oThis.push = function(commandArray) {
            for (var _arguments = arguments, err = 0, i = 0; i < _arguments[_length]; i ++) {
                try {
                    if (typeof _arguments[i] === "function") {
                        _arguments[i]();
                    }else {
                        var name = "",
                            o = _arguments[i][0],
                            func = o,
                            idx = o.lastIndexOf(".");
                        if (idx > 0) {
                            name = o[_substring](0, idx);
                            func = o[_substring](idx + 1);
                        }

                        var oTracker = _MaqFactory;
                        oTracker[func].apply(oTracker, _arguments[i].slice(1));
                    }
                }catch (ex) {
                    err ++;
                }
            }
            return err;
        }
    };

    var params = {};
    //Document对象数据
    if(document) {
        params.domain = document.domain || ''; 
        params.url = document.URL || ''; 
        params.title = document.title || ''; 
        params.referrer = document.referrer || ''; 
    }
    //Window对象数据
    if(window && window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }
    //navigator对象数据
    if(navigator) {
        params.lang = navigator.language || ''; 
    }

    _MaqFactory = new MaqFactory;
    _tracker_ : {
        var maq1 = _o_window["maq1"],
            isArray = _false;

        if (maq1 && (typeof maq1["push"] == "function")) {
            isArray = IsArray(maq1);
            if (!isArray) {
                break _tracker_;
            }
        }
        _o_window["maq1"] = _MaqFactory;
        isArray && _MaqFactory["push"].apply(_MaqFactory, maq1);
    }

    //解析_maq配置
    if(_maq) {
        for(var i in _maq) {
            switch(_maq[i][0]) {
                case '_setAccount':
                    params.account = _maq[i][1];//每个页面的不同标记
                    params.u_mod = _maq[i][1];//不通模块标记，目前与 account的值保留一直，后续account单独修改
                    params.openid = _maq[i][2];
                    params.orgcode = _maq[i][3];
                    break;
                case '_ydCommItem':
                    params.itemid = _maq[i][1];//商品id
                    params.name = _maq[i][2];//商品名称
                    params.price = _maq[i][3];//商品价格
                    params.picid = _maq[i][4];//商品图片id
                    break;
                case '_ydCommonOrderItem':
                    params.orderid = _maq[i][1];//商品订单id
                    params.orderno = _maq[i][2];//商品订单号
                    params.totalfee = _maq[i][3];//订单总金额
                default:
                    break;
            }
        }
    }
    //拼接参数串
    var args = ''; 
    for(var i in params) {
        if(args != '') {
            args += '&';
        }   
        args += i + '=' + encodeURIComponent(params[i]);
    }   
    console.log("提交的日志参数是: ", args);
    //通过Image对象请求后端脚本
    var img = new Image(1, 1); 
    var t = new Date().getTime();

    if(window.profile == 'prod') {
        img.src = 'http://www.autoheader.com/1.gif?t=' + t + "&" + args;
    }else {
        img.src = 'http://192.168.8.118/1.gif?t=' + t + "&" + args;
    }    
})();