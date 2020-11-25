//时间格式化
//正则表达式，用来字符串匹配
//y+  ->表示一个或者多个y
//y*  ->表示0个或者多个y
//y?  ->表示0个或者一个y
export function formaDate(date,fmt){
  //获取年份
  if(/(y+)/.test(fmt)){
    fmt = fmt.replace(RegExp.$1,(date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  let o = {
    'M+':date.getMonth() + 1,
    'd+':date.getDate(),
    'h+':date.getHours(),
    'm+':date.getMinutes(),
    's+':date.getSeconds(),
  };

  for(let k in o){
    if(new RegExp(`(${k})`).test(fmt)){
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str:padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str){
  //用来补齐，避免出现4:4:4这样的情况
  return ('00' + str).substr(str.length);
}