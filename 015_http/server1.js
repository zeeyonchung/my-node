const http = require('http');

// 방문 이벤트
// localhost:8080을 방문하면 실행

http.createServer((req, res) => {
    console.log('서버 실행');
    res.write('<h1>Hello World</h1>');
    res.end('<p>Bye!</p>');
}).listen(8080, () => {
    console.log('8080 포트에서 서버 대기중입니다...');
});
