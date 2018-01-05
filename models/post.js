'use strict'

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        PostId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoincrement: true,
            primaryKey: true,
        },
        PostTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
            primaryKey: true,
        },
        ParentTypeId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            required: false,
        },
        ContentTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
            primaryKey: true,
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
            foreignKey: true,
        },
        AddDate: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
            required: true
        }
    });
    return Post;
};