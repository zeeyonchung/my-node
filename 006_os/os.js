/**
 * os : 운영체제와 관련된 모듈
 */
const os = require('os');

console.log(os.arch()); //x64
console.log(os.platform()); //win32
console.log(os.type()); //Windows_NT
console.log(os.uptime()); //145332 : process.uptime()은 노드 프로그램이 시작되고나서 흐른 시간, os.uptime()은 운영체제가 시작되고 나서 흐른 시간
console.log(os.hostname()); //LAPTOP-0AE4RGC8
console.log(os.release()); //10.0.18362
console.log(os.homedir()); //C:\Users\zeeyo
console.log(os.tmpdir()); //C:\Users\zeeyo\AppData\Local\Temp
console.log(os.freemem()); //11495600128 : 지금 사용 가능한 메모리
console.log(os.totalmem()); //16968372224 : 총 메모리
console.log(os.cpus()); //cpu 정보

/*
 노드는 하나의 코어만 사용
 나머지 코어는 놀고 있기에 os.cpus()로 코어 개수를 확인한 다음,
 개수만큼 반복문을 돌려 노드 프로세스를 만들어서 싱글 스레드의 단점을 극복하기도 한다.
 */