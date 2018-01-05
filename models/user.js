'use strict'

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoincrement: true,
            primaryKey: true,
        },
        Username: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        Pawup: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
            required: true
        },
        AddDate: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
            required: true
        }
    });
    return User;
};