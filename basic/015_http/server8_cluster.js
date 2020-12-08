/**
 * 노드는 싱글스레드.
 * CPU 코어를 하나밖에 안 쓰기에 오히려 하드웨어의 낭비일 수 있다.
 * cluster가 노는 코어를 활용하는 방법이다.
 * 여러개의 프로세스를 생성해서 요청을 나눠 받는다.
 */

const http = require('http');
const cluster = require('cluster');
const os = require('os');
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    // 마스터 프로세스
    console.log('마스터 프로세스 아이디', process.pid);

    // 워커 만들기
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // 워커 exit 이벤트
    cluster.on('exit', (worker, code, signal) => {
       console.log(worker.process.pid, '워커가 종료되었습니다.');
       worker.fork();
    });

} else {
    // 워커 프로세스
    http.createServer((req, res) => {
        res.end('http server');
    }).listen(80);
    console.log(process.pid, '워커 실행');
}

