// 이벤트 리스너
// 특정 이벤트가 발생했을 때 어떤 동작을 할지 정의한다.

const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('방문', () => {
    console.log('방문해주셔서 감사합니다.');
});

myEvent.on('종료', () => {
    console.log('안녕히 가세요.');
});

myEvent.on('종료', () => {
   console.log('가라가라 가');
});

myEvent.once('특별이벤트', () => {
   console.log('한 번만 실행됩니다.');
});

myEvent.emit('방문');
myEvent.emit('종료');
myEvent.emit('특별이벤트');
myEvent.emit('특별이벤트');
// 방문해주셔서 감사합니다.
// 안녕히 가세요.
// 가라가라 가
// 한 번만 실행됩니다.

myEvent.on('계속', () => {
   console.log('계속 리스닝');
});

myEvent.removeAllListeners('계속');
myEvent.emit('계속');

myEvent.on('종료2', () => {
   console.log('종료2');
});

// myEvent.on('종료2', () => {
//    console.log('종료2...');
// });
//
// myEvent.removeListener('종료2'); ERROR

const callback = () => {
    console.log('종료2...');
};

myEvent.on('종료2', callback);

console.log(myEvent.listenerCount('종료2')); // 2
myEvent.removeListener('종료2', callback);
console.log(myEvent.listenerCount('종료2')); // 1

myEvent.emit('종료2');

// 방문해주셔서 감사합니다.
// 안녕히 가세요.
// 가라가라 가
// 한 번만 실행됩니다.
// 종료2