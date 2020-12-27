#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');

const htmlTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Template</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>CLI Program</p>
</body>
</html>`;

const routerTemplate = `const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        res.send('ok');
    } catch(error) {
        console.error(error);
        next(error)
    }
});

module.exports = router;`;

const exist = (directory) => {
    try {
        fs.accessSync(directory, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK);
        return true;
    } catch (error) {
        return false;
    }
};

const mkdirp = (directory) => {
    const dirname = path.relative('.', path.normalize(directory)).split(path.sep).filter(p => !!p);
    dirname.forEach((d, idx) => {
        const pathBuilder = dirname.slice(0, idx + 1).join(path.sep);
        if (!exist(pathBuilder)) {
            fs.mkdirSync(pathBuilder);
        }
    });
};

const makeTemplate = (type, name, directory) => {
    mkdirp(directory);

    if (type === 'html') {
        const pathToFile = path.join(directory, `${name}.html`);
        if (exist(pathToFile)) {
            console.error(chalk.bold.red('이미 해당 파일이 존재합니다.'));
        } else {
            fs.writeFileSync(pathToFile, htmlTemplate);
            console.log(pathToFile, chalk.green('생성 완료'));
        }
    } else if (type === 'express-router') {
        const pathToFile = path.join(directory, `${name}.js`);
        if (exist(pathToFile)) {
            console.error(chalk.bold.red('이미 해당 파일이 존재합니다.'));
        } else {
            fs.writeFileSync(pathToFile, routerTemplate);
            console.log(pathToFile, chalk.green('생성 완료'));
        }
    } else {
        console.error(chalk.bold.red('html 또는 express-router 둘 중 하나를 입력하세요.'));
    }
};

const copyFile = (filename, directory) => {
    if (exist(filename)) {
        mkdirp(directory);
        fs.copyFileSync(filename, path.join(directory, filename));
        console.log(`${filename} 파일이 복사되었습니다.`);
    } else {
        console.error('파일이 존재하지 않습니다.');
    }
};

const rimraf = (p) => {
    if (exist(p)) {
        try {
            const dir = fs.readdirSync(p);
            dir.forEach((d) => {
                rimraf(path.join(p, d));
            });
            fs.rmdirSync(p);
            console.log(`${p} 폴더를 삭제했습니다.`);
        } catch (e) {
            fs.unlinkSync(p);
            console.log(`${p} 파일을 삭제했습니다.`);
        }
    } else {
        console.error('파일 또는 폴더가 존재하지 않습니다.');
    }
};

program
    .version('0.0.1', '-v --version')
    .usage('[options]');

program
    .command('template <type>')
    .usage('--filename [filename] --path [path]')
    .description('템플릿을 생성합니다.')
    .alias('tmpl')
    .option('-f, --filename [filename]', '파일명을 입력하세요', 'index')
    .option('-d, --directory [path]', '생성 경로를 입력하세요', '.')
    .action((type, options) => {
        makeTemplate(type, options.filename, options.directory);
    });

program
    .command('copy <filename> <directory>')
    .usage('<filename> <directory>')
    .description('파일을 복사합니다.')
    .action((filename, directory) => {
        copyFile(filename, directory);
    });

program
    .command('rimraf <path>')
    .usage('<path>')
    .description('지정한 경로와 그 하위 파일, 폴더를 지웁니다.')
    .action((path) => {
        rimraf(path);
    });

program
    .action((cmd, args) => {
        if (args) {
            console.log(chalk.bold.red('해당 명령어를 찾을 수 없습니다.'));
            program.help();
        } else {
            inquirer.prompt([{
                type: 'list',
                name: 'type',
                message: '템플릿 종류를 선택하세요.',
                choices: ['html', 'express-router'],
            }, {
                type: 'input',
                name: 'filename',
                message: '파일의 이름을 입력하세요.',
                default: 'index',
            }, {
                type: 'input',
                name: 'directory',
                message: '파일이 위치할 폴더의 경로를 입력하세요.',
                default: '.',
            }, {
                type: 'confirm',
                name: 'confirm',
                message: '생성하시겠습니까?',
            }])
                .then((answers) => {
                    if (answers.confirm) {
                        makeTemplate(answers.type, answers.filename, answers.directory);
                        console.log(chalk.rgb(128, 128, 128)('터미널을 종료합니다.'));
                    }
                });
        }
    })
    .parse(process.argv);