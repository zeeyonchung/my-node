const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 }); // highWaterMark:몇 바이트씩 읽을 건지
const data = [];

readStream.on('data', (chunk) => {
   data.push(chunk);
   console.log('data', chunk, chunk.length);
});

readStream.on('end', () => {
   console.log('end', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
   console.error(err);
});

// data <Buffer ed 8c 8c ec 9d bc ec 9d 80 20 ec a1 b0 ea b8 88> 16
// data <Buffer ec 94 a9 20 eb 82 98 eb 88 a0 ec 84 9c 20 ec a0> 16
// data <Buffer 84 eb 8b ac eb 90 a9 eb 8b 88 eb 8b a4 2e 20 eb> 16
// data <Buffer 82 98 eb 88 a0 ec a7 84 20 ec a1 b0 ea b0 81 ec> 16
// data <Buffer 9d 84 20 63 68 75 6e 6b eb 9d bc ea b3 a0 20 eb> 16
// data <Buffer b6 80 eb a6 85 eb 8b 88 eb 8b a4 2e> 12
// end 파일은 조금씩 나눠서 전달됩니다. 나눠진 조각을 chunk라고 부릅니다.
