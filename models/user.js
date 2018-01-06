module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            unique: true,
            validate: {
                notEmpty: true,
                len: {
                    args: [3, 30],
                    msg: 'Username must be 8 to 30 characters.'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            validate: {
                notEmpty: true,
                len: {
                    args: [8, 255],
                    msg: 'Password must be 8 to 255 characters.'
                }
            }
        },
        furma: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
            required: true
        }
    }, {
        timestamps: true,
        hooks: {
            beforeCreate: (user, options, fn) => {
                user.createdat = new Date();
                user.updatedat = new Date();
                fn(null, user);
            },
            beforeUpdate: (user, options, fn) => {
                user.updatedat = new Date();
                fn(null, user);
            }
        }
    });

    User.associate = (models) => {
        User.hasMany(models.Post);
    };

    return User;
};