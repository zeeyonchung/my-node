const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log(salt);
    console.time('암호화');
    crypto.pbkdf2('비밀번호', salt, 1190834, 64, 'sha512', (err, key) => {
        console.log(key.toString('base64'));
        console.timeEnd('암호화');
    });
});

// 해시 충돌 공격을 어렵게 하기 위해 salt라는 문자열을 원래 비밀번호에 추가하고 iteration 횟수를 높인다.
// salt는 랜덤값이기 때문에 실행할 때마다 달라진다.
// salt는 암호화된 비밀번호와 같이 저장한다.
// iteration은 1초 정도가 걸릴 때까지 올려주면 좋다. (여기선 1190834)

// 실무에선 bcrypt, scrypt 많이 사용