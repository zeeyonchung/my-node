# 패키지 매니저

## npm이란
Node Package Manager.  
node를 설치하면 npm이 같이 설치된다.  

npm을 통해 다른 사람이 이미 만들어 놓은 모듈(외부 패키지)을 사용할 수 있다.

## 패키지 만들기 package.json
```shell script
# 패키지 시작
# package.json 파일이 생성된다.
npm init

# 외부 패키지 가져오기
# node_modules에 추가된다.
npm install express
npm install express --save-dev  # 개발 환경에서만 사용
npm install rimraf --global     # 명령어로 사용할 수 있는 패키지의 경우, global 옵션을 주면 명령어로 사용 가능

# 새로운 버전 확인
npm outdated

# 최신 버전으로 업데이트
npm update express
npm update                      # 전체 업데이트 (^4.14.0로 되어있다면 minor, patch 까지만)

# 패키지 삭제
npm remove morgan

# 패키지 검색
npm search express

# 어느 디펜던시로 설치되었는지 확인
npm ls body-parser
```

<package.json>
```json
{
  "name": "npmtest-2949",
  "version": "1.0.0",
  "description": "npm test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "engine": {
    "node": "10.6.0"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```
- engine: 해당 패키지가 사용할 node와 npm 버전
    - SemVer 버전에 따른다. `major.minor.patch`
    - patch 버그 수정, minor 신기능 수정, major 대규모 변화
    - `^` minor, patch 업데이트, `~` patch 업데이트, `부등호` 부등호 의미, `x.x.x` x는 모든 숫자를 의미
- main: 패키지의 가장 중요한 파일
    
## 패키지 배포하기
```shell script
# 버전 수정하기
npm version 1.0.1
npm version patch
npm version minor
npm version major

# 로그인
npm adduser

# 로그아웃
npm logout

# 배포하기
npm publish

# 삭제하기 (24시간 안에만 가능)
npm unpublish npmtest-2949 --force
```

## 프로그램 실행하기
- `node main.js`: main.js 실행
```json
{
    "scripts": {
      "start": "node ./bin/www"
    }
}
```
- `npm start`: package.json의 scripts에 있는 start 명령어가 실행. 설정이 없다면 `node server.js`가 실행.  