const util = require('basic/011_util/util');
const crypto = require('crypto');

// deprecate
const dontuseme = util.deprecate((x, y) => {
   console.log(x + y);
}, '지원 끝난 함수');

dontuseme(1, 2);


// promisify : callback 형식밖에 지원하지 않는 함수를 promise 방식으로 변환

const randomBytesPromise = util.promisify(crypto.randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);

// 그럼 아래 callback 방식을
console.time('암호화');
crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log(salt);
    crypto.pbkdf2('비밀번호', salt, 1190834, 64, 'sha512', (err, key) => {
        console.log(key.toString('base64'));
        console.timeEnd('암호화');
    });
});

// promise 방식으로 사용 가능
console.time('암호화2');
randomBytesPromise(64)
    .then((buf) => {
        const salt = buf.toString('base64');
        console.log(salt);
        return pbkdf2Promise('비밀번호', salt, 1190834, 64, 'sha512');
    })
    .then((key) => {
        console.log(key.toString('base64'));
        console.timeEnd('암호화2');
    })
    .catch((err) => {
        console.error(err);
    });

// await을 쓰면
(async () => {
    console.time('암호화3');
    const buf = await randomBytesPromise(64);
    const salt = buf.toString('base64');
    const key = await pbkdf2Promise('비밀번호', salt, 1190834, 64, 'sha512');
    console.log(key.toString('base64'));
    console.timeEnd('암호화3');
})();
