const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }

        mongoose.connect('mongodb://localhost:27017/', {
            dbName: 'nodejs',
        }, (error) => {
            if (error) {
                console.error('몽고디비 연결 에러', error);
            } else {
                console.log('몽고디비 연결 성공');
            }
        });
    };

    connect();

    // 디비 연결 장애시 대처
    mongoose.connection.on('error', (error) => {
        console.error('몽고디비 연결 에러', error);
    });

    mongoose.connection.on('disconnected', (error) => {
        console.error('몽고디비 연결이 끊어졌습니다. 연결을 재시도합니다.', error);
        connect();
    });

    require('./user');
    require('./comment');
};