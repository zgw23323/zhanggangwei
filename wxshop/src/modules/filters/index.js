export function host (url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function searchFromData(searchKey = '', sourceData = {}, fieldName) {
  if (typeof sourceData === 'object') {
    var reg = new RegExp(searchKey);
    var dataArrs = sourceData.filter(function(data){// 
      return data[fieldName].match(reg);
    })
    return dataArrs;
  }
  return sourceData;
}

export function trim(str, is_global) {  //去除空格方法（格式化字符串）
  let result;
  result = str.replace(/(^\s+)|(\s+$)/g,"");
  if(is_global.toLowerCase()=="g") {
      result = result.replace(/\s/g,"");
   }
  return result;
}
