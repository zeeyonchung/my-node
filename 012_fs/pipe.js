const fs = require('fs');
const zlib = require('zlib');

// 파일 복사
const readStream = fs.createReadStream('./readme4.txt');
const writeStream = fs.createWriteStream('./writeme4.txt');
readStream.pipe(writeStream);

// 또는
fs.copyFile('./readme5.txt', './writeme5.txt', (err) => {
    console.log(err);
});


// 압축
const zlibStream = zlib.createGzip();
const readStream2 = fs.createReadStream('./readme6.txt');
const writeStream2 = fs.createWriteStream('./writeme6.txt');
readStream2.pipe(zlibStream).pipe(writeStream2);