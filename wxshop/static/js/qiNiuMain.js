// var HmacSHA1 = require("crypto-js/hmacsha1");
// var CryptoJS = require("crypto-js");


var token = '3jaaESRzBukNJKK3LLnVrDnJ_XVcUEW5Gg0_ZvBk:71y3F-GniHJ-1q-XPysRgLnGkb8=:eyJzY29wZSI6InlkYXV0byIsImRlYWRsaW5lIjoxNTMwNTM1NjUwfQ==';
var domain = 'http://oi9rjrkgb.bkt.clouddn.com/'; //自己的七牛云存储空间域名
var config = {
  useCdnDomain: true,
  disableStatisticsReport: false,
  retryCount: 6,
  Bucket:"sdk-z2",
  region: qiniu.region.z2
};
var putExtra = {
  fname: "",
  params: {},
  mimeType: null
};

uploadWithSDK(token, putExtra, config,domain);

function uploadWithSDK(token, putExtra, config, domain) {
  $("#costFile").unbind("change").bind("change",function(){
    var file = this.files[0];
    var observable;
    if (file) {
      var key = file.name;
      putExtra.params["x:name"] = key.split(".")[0];
      var complete = function(res) {
            debugger;
        if (res.key && res.key.match(/\.(jpg|jpeg|png|gif)$/)) {
          imageDeal(res.key, domain);
        }
      };
      var subObject = { 
        complete: complete
      };
      var subscription;

      observable = qiniu.upload(file, key, token, putExtra, config);
      debugger;
      subscription = observable.subscribe(subObject);
      debugger;
    }
  })
}

function imageDeal(key, domain) {
  var fopArr = [];
  //var img = $(".modal-body").find(".display img");
  // var img = document.getElementById("imgContainer").getElementsByTagName("img")[0];
  // img.key = key
  fopArr.push({
    fop: "imageView2",
    mode: 2,
    h: 450,
    q: 100
  });
  // var newUrl = qiniu.pipeline(fopArr, key, domain);
  document.getElementById("imgContainer").src = newUrl;
  // var newImg = new Image();
  // newImg.src = domain+key;
}
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
function base64encode(str) {
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
}

function utf16to8(str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    }

var safe64 = function(base64) {
        base64 = base64.replace(/\+/g, "-");
        base64 = base64.replace(/\//g, "_");
        return base64;
    };
//获取token
function genToken(accessKey, secretKey, putPolicy) {
    // var setStep = function(id, val) {
    //     Ext.getCmp(id).setValue("<div style=\"color:blue;word-break: break-all;font-size:18px;line-height:28px;\"><b>" + val + "</b></div>");
    // }
    //SETP 2
    var put_policy = JSON.stringify(putPolicy);
    console.log("put_policy = ", put_policy);

    // setStep("disp_step2", put_policy);

    //SETP 3
    var encoded = base64encode(utf16to8(put_policy));
    console.log("encoded = ", encoded);
    // setStep("disp_step3", encoded);

    //SETP 4
    var hash = CryptoJS.HmacSHA1(encoded, secretKey);
     // var hash = HmacSHA1(encoded, secretKey);
    var encoded_signed = hash.toString(CryptoJS.enc.Base64);
    // setStep("disp_step4", encoded_signed);

    //SETP 5
    var upload_token = accessKey + ":" + safe64(encoded_signed) + ":" + encoded;
    // setStep("disp_step5", upload_token);

    return upload_token;
};

var returnBody = {
  "key":"$(key)","hash":"$(etag)","w":"$(imageInfo.width)","h":"$(imageInfo.height)"
};
let accessKey = '3jaaESRzBukNJKK3LLnVrDnJ_XVcUEW5Gg0_ZvBk';
let secretKey = 'bNpb9nxK0h0D0yMmylRQMX2cP0BdpcZZAstHuEFc';

var putPolicy = {
  scope:'ydauto', //指定上传目标的bucket
  deadline: Math.round(new Date().getTime() / 1000) + 9 * 3600//上传凭证有效截止时间
};

// genToken(accessKey,secretKey,putPolicy);

//转换bese64
// var expire = Ext.getCmp("txt_deadline").getValue();
// var deadline = Math.round(new Date().getTime() / 1000) + 9 * 3600;//设置为9小时有效期





