/*
setInterval(() => {
    console.log('시작');
    try {
        throw new Error('에러 발생');
    } catch (error) {
        console.error(error);
    }
}, 1000);
*/

/**
 * try/catch 해야할 상황을 아예 안 만드는 게 좋다.
 * 하지만 async/await처럼 어쩔 수 없이 try/catch 사용해야 하는 경우도 있다.
 */

/*
const fs = require('fs');

setInterval(() => {
   fs.unlink('./aaa.js', (err) => {
      if (err) {
          console.log('시작');
          console.log(err);
          console.log('끝');
      }
   });
});
 */

/**
 * 노드 내장 메서드에서 발생하는 에러는, 에러가 나도 프로세스를 멈추지 않아 따로 처리할 필요가 없다.
 */

/*
setInterval(() => {
   throw new Error('에러 발생');
}, 1000);

setTimeout(() => {
   console.log('실행됩니다');
}, 2000);
 */

/**
 * Error: 에러 발생 => 후 프로세스가 멈춰버려서 '실행됩니다'는 출력되지 않는다.
 * 이렇게 예기치 못한 에러로 프로세스가 멈추지 않도록, 예기치 못한 에러 처리를 아래와 같이 할 수 있다.
 */

/*
process.on('uncaughtException', (err) => {
   console.error('예기치 못한 에러', err);
   // 이 콜백이 실행된다는 게 보장되지 않기때문에 여기에 서버를 복구하는 등의 코드를 넣는 것은 좋지 않다.
});

setInterval(() => {
    throw new Error('에러 발생');
}, 1000);

setTimeout(() => {
    console.log('실행됩니다');
}, 2000);
 */

/**
 * 그러나 그 (예기치 못한) 에러가 계속 발생한다는 의미이므로,
 * uncaughtException에 의존하지 말고 (예기치 못했다고 생각한) 근본적인 에러의 원인을 해결해야 한다.
 */