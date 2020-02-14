const fs = require('fs');

console.log('시작');

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
});

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
});

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
});

console.log('끝');

// 시작
// 끝
// 1번 읽기
// 3번 읽기
// 2번 읽기