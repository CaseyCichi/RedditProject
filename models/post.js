
module.exports = function(sequelize, DataTypes){
    var Post = sequelize.define('post', {
        postid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoincrement: true,
            primaryKey: true,
        },
        posttypeid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
            primaryKey: true,
        },
        parentttypeid: {
            type: DataTypes.INTEGER,
            allowNull: true,
            required: false,
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
            foreignKey: true,
        }
    }, {
        timestamps: true
    });
    return Post;
};