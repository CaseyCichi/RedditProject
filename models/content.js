
module.exports = function(sequelize, DataTypes){
    var Content = sequelize.define('content', {
        contentid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoincrement: true,
            primaryKey: true,
        },
        postid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
            required: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
            required: false,
        }
    }, {
        timestamps: true
    });
    return Content;
};