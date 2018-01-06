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
                posts.createdat = new Date();
                posts.updatedat = new Date();
                fn(null, post);
            },
            beforeUpdate: (post, options, fn) => {
                post.updatedat = new Date();
                fn(null, post);
            }
        }
    });

    Post.associate = (models) => {
        Post.belongsTo(models.User);
        Post.hasOne(models.Content);
    };
    return Post;
};