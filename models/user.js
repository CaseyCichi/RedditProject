module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        // userid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     autoincrement: true,
        //     primaryKey: true,
        // },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        furma: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
            required: true
        }
    }, {
        timestamps: true
    });

    User.associate = function (models) {
        User.hasMany(models.Post, {
            as: 'posts',
            foreignKey: 'id'
        });
    };

    return User;
};