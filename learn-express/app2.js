const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app2 = express();

/**
 * 익스프레스 설정, 값 저장
 */
app2.set('views', path.join(__dirname, 'views'));

/**
 * 미들웨어 장착
 */
// req > app.use 미들웨어들 > res
// next를 호출해 다음 미들웨어로 넘어가거나 res.send등의 응답을 보낸다.
app2.use((req, res, next) => {
    console.log('첫 번째 미들웨어');
    next();
});

// logger 함수를 보면 마지막에 next를 호출하고 있다.
app2.use(logger('dev'));

// static은 찾는 파일이 있는 경우만 next를 호출하여 이 아래의 불필요한 실행을 맏는다.
app2.use(express.static(path.join(__dirname, 'public')));

app2.use(cookieParser('secret code'));

app2.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret code',
    cookie: {
        httpOnly: true,
        secure: false,
    }
}));

/**
 * 라우팅
 */
// 라우터도 미들웨어다!
// next도 않고 res도 않으면 클라이언트는 계속 기다리게 된다.
app2.get('/', (req, res) => {
    res.send('Hello World');
});

/**
 * 끝에 에러 처리 미들웨어
 */
// 404 NOT FOUND 처리
app2.use((req, res, next) => {
   res.status(404).send('NOT FOUND');
});

// 500 ERROR 처리
// next(err)가 호출되면 다른 미들웨어를 건너뛰고 에러 처리 미들웨어로 이동한다.
app2.use((err, req, res, next) => {
    res.status(err.status || 500).send('ERROR');
});

module.exports = app2;