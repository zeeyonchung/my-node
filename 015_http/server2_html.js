const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('서버 실행');
    fs.readFile('./server2.html', (err, data) => {
        if (err) {
            throw err;
        }
        res.end(data);
    });
}).listen(8080);

server.on('listening', () => {
    console.log('8080 포트에서 서버 대기중입니다...');
});

server.on('error', (err) => {
    console.error(err);
    // 서버가 되살아나진 않지만, 에러 내용을 확인할 수는 있게.
});