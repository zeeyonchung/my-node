const http = require('http');
const https = require('https');
const http2 = require('http2');

/**
 * http server
 */
http.createServer((req, res) => {
   res.end('http server');
}).listen(80);

/**
 * https server
 */
// https는 기관에서 발급받은 인증서가 필요하다.
https.createServer({
    cert: fs.readFile('도메인 인증서 경로'),
    key: fs.readFile('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ]
}, (req, res) => {
    res.end('https server');
}).listen(443);

/**
 * http2 server
 */
// http2는 https 기반
// node10 익스프레스와 호환 문제 있음. spdy를 대신 사용.
http2.createSecureServer({
    cert: fs.readFile('도메인 인증서 경로'),
    key: fs.readFile('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ]
}, (req, res) => {
    res.end('https server');
}).listen(443);