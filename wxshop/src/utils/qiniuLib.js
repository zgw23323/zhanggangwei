// var CryptoJS = require("crypto-js");

/**
 * 七牛封装方法，获取token
 */

var qiniuLib = {
  //配置基本信息项
  init: ()=> {
    let initData = {
       
      domain: 'http://p5vdemxun.bkt.clouddn.com/',
      config: {
        useCdnDomain: true,
        disableStatisticsReport: false,
        retryCount: 6,
        // Bucket:"sdk-z2",
        region: qiniu.region.z0
      },
      putExtra: {
        fname: "",
        params: {},
        mimeType: null
      }
    }
    return initData
  },
  base64encode:(str) => {
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

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
  },
  safe64:(base64) => {
    base64 = base64.replace(/\+/g, "-");
    base64 = base64.replace(/\//g, "_");
    return base64;
  },
  utf16to8: (str) => {
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
  },
  genToken:(accessKey, secretKey, putPolicy) =>{
    let _initData = qiniuLib.init();
    console.log('_initData',_initData);
    //SETP 1 将上传策略序列化成为JSON
    var put_policy = JSON.stringify(_initData.putPolicy);
    console.log("put_policy = ", put_policy);

    //SETP 2 对 JSON 编码的上传策略进行URL 安全的 Base64 编码
    var encoded = qiniuLib.base64encode(qiniuLib.utf16to8(put_policy));
    console.log("encoded = ", encoded);

    //SETP 3 使用访问密钥（AK/SK）对上一步生成的待签名字符串计算HMAC-SHA1签名
    var hash = CryptoJS.HmacSHA1(encoded, _initData.secretKey);

    //SETP 4 对签名进行URL安全的Base64编码
    var encoded_signed = hash.toString(CryptoJS.enc.Base64);

    //SETP 5 拼接token
    var upload_token = _initData.accessKey + ":" + qiniuLib.safe64(encoded_signed) + ":" + encoded;
    console.log("upload_token = ", upload_token);

    return upload_token;
  },
  getKey: function(file){
    $.ajax({
        url: '/qiniu-token/get-key/',
        type: 'GET',
        async: false,//这里应设置为同步的方式
        success: function(data) {
            var ext = Qiniu.getFileExtension(file.name);
            key = data + '.' + ext;
        },
        cache: false
    });
  },
  uploadWithSDK:(file,qiniuToken,callback) => {
    var _initData = qiniuLib.init();
    // qiniu.getUploadUrl(_initData.config,qiniuToken).then((res => {
    //   var uploadUrl = res;
    //   var requestUrl = qiniu.createMkFileUrl(url: uploadUrl, size: file.size, key: file.name, putExtra: _initData.putExtra);
    //   console.log('requestUrl',requestUrl);
    // }))

    // let qi_token = qiniuLib.genToken();
    let key = file.name.split('.')[0]+Math.floor(Math.random()*10+1)+'.'+file.name.split('.')[1];
    console.log('requestUrl',key);
    // _initData.putExtra.params["x:name"] = encodeURI(encodeURI(file.name.split('.')[0]));
    _initData.putExtra.params["x:name"] = key.split(".")[0];
    console.log('init',file);
    var complete = function(res) {
      console.log('requestUrl22',res);
      if (res.key && res.key.match(/\.(jpg|jpeg|png|gif)$/)) {
        callback(res.key, _initData.domain);
      }
    };
    var subObject = { 
      complete: complete
    };
    var subscription;

    var observable = qiniu.upload(file,key, qiniuToken, _initData.putExtra, _initData.config);
    subscription = observable.subscribe(subObject);
  },
  uploadWithSDK1:(qiniuToken,strId,pThis,callback) => {
    var _initData = qiniuLib.init();
    qiniu.getUploadUrl(_initData.config, qiniuToken).then(function(res){
    var uploadUrl = res
    var board = {};
    var fileId = '';
    var indexCount = 0;
    var resume = false;
    var chunk_size;
    var blockSize;
    var key = '';
    var putExtra = {};
    var uploader = new plupload.Uploader({
      runtimes: "html5,flash,silverlight,html4",
      url: uploadUrl,
      browse_button: strId, // 触发文件选择对话框的按钮，为那个元素id
      flash_swf_url: "./js/Moxie.swf", // swf文件，当需要使用swf方式进行上传时需要配置该参数
      silverlight_xap_url: "./js/Moxie.xap",
      chunk_size: 10 * 1024 * 1024,
      max_retries: 3,
      // save_key: false,
      unique_names :true,
      multipart_params: {
        // token从服务端获取，没有token无法上传
        token: qiniuToken
      },
      init: {
        PostInit: function() {
          console.log("upload init");
        },
        FileUploaded: function(up, file, info) {
          console.log(info);
        },
        FilesAdded: function(up, files) {
          resume = false;
          chunk_size = uploader.getOption("chunk_size");
          var id = files[0].id;
          // 添加上传dom面板
          board[id] = id;
          fileId = id;
          uploader.start(); 
        },
        UploadComplete: function(up, files) {
          console.log("[完成]-ok",up);
          // callback(files[0].name,strId);
          // Called when all files are either uploaded or failed
          console.log("[完成]",files);
        },
        Error: function(up, err) {
          console.log(err.response);
        }
      }
    });
    uploader.init();
    uploader.bind('Error',function(){
      console.log(1234)
    })
    uploader.bind("BeforeUpload", function(uploader, file) {
        console.log('BeforeUpload',file);
        pThis.$dialog.loading.open('上传中...');
      key = new Date().getTime()+"-"+file.name;
      // file.name = encodeURI(encodeURI(file.name.split('.')[0]));
      _initData.putExtra.params["x:name"] = file.name.split('.')[0];
      putExtra = _initData.putExtra;
      var id = file.id;
      chunk_size = uploader.getOption("chunk_size");
      console.log('getOption',chunk_size);
      var directUpload = function() {
        var multipart_params_obj = {};
        multipart_params_obj.token = qiniuToken;
        // filterParams 返回符合自定义变量格式的数组，每个值为也为一个数组，包含变量名及变量值
        var customVarList = qiniu.filterParams(_initData.putExtra.params);
        for (var i = 0; i < customVarList.length; i++) {
          var k = customVarList[i];
          multipart_params_obj[k[0]] = k[1];
        }
        multipart_params_obj.key = key;
        uploader.setOption({
          url: uploadUrl,
          multipart: true,
          multipart_params: multipart_params_obj
        });
      };
      var resumeUpload = function() {
        blockSize = chunk_size;
        initFileInfo(file);
        if(blockSize === 0){
          mkFileRequest(file)
          uploader.stop()
          return
        }
        resume = true;
        var multipart_params_obj = {};
        // 计算已上传的chunk数量
        var index = Math.floor(file.loaded / chunk_size);
        var headers = qiniu.getHeadersForChunkUpload(qiniuToken)
        uploader.setOption({
          url: uploadUrl + "/mkblk/" + blockSize,
          multipart: false,
          required_features: "chunks",
          headers: {
            Authorization: "UpToken " + qiniuToken
          },
          multipart_params: multipart_params_obj
        });
      };
      // 判断是否采取分片上传
      if (
        (uploader.runtime === "html5" || uploader.runtime === "flash") &&
        chunk_size
      ) {
        if (file.size < chunk_size) {
          directUpload();
        } else {
          resumeUpload();
        }
      } else {
        console.log(
          "directUpload because file.size < chunk_size || is_android_weixin_or_qq()"
        );
        directUpload();
      }
    });

    uploader.bind("ChunkUploaded", function(up, file, info) {
      console.log('ChunkUploaded');
      var res = JSON.parse(info.response);
      var leftSize = info.total - info.offset;
      var chunk_size = uploader.getOption && uploader.getOption("chunk_size");
      if (leftSize < chunk_size) {
        up.setOption({
          url: uploadUrl + "/mkblk/" + leftSize
        });
      }
      up.setOption({
        headers: {
          Authorization: "UpToken " + qiniuToken
        }
      });
      // 更新本地存储状态
      var localFileInfo = JSON.parse(localStorage.getItem(file.name))|| [];
      localFileInfo[indexCount] = {
        ctx: res.ctx,
        time: new Date().getTime(),
        offset: info.offset,
        percent: file.percent
      };
      indexCount++;
      localStorage.setItem(file.name, JSON.stringify(localFileInfo));
    });

    // 每个事件监听函数都会传入一些很有用的参数，
    // 我们可以利用这些参数提供的信息来做比如更新UI，提示上传进度等操作

    uploader.bind("FileUploaded", function(uploader, file, info) {
      var id = file.id;
      console.log('FileUploaded');
      if (resume) {
        mkFileRequest(file)
      } else {
        uploadFinish(JSON.parse(info.response), file.name,board[id]);
      }
    });

    function uploadFinish(res, name, board) {
      console.log('完成好',name,res);
      // if (res.key && res.key.match(/\.(jpg|jpeg|png|gif)$/)) {
         // console.log('完成好了',name,res);
         callback(res.key,strId);
        // imageDeal(board, res.key, callback);
      // }
    }
    // uploader.start();
    function initFileInfo(file) {
      var localFileInfo = JSON.parse(localStorage.getItem(file.name))|| [];
      indexCount = 0;
      var length = localFileInfo.length
      if (length) {
        var clearStatus = false
        for (var i = 0; i < localFileInfo.length; i++) {
            indexCount++
          if (isExpired(localFileInfo[i].time)) {
            clearStatus = true
            localStorage.removeItem(file.name);
            break;
          }
        }
        if(clearStatus){
          indexCount = 0;
          return
        }
        file.loaded = localFileInfo[length - 1].offset;
        var leftSize = file.size - file.loaded;
        if(leftSize < chunk_size){
          blockSize = leftSize
        }
        file.percent = localFileInfo[length - 1].percent;
        return
      }else{
        indexCount = 0
      }
    }

    function mkFileRequest(file){
      // 调用sdk的url构建函数
      var requestUrl = qiniu.createMkFileUrl(
        uploadUrl,
        file.size,
        key,
        putExtra
      );
      var ctx = []
      var id = file.id
      var local = JSON.parse(localStorage.getItem(file.name))
      for(var i =0;i<local.length;i++){
        ctx.push(local[i].ctx)
      }
      // 设置上传的header信息
      var headers = qiniu.getHeadersForMkFile(qiniuToken)
      $.ajax({url: requestUrl, type: "POST",  headers: headers, data: ctx.join(","), success: function(res){
        uploadFinish(res, file.name,board[id]);
      }})
    }

    function addUploadBoard(file, config, key, type) {
      var BLOCK_SIZE = 4 * 1024 * 1024;

      var count = Math.ceil(file.size / BLOCK_SIZE);
      var board = widget.add("tr", {
        data: { num: count, name: key, size: file.size },
        node: $("#fsUploadProgress" + type)
      });
      if (file.size > 100 * 1024 * 1024) {
        $(board).html("本实例最大上传文件100M");
        return "";
      }
      count > 1 && type != "3"
        ? ""
        : $(board)
            .find(".resume")
            .addClass("hide");
      return board;
    }

    function isExpired(time){
      let expireAt = time + 3600 * 24* 1000;
      return new Date().getTime() > expireAt;
    }

    //设置上传的文件位置
    function setFormStyle() {
      console.log('set',$('#'+strId).parent().find('input'))
      $('#'+strId).parent().removeAttr('style');
      $('#'+strId).parent().find('input').parent().attr('style','width:100%;height:100%;left:0;bottom:0;top:0;position: absolute;');
      $('#'+strId).parent().find('input').attr('accept','image/*');
      $('#'+strId).parent().find('input').removeAttr('multiple');

    }
    // setFormStyle();
    setTimeout(()=>{
       setFormStyle();
    },500);
  });
  }
}

export {
  qiniuLib
};


