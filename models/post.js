module.exports = (sequelize, DataTypes) => {
    var Post = sequelize.define('Post', {
        // postid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     autoincrement: true,
        //     primaryKey: true,
        // },
        // parentid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     required: false,
        // },
        // posttype: {
        //     type: DataTypes.ENUM,
        //     values: ['Post', 'Comment', 'URL'],
        //     allowNull: false,
        //     required: true
        // },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
            required: false,
            // len: {
            //     notEmpty: true,
            //     args: [10, 100],
            //     msg: 'Title must be 10 to 256 characters.'
            // }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
            required: false,
            len: {
                notEmpty: true,
                args: [10, 100],
                msg: 'Title must be 10 to 256 characters.'
            }
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
            required: false,
            len: {
                notEmpty: true,
                args: [1, 1000],
                msg: 'Content must be 1 to 1000 characters.'
            }
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

    // Post.create({
    //     url: 'https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.ngsversion.1422285553360.adapt.1900.1.jpg',
    //     title: 'Mochi',
    //     content: 'mochimochi',
    // }, {
    //     fields: ['url', 'title', 'content']
    // }).then(post => {
    //     console.log(post.get({
    //         plain: true
    //     }));
    // });

    return Post;
};