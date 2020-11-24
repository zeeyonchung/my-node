const http = require('http');
const fs = require('fs');

const parseCookie = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

const server = http.createServer((req, res) => {
    console.log('서버 실행');

    // 사용자가 요청한 url 확인
    console.log(req.url);

    // 쿠키 확인
    console.log(req.headers.cookie); //mycookie=test
    console.log(parseCookie(req.headers.cookie)); //{ mycookie: 'test' }

    // 쿠키 설정
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });

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
});