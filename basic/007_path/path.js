const path = require('basic/007_path/path');

console.log(path.sep); // \ : 경로 구분자
console.log(path.delimiter); // ; : 환경변수 구분자
console.log(path.dirname(__filename)); //C:\Users\zeeyo\projects\my-node\007_path : 파일의 경로
console.log(path.extname(__filename)); // .js : 파일의 확장자
console.log(path.basename(__filename)); // path.js : 파일의 이름
console.log(path.parse(__filename));
// {
//     root: 'C:\\',
//         dir: 'C:\\Users\\zeeyo\\projects\\my-node\\007_path',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
// }

console.log(path.format(
    {
        root: 'C:\\',
        dir: 'C:\\Users\\zeeyo\\projects\\my-node\\007_path',
        base: 'path.js',
        ext: '.js',
        name: 'path'
    }
));
//C:\Users\zeeyo\projects\my-node\007_path\path.js

console.log(path.normalize('C:\\Users\\\///zeeyo\\projects\\my-node\\007_path\\path.js'));
//C:\Users\zeeyo\projects\my-node\007_path\path.js : 구분자를 알맞게 바꿔줌

console.log(path.isAbsolute('../')); //false : 절대경로인지 확인
console.log(path.relative('C:\\Users\\zeeyo\\projects\\my-node\\007_path\\path.js', 'C:\\'));
// ..\..\..\..\..\.. : 첫 번째 경로에서 두 번째 경로로 가는 상대 경로

console.log(path.join(__dirname, '.', '..', '/users', '.', '/zeeyo'));
// C:\Users\zeeyo\projects\my-node\users\zeeyo : 절대경로 무시하고 조각난 경로들을 합침

console.log(path.resolve(__dirname, '.', '..', '/users', '.', '/zeeyo'));
// C:\zeeyo : 절대경로 고려하여 조각난 경로들을 합침 (/users, /zeeyo 를 절대경로로 판단한 것)