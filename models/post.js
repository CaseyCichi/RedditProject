module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define('Post', {
        // postid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     autoincrement: true,
        //     primaryKey: true,
        // },
        parentid: {
            type: DataTypes.INTEGER,
            allowNull: true,
            required: false,
        },
        posttype: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
            primaryKey: true,
        },
        // userid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     required: true,
        //     foreignKey: true,
        // }
    }, {
        timestamps: true
    });

    Post.associate = function (models) {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Post.hasOne(models.Content, {
            // as: 'Content',
            primaryKey: 'id'
        });
    };
    return Post;
};