console.log(__filename); //C:\Users\zeeyo\projects\my-node\005_file\file.js
console.log(__dirname); //C:\Users\zeeyo\projects\my-node\005_file

console.log(process.arch); //x64
console.log(process.platform); //win32
console.log(process.pid); //18953
console.log(process.version); //v12.14.1
console.log(process.uptime()); //프로세스가 실행된지 얼마나 됐는지
console.log(process.cwd()); //C:\Users\zeeyo\projects\my-node\005_file : __dirname는 파일의 경로, process.cwd()는 프로세스의 실행 경로
console.log(process.execPath); //C:\Program Files\nodejs\node.exe : 노드가 설치된 경로
console.log(process.cpuUsage()); //{ user: 31000, system: 15000 } : cpu 사용량

process.exit(); //프로세스 종료시키기

console.log('...'); //출력되지 않음