const { Model } = require('sequelize');

module.exports = class Wallet extends Model {
    static init(sequelize, DataTypes) {
        return super.init({
            money: {
                type: DataTypes.INTEGER,
                allowNull: false,
                comment: '금액',
            },
            desc: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: '설명',
            },
            type: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                comment: 'TRUE면 수입, FALSE면 지출',
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Wallet',
            tableName: 'wallets',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    // 연관관계 표현
    // static associate(db) {
    //     db.Wallet.belongsTo(db.User, { through: 'UserWallet' });
    // }
};