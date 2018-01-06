module.exports = (sequelize, DataTypes) => {
    var Post = sequelize.define('Post', {
        postid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoincrement: true,
            primaryKey: true,
        },
        parentid: {
            type: DataTypes.INTEGER,
            allowNull: true,
            required: false,
        },
        posttype: {
            type: DataTypes.ENUM,
            values: ['Post', 'Comment', 'URL'],
            allowNull: false,
            required: true
        }
    }, {
        timestamps: true,
        hooks: {
            beforeCreate: (post, options, fn) => {
                post.createdat = new Date();
                post.updatedat = new Date();
            },
            beforeUpdate: (post, options, fn) => {
                post.updatedat = new Date();
            }
        }
    });

    Post.associate = (models) => {
        Post.belongsTo(models.User);
        Post.hasOne(models.Content);
    };
    return Post;
};