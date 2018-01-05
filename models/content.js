'use strict'

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('content', {
        ContentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoincrement: true,
            primaryKey: true,
        },
        PostId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
            primaryKey: true,
        },
        Title: {
            type: DataTypes.String,
            allowNull: true,
            required: false,
        },
        Content: {
            type: DataTypes.String,
            allowNull: true,
            required: false,
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