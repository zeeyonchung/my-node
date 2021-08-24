const passport = require('passport');
const local = require('./localStrategy');
const { User } = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => { //req.login 시에 serializeUser 호출
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => { //매 요청시마다 passport.session() - deserializeUser가 실행 - 디비 조회하여 req.user로
        User.findOne({ where: { id } })
            .then (user => done(null, user))
            .catch (err => done(err));
    });

    local();
};