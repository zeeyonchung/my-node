const http = require('http');
const fs = require('fs');

const users = {

};

const router = {
   get: {
      '/': (req, res) => {
         fs.readFile('./restFront.html', (err, data) => {
            if (err) {
               throw err;
            }
            res.end(data);
         });
      },
      '/users': (req, res) => {
         res.end(JSON.stringify(users));
      },
      '*': (req, res) => {
         fs.readFile(`.${req.url}`, (err, data) => {
            return res.end(data);
         });
      }
   },
   post: {
      '/users': (req, res) => {
         // 요청 body 받기
         let body = '';
         req.on('data', (chunk) => {
            body += chunk;
         });
         req.on('end', () => {
            console.log('POST body:' + body);
            const { name } = JSON.parse(body);
            const id = +new Date();
            users[id] = name;
            res.writeHead(201, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('사용자 등록 성공');
         });
      }
   },
   put: {
      '/users': (req, res) => {
         const id = req.url.split('/')[2];
         let body = '';
         req.on('data', (chunk) => {
            body += chunk;
         });
         req.on('end', () => {
            console.log('PUT body:' + body);
            users[id] = JSON.parse(body).name;
            return res.end(JSON.stringify(users));
         });
      }
   },
   delete: {
      '/users': (req, res) => {
         const id = req.url.split('/')[2];
         let body = '';
         req.on('data', (chunk) => {
            body += chunk;
         });
         req.on('end', () => {
            console.log('DELETE body:' + body);
            delete users[id];
            return res.end(JSON.stringify(users));
         });
      }
   }
};

http.createServer((req, res) => {
   const matchedUrl = router[req.method.toLowerCase()][req.url];
   (matchedUrl || router[req.method.toLowerCase()]['*'])(req, res);
}).listen(8085, () => {
   console.log('8085번 서버 대기 중');
});