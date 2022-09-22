// import fetch from 'node-fetch'
// 查询选中数据
import exec from 'child_process';

let success = 0;
const cy = '39400966'
var str = '';
function zf() {
  // for (var i = 0; i < 26; i++) {
  //   str += String.fromCharCode(65 + i);//输出A-Z 26个大写字母
  // }
  for (var i = 0; i < 26; i++) {
    str += String.fromCharCode(97 + i);//输出a-z 26个小写字母
  }
  for (var i = 0; i < 10; i++) {
    str += i;//输出a-z 26个小写字母
  }
}
zf()
function getCode() {
  let code = ''
  for (let i = 0; i < 26; i++) {
    code += str[(Math.floor(Math.random() * str.length))]
  }
  return code
}


setInterval(() => {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const command = 'sh axios.sh ' + getCode()
      console.log(getCode())
      exec.exec(command, function (error, stdout, stderr) {
        if (error) {
          console.error('error: ' + error);
          return;
        }
        if (!stdout.indexOf('没有授权')) {
          success += 1
          console.log("成功：" + success)
        }

        console.log('stdout: ' + stdout);
      })
    }, 200)
  }
}, 1000)


