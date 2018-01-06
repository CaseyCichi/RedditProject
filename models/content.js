module.exports = (sequelize, DataTypes) => {
    var Content = sequelize.define('Content', {
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
            beforeCreate: (content, options, fn) => {
                content.createdat = new Date();
                content.updatedat = new Date();
            },
            beforeUpdate: (content, options, fn) => {
                content.updatedat = new Date();
            }
        }
    });

    Content.associate = (models) => {
        Content.belongsTo(models.Post);
    };

    return Content;
};