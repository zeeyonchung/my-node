# learn-Sequelize

## 시작하기
```
npm i sequelize mysql2
npm i -g sequelize-cli
sequelize init
```

## 디렉토리
```
.
├── config
│   └── config.json
├── migrations
├── models
│   └── index.js
├── seeders
```

## 테이블 관계
- 1대1 : hasOne, belongsTo
- 1대다 : hasMany, belongsTo
- 다대다 : belongsToMany
