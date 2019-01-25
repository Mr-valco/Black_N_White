//Define table

module.exports = function (connection, Sequelize) {
    var Black_List = connection.define('Black_List', {
        time: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        sso: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        action: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        device_ID: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        count: {
            type: Sequelize.STRING,
            allowNull: true
            
        },
        message: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

    return Black_List;
};