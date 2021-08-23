const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = null;
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
});

// 프로필 페이지
router.get('/profile', (req, res) => {
    res.render('profile', {title: '내 정보 '});
});

// 회원가입 페이지
router.get('/join', (req, res) => {
    res.render('join', {title: '회원가입'});
});

// 메인 페이지
router.get('/', (req, res) => {
    const twits = [];
    res.render('main', {
        title: 'Node SNS',
        twits,
    });
});

module.exports = router;