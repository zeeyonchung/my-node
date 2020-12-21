#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.clear();
const answerCallback = (answer) => {
    if (answer === 'y') {
        console.log('으흠...');
        rl.close();
    } else if (answer === 'n') {
        console.log('반가워!');
        rl.close();
    } else {
        console.clear();
        console.log('y 또는 n만 입력하세요.');
        rl.question('당신은 사람입니까? (y/n)', answerCallback);
    }
};

rl.question('당신은 사람입니까? (y/n)', answerCallback);