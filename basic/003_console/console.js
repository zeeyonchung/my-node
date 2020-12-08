const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};

console.time('전체 시간');
console.log('로그');
console.log(string, number, boolean);
console.error('에러');
console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});

function b() {
    console.trace('에러 위치 추적');
}

function a() {
    b();
}

a();

console.timeEnd('전체 시간');