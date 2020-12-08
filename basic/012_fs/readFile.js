const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }

    console.log(data); //<Buffer ec 9d bd ea b8 b0>
    console.log(data.toString()); //읽기
});