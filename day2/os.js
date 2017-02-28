const os = require('os');
console.log(os.hostname());  //pcの情報を入手
console.log(os.arch()); //アーキテクチャの入手
console.log((os.totalmem()/16).toFixed(1) + "MB"); //メモリ量の入手
console.log((os.freemem()/16).toFixed(1) + "MB"); //空きメモリ量の入手
