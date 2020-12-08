const fs = require('fs');

fs.writeFile('./writeme.txt', '쓰기', (err) => {
    if (err) {
        throw err;
    }

    fs.readFile('./writeme.txt', (err, data) => {
        console.log(data.toString()); //쓰기
    })
});