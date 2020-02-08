const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않음');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);
// 1초마다 실행
// 1.5초 후 실행
// 1초마다 실행

const im = setImmediate(() => console.log('즉시 실행'));
clearImmediate(im);
// 즉시 실행되는 setImmediate 함수를 이벤트 루프로 보내서 비동기로 실행 순서를 조정할 때 사용